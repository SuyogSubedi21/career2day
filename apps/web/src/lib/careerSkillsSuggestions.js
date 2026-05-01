
export const careerSkills = {
  'Data Analyst': ['SQL', 'Python', 'Tableau', 'Excel', 'Statistics', 'Power BI', 'Data Visualization', 'R', 'Machine Learning Basics'],
  'Software Engineer': ['JavaScript', 'React', 'Node.js', 'System Design', 'Databases', 'TypeScript', 'Java', 'Python', 'AWS', 'Git'],
  'DevOps Engineer': ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux', 'Terraform', 'Ansible', 'Jenkins', 'Bash', 'Python']
};

export const getSuggestions = (career) => careerSkills[career] || [];
