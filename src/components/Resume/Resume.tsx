import React from 'react';

import { createStyles, withStyles, Theme, WithStyles } from '@material-ui/core';

import Header from './components/Header';

import { ResumeData } from 'models';
import resumeJson from '../../assets/resume.json';
const resume = resumeJson as ResumeData;

const styles = (theme: Theme) => createStyles({
  root: {

  }
});

interface Props extends WithStyles<typeof styles> {}

const Resume: React.FC<Props> = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Header contact={resume.me} person={resume.people[resume.me.personId]}/>
    </div>
  )
};

export default withStyles(styles)(Resume);
