
import { Skills } from './skills.model';
import { Summary } from './summary.model';
import { Personal } from './personal.model';
import { Education } from './education.model';
import { Experience } from './experience.model';

export interface ResumeData {
  skills: Skills;
  summary: Summary;
  personal: Personal;
  education: Education;
  experience: Experience;
}
