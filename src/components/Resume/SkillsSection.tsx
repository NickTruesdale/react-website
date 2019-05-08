import React from 'react';
import styles from './resume.styles';
import { withStyles, WithStyles } from '@material-ui/core';
import { Skills } from 'models';


interface Props extends WithStyles<typeof styles> {
  skills: Skills;
}

const SectionHeader: React.FC<Props> = props => {
  const { classes } = props;

  return (
    <div className={classes.skillsCard}>
      <div className={classes.header}>Computer Skills</div>
    </div>
  )
};

export default withStyles(styles)(SectionHeader);
