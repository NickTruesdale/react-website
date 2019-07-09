import React from 'react';
import classNames from 'classnames';

import { withStyles, WithStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import PersonalSection from './PersonalSection';
import SummarySection from './SummarySection';
import SkillsSection from './SkillsSection';

import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import DictionaryTable from './DictionaryTable';

import styles from './resume.styles';
import resumeJson from 'assets/resume.json';
import { ResumeData } from 'models';

const resume = resumeJson as ResumeData;


interface Props extends WithStyles<typeof styles> {}

const Resume: React.FC<Props> = props => {
  const { classes } = props;

  const left = classNames(classes.column, classes.left);
  const right = classNames(classes.column, classes.right);

  const languages = {
    'English': 'Native',
    'German': 'B1',
    'Spanish': 'A2'
  }

  const hobbies = {
    'Outdoor': 'Travel, Skiing, Volleyball, Camping, Gardening',
    'Indoor': 'Cooking, Video Games, Cocktail Mixing'
  };

  return (
    <div className={classes.columns}>
      <div className={left}>
        <PersonalSection personal={resume.personal} />
        <SummarySection summary={resume.summary} />
        <SkillsSection skills={resume.skills} />

        <Typography variant="h2">Languages</Typography>
        <DictionaryTable dict={languages} />

        <Typography variant="h2">Life Skills</Typography>
        <DictionaryTable dict={hobbies} />
      </div>
      <div className={right}>
        <ExperienceSection experience={resume.experience} />
        <EducationSection education={resume.education} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Resume);
