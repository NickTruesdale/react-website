import React from 'react';
import styles from './resume.styles';
import { withStyles, WithStyles, Typography } from '@material-ui/core';
import { Summary } from 'models';

interface Props extends WithStyles<typeof styles> {
  summary: Summary;
}

const SummarySection: React.FC<Props> = props => {
  const { summary } = props;

  return (
    <div>
      <Typography variant="h2">About Me</Typography>
      <Typography variant="body1">{summary.p1}</Typography>
      <Typography variant="body1">{summary.p2}</Typography>
    </div>
  )
};

export default withStyles(styles)(SummarySection);
