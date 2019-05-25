import React from 'react';
import classNames from 'classnames';

import { withStyles, WithStyles, MuiThemeProvider } from '@material-ui/core';

import themes from './resume.theme';
import styles from './resume.styles';
import SkillsSection from './SkillsSection';
import SummarySection from './SummarySection';
import PersonalSection from './PersonalSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';

import resumeJson from '../../assets/resume.json';
import { ResumeData } from 'models';

const resume = resumeJson as ResumeData;


interface Props extends WithStyles<typeof styles> {}

const Resume: React.FC<Props> = props => {
  const { classes } = props;

  const left = classNames(classes.column, classes.left);
  const right = classNames(classes.column, classes.right);

  return (
    <MuiThemeProvider theme={themes.serif}>
      <div className={classes.container}>
        <div className={classes.page}>
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
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(Resume);
