export interface School {
  id: string;
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  degrees: Degree[];
}

export interface Degree {
  id: string;
  title: string;
  abbrev: string;
  subject: string;
  startDate: string;
  endDate: string;
}

export interface Education {
  schools: School[];
  focus: string;
  thesis: string;
  honors: string;
}
