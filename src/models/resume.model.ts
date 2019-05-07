

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
}

export interface Contact {
  personId: number;
  email: string;
  phone: string;
}

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
}

export interface ResumeData {
  people: Person[];
  companies: Company[];
  me: Contact;
  jobs: Job[];
}
