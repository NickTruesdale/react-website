
export interface Skill {
  name: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skills {
  categories: SkillCategory[];
}
