
export interface Job {
  id: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  title: string;
  summary: string;
  points: string[];
}

export interface Experience {
  jobs: Job[]; 
}
