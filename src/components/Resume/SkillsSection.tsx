import React from 'react';
import styles from './resume.styles';
import { withStyles, WithStyles, Typography } from '@material-ui/core';
import { Skills } from 'models';


interface Props extends WithStyles<typeof styles> {
  skills: Skills;
}

const SectionHeader: React.FC<Props> = props => {
  const { classes } = props;

  return (
    <div className={classes.skillsCard}>
      <Typography variant="h2">Computer Skills</Typography>
    </div>
  )
};

export default withStyles(styles)(SectionHeader);
