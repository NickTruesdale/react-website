import { Contact } from '../resume/personal.model';

export interface CoverLetterData {
  contact: Contact;
  date: string;
  subject: string;
  salutation: string;
  paragraphs: string[];
}