
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export const exportToPDF = async (elementId, filename = 'resume.pdf') => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error('Resume element not found');
    return false;
  }

  try {
    // Hide UI elements that shouldn't be printed (if any)
    const canvas = await html2canvas(element, {
      scale: 2, // Higher quality
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(filename);
    return true;
  } catch (error) {
    console.error('PDF Export Error:', error);
    return false;
  }
};

export const exportToTXT = (data, filename = 'resume.txt') => {
  try {
    let content = `${data.fullName || ''}\n${data.jobTitle || ''}\n`;
    content += `${data.email || ''} | ${data.phone || ''} | ${data.location || ''}\n\n`;
    
    if (data.summary) content += `PROFESSIONAL SUMMARY\n${data.summary}\n\n`;

    if (data.workExperience?.length) {
      content += `WORK EXPERIENCE\n`;
      data.workExperience.forEach(job => {
        content += `${job.position} at ${job.company}\n`;
        content += `${job.startDate || ''} - ${job.endDate || 'Present'}\n`;
        if (job.description) content += `${job.description}\n`;
        content += `\n`;
      });
    }

    if (data.education?.length) {
      content += `EDUCATION\n`;
      data.education.forEach(edu => {
        content += `${edu.degree} in ${edu.field} - ${edu.school}\n`;
        content += `Graduation: ${edu.graduationDate || ''}\n\n`;
      });
    }

    if (data.skills?.length) {
      content += `SKILLS\n`;
      data.skills.forEach(skill => {
        content += `- ${skill.name} (${skill.proficiency || skill.category || ''})\n`;
      });
      content += `\n`;
    }

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
  } catch (error) {
    console.error('TXT Export Error:', error);
    return false;
  }
};

export const exportToDOCX = (data, elementId, filename = 'resume.doc') => {
  try {
    const element = document.getElementById(elementId);
    if (!element) return false;

    // Create a simple HTML document that MS Word can open
    const html = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>${data.fullName || 'Resume'}</title></head>
      <body>
        ${element.innerHTML}
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff', html], {
      type: 'application/msword'
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
  } catch (error) {
    console.error('DOCX Export Error:', error);
    return false;
  }
};
