
import pb from '@/lib/pocketbaseClient.js';

// Module-level lock — prevents double execution from React StrictMode's double-invoke
let _seedPromise = null;

export function seedCareerDataFromGitHub() {
  if (_seedPromise) return _seedPromise;
  _seedPromise = _doSeed().catch(e => { _seedPromise = null; throw e; });
  return _seedPromise;
}

async function _doSeed() {
  try {
    console.log('[Seed] Checking existing career data...');
    // Prevent duplicate seeding if data already exists
    const existingCareers = await pb.collection('careers').getList(1, 1, { $autoCancel: false });
    if (existingCareers.totalItems > 0) {
      console.log(`[Seed] Data already exists (${existingCareers.totalItems} careers found). Skipping seed process to prevent duplicates.`);
      return { success: true, message: 'Already seeded', results: { careers: existingCareers.totalItems } };
    }

    console.log('[Seed] Fetching career data from GitHub...');
    const response = await fetch('https://raw.githubusercontent.com/SuyogSubedi21/career-data/refs/heads/main/careerinfo.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Use text() + manual parsing because the file may contain multiple concatenated JSON arrays
    const text = await response.text();
    console.log('[Seed] Data fetched successfully. Parsing structure...');

    const results = {
      careers: 0,
      skills: 0,
      roadmaps: 0,
      interviewQuestions: 0,
      errors: []
    };

    const safeCreate = async (collection, payload) => {
      try {
        await pb.collection(collection).create(payload, { $autoCancel: false });
        return true;
      } catch (err) {
        console.warn(`[Seed] Failed to create record in ${collection}:`, err.message);
        results.errors.push(`[${collection}] ${err.message}`);
        return false;
      }
    };

    // Repair JSON arrays that have a missing closing } before career separators.
    // Some career objects are missing their closing } — detected by the pattern where
    // }] } } appears before ,\n  { "id": N (quiz closes but career object never closes).
    const repairJsonSegment = (seg) => {
      // Fix 1: missing } between career objects (mid-array)
      let fixed = seg.replace(/(\}\]\s*\}\s*\})(,\s*\{\s*"id"\s*:)/g, '$1}$2');
      // Fix 2: missing } for the last career object in the array (end-of-array)
      fixed = fixed.replace(/(\}\]\s*\}\s*\})(\s*\]\s*)$/, '$1}$2');
      return fixed;
    };

    // Parse potentially concatenated JSON arrays using depth tracking + repair
    const extractValidArrays = (rawText) => {
      let depth = 0, inStr = false, escape = false, arrayStart = -1;
      const all = [];
      for (let i = 0; i < rawText.length; i++) {
        const c = rawText[i];
        if (escape) { escape = false; continue; }
        if (c === '\\' && inStr) { escape = true; continue; }
        if (c === '"') { inStr = !inStr; continue; }
        if (inStr) continue;
        if (c === '[') { if (depth === 0) arrayStart = i; depth++; }
        else if (c === ']') {
          depth--;
          if (depth === 0 && arrayStart >= 0) {
            const raw = rawText.substring(arrayStart, i + 1);
            // First try as-is, then try repaired
            let arr = null;
            try { arr = JSON.parse(raw); } catch {
              try { arr = JSON.parse(repairJsonSegment(raw)); } catch { /* skip */ }
            }
            if (Array.isArray(arr) && arr.length > 0) all.push(...arr);
            arrayStart = -1;
          }
        }
      }
      return all;
    };

    let careersList = [];
    try {
      const data = JSON.parse(text);
      careersList = Array.isArray(data) ? data : (data.careers || []);
    } catch {
      careersList = extractValidArrays(text);
    }

    console.log(`[Seed] Found ${careersList.length} careers in JSON. Starting insertion...`);

    // Helper: parse salary range string like "$150,000 - $250,000"
    const parseSalaryRange = (salaryStr) => {
      if (!salaryStr || typeof salaryStr !== 'string') return { min: 0, max: 0, avg: 0 };
      const nums = salaryStr.replace(/[\$,]/g, '').match(/\d+/g);
      if (!nums || nums.length < 2) return { min: 0, max: 0, avg: 0 };
      const min = parseInt(nums[0]);
      const max = parseInt(nums[1]);
      return { min, max, avg: Math.round((min + max) / 2) };
    };

    for (const career of careersList) {
      // Support both "name" and "title" fields in the JSON
      const careerName = career.name || career.title || 'Unknown Career';
      const careerSlug = career.slug || careerName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      if (!careerSlug || careerSlug === 'unknown-career') {
        console.warn('[Seed] Skipping career with no identifiable slug/name:', career);
        continue;
      }

      // Parse salary — supports numeric fields OR string like "$150,000 - $250,000"
      const salaryRange = parseSalaryRange(career.avg_salary);
      const entrySalary = career.entrySalary || salaryRange.min;
      const midSalary   = career.midSalary   || career.averageSalary || salaryRange.avg;
      const seniorSalary = career.seniorSalary || salaryRange.max;

      // 1. Seed Career
      const careerSuccess = await safeCreate('careers', {
        name: careerName,
        slug: careerSlug,
        description: career.description || '',
        overview: career.overview || career.description || '',
        averageSalary: midSalary,
        entrySalary,
        midSalary,
        seniorSalary,
        jobDemand: career.jobDemand || career.demand || 'Medium',
        relatedCareers: career.relatedCareers || []
      });
      if (careerSuccess) results.careers++;

      // 2. Seed Skills — support flat array OR skills embedded in roadmap phases
      let skills = career.skills || career.skillsRequired || [];
      if ((!Array.isArray(skills) || skills.length === 0) && Array.isArray(career.roadmap)) {
        // Extract unique skills from all roadmap phases
        const seen = new Set();
        skills = career.roadmap
          .flatMap(phase => Array.isArray(phase.skills) ? phase.skills : [])
          .filter(s => { const key = typeof s === 'string' ? s : s.name; return key && !seen.has(key) && seen.add(key); });
      }
      if (Array.isArray(skills)) {
        for (const skill of skills) {
          const skillName = typeof skill === 'string' ? skill : (skill.name || skill.skillName || 'Unknown Skill');
          const success = await safeCreate('careerSkills', {
            skillName,
            category: skill.category || 'Technical',
            difficulty: skill.difficulty || 'Intermediate',
            description: skill.description || '',
            relatedCareers: [careerSlug]
          });
          if (success) results.skills++;
        }
      }

      // 3. Seed Roadmaps
      const roadmaps = career.roadmap || career.roadmaps || [];
      if (Array.isArray(roadmaps)) {
        for (let i = 0; i < roadmaps.length; i++) {
          const phase = roadmaps[i];
          const success = await safeCreate('careerRoadmaps', {
            careerSlug,
            phase: phase.phase || (i + 1),
            phaseTitle: phase.title || phase.phaseTitle || `Phase ${i + 1}`,
            duration: phase.duration || '1-3 months',
            skills: Array.isArray(phase.skills) ? phase.skills : (phase.skills ? [phase.skills] : []),
            resources: Array.isArray(phase.resources) ? phase.resources : (phase.resources ? [phase.resources] : [])
          });
          if (success) results.roadmaps++;
        }
      }

      // 4. Seed Interview Questions
      // Prefer quiz Q&A (which have answers) over technical_100 (strings only)
      const iq = career.interview_questions || {};
      const quiz = iq.quiz || {};
      const quizItems = [
        ...(Array.isArray(quiz.basic)  ? quiz.basic.map(q  => ({ ...q, difficulty: 'Basic'    })) : []),
        ...(Array.isArray(quiz.medium) ? quiz.medium.map(q => ({ ...q, difficulty: 'Medium'   })) : []),
        ...(Array.isArray(quiz.hard)   ? quiz.hard.map(q   => ({ ...q, difficulty: 'Hard'     })) : []),
      ];

      let questions = career.interviewQuestions || career.questions || [];
      if (!Array.isArray(questions) || questions.length === 0) {
        if (quizItems.length > 0) {
          // Use quiz questions (with answers stored in explanation)
          questions = quizItems.map((q, i) => ({
            questionNumber: i + 1,
            question: q.q || q.question || 'Unknown Question',
            category: 'Technical',
            difficulty: q.difficulty || 'Intermediate',
            explanation: q.answer
              ? `Answer: ${q.answer}${Array.isArray(q.options) ? `\nOptions: ${q.options.join(' | ')}` : ''}`
              : ''
          }));
        } else if (Array.isArray(iq.technical_100)) {
          // Fallback: use string questions without answers
          questions = iq.technical_100.map((q, i) => ({
            questionNumber: i + 1,
            question: typeof q === 'string' ? q : (q.question || q.q || 'Unknown Question'),
            category: 'Technical',
            difficulty: 'Intermediate',
            explanation: ''
          }));
        }
      }
      if (Array.isArray(questions)) {
        for (let i = 0; i < questions.length; i++) {
          const q = questions[i];
          const success = await safeCreate('careerInterviewQuestions', {
            careerSlug,
            questionNumber: q.questionNumber || (i + 1),
            question: q.question || q.title || q.q || 'Unknown Question',
            category: q.category || 'Technical',
            difficulty: q.difficulty || 'Intermediate',
            explanation: q.explanation || q.answer || ''
          });
          if (success) results.interviewQuestions++;
        }
      }
    }

    console.log('[Seed] Seeding completed successfully. Final results:', results);
    return { success: true, results };

  } catch (error) {
    console.error('[Seed] Critical error during career data seeding:', error);
    return { success: false, error: error.message };
  }
}
