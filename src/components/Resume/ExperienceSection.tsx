import React from 'react';
import styles from './resume.styles';
import { withStyles, WithStyles } from '@material-ui/core';
import { Experience } from 'models';

interface Props extends WithStyles<typeof styles> {
  experience: Experience;
}

const ExperienceSection: React.FC<Props> = props => {
  const { classes } = props;

  return (
    <div className={classes.experienceCard}>
      <div className={classes.header}>Experience</div>
    </div>
  )
};

export default withStyles(styles)(ExperienceSection);
