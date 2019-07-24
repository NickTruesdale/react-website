import { Contact } from '../resume/personal.model';

export interface CoverLetterData {
  id: string;
  name: string;
  date: string;
  contact: Contact;
  subject: string;
  salutation: string;
  paragraphs: string[];
}