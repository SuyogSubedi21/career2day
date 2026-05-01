
import pb from '@/lib/pocketbaseClient';

export const resumeService = {
  async getResumes(userId) {
    if (!userId) throw new Error("User ID is required");
    return await pb.collection('resumes').getFullList({
      filter: `userId = "${userId}"`,
      sort: '-updatedAt',
      $autoCancel: false
    });
  },

  async getResumeById(id) {
    if (!id) throw new Error("Resume ID is required");
    return await pb.collection('resumes').getOne(id, {
      $autoCancel: false
    });
  },

  async createResume(userId, data) {
    if (!userId) throw new Error("User ID is required");
    const payload = {
      userId,
      name: data.name || 'Untitled Resume',
      template: data.template || 'modern',
      fullName: data.fullName || '',
      jobTitle: data.jobTitle || '',
      email: data.email || '',
      phone: data.phone || '',
      location: data.location || '',
      summary: data.summary || '',
      workExperience: data.workExperience || [],
      education: data.education || [],
      skills: data.skills || [],
      projects: data.projects || [],
      certifications: data.certifications || [],
      languages: data.languages || [],
      volunteerExperience: data.volunteerExperience || [],
      colors: data.colors || {},
      fonts: data.fonts || {}
    };
    return await pb.collection('resumes').create(payload, { $autoCancel: false });
  },

  async updateResume(id, data) {
    if (!id) throw new Error("Resume ID is required");
    // Ensure we don't accidentally update read-only fields
    const { id: _id, userId, created, updated, collectionId, collectionName, ...updateData } = data;
    return await pb.collection('resumes').update(id, updateData, { $autoCancel: false });
  },

  async deleteResume(id) {
    if (!id) throw new Error("Resume ID is required");
    return await pb.collection('resumes').delete(id, { $autoCancel: false });
  },

  async duplicateResume(id, newName) {
    const existing = await this.getResumeById(id);
    const { id: _id, created, updated, collectionId, collectionName, ...data } = existing;
    data.name = newName || `${data.name} (Copy)`;
    return await pb.collection('resumes').create(data, { $autoCancel: false });
  }
};
