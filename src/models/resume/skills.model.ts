
export interface Skill {
  id: string;
  name: string;
  abbrev: string;
  category: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skills {
  all: Skill[];
}
