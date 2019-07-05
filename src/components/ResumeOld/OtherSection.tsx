import React from 'react';
import styles from './resume.styles';
import { withStyles, WithStyles, Typography } from '@material-ui/core';

interface Props extends WithStyles<typeof styles> {}

const OtherSection: React.FC<Props> = props => {
  const { classes } = props;

  return (
    <div className={classes.skillsCard}>
      <Typography variant="h2">Personal Info</Typography>
    </div>
  )
};

export default withStyles(styles)(OtherSection);
