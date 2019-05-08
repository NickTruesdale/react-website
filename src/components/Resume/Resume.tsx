import React from 'react';
import classNames from 'classnames';

import { withStyles, WithStyles } from '@material-ui/core';

import styles from './resume.styles';
import SkillsSection from './SkillsSection';
import SummarySection from './SummarySection';
import PersonalSection from './PersonalSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';

import { loadResume } from 'models';
import resumeJson from '../../assets/resume.json';
const resume = loadResume(resumeJson);


interface Props extends WithStyles<typeof styles> {}

const Resume: React.FC<Props> = props => {
  const { classes } = props;

  const left = classNames(classes.column, classes.left);
  const right = classNames(classes.column, classes.right);

  return (
    <div className={classes.page}>
      <div className={classes.content}>
        <PersonalSection personal={resume.personal} />
        <div className={classes.columns}>
          <div className={left}>
            <SummarySection summary={resume.summary} />
            <EducationSection education={resume.education} />
            <SkillsSection skills={resume.skills} />
          </div>
          <div className={right}>
            <ExperienceSection experience={resume.experience} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default withStyles(styles)(Resume);
