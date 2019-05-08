
import { Skills, loadSkills } from './skills.model';
import { Summary, loadSummary } from './summary.model';
import { Personal, Person, loadPersonal } from './personal.model';
import { Education, School, loadEducation } from './education.model';
import { Experience, Company, loadExperience } from './experience.model';

export interface ResumeJson {
  people: Person[];
  schools: School[];
  companies: Company[];
  
  skills: Skills;
  summary: Summary;
  personal: Personal;
  education: Education;
  experience: Experience;
}

export interface Resume {
  skills: Skills;
  summary: Summary;
  personal: Personal;
  education: Education;
  experience: Experience;
}

export const loadResume = (data: ResumeJson): Resume => ({
  skills: loadSkills(data.skills),
  summary: loadSummary(data.summary),
  personal: loadPersonal(data.personal, data.people),
  education: loadEducation(data.education, data.schools),
  experience: loadExperience(data.experience, data.companies)
});
