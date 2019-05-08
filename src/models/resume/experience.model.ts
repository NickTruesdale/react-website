export interface Company {
  id: string;
  name: string;
}

export interface Job {
  companyId: string;
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  company?: Company;
}

export interface Experience {
  jobs: Job[]; 
}

export const addCompanyToJob = (job: Job, companies: Company[]) => ({
  ...job,
  company: companies.find(company => company.id === job.companyId)
});

export const loadExperience = (experience: Experience, companies: Company[]) => ({
  ...experience,
  jobs: experience.jobs.map(job => addCompanyToJob(job, companies))
});
