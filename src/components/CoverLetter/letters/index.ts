import { ResumeData, CoverLetterData } from 'models';

import resumeJson from 'assets/resume.json';

import microsoft from './microsoft-data-science.json';
import bmw1 from './bmw-research-engineer.json';
import bmw2 from './bmw-machine-learning.json';
import bmw3 from './bmw-autonomous-driving.json';
import aid from './aid-general.json';
import nvidia from './nvidia-general.json'

export const letters: CoverLetterData[] = [microsoft, bmw1, bmw2, bmw3, aid, nvidia];
export const resume: ResumeData = resumeJson;
