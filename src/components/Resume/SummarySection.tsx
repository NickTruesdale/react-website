import React from 'react';
import styles from './resume.styles';
import { withStyles, WithStyles } from '@material-ui/core';
import { Summary } from 'models';

interface Props extends WithStyles<typeof styles> {
  summary: Summary;
}

const SectionHeader: React.FC<Props> = props => {
  const { summary, classes } = props;

  return (
    <div className={classes.summaryCard}>
      <div className={classes.header}>Summary</div>
      <div className={classes.body}>{summary.p1}</div>
      <div className={classes.body}>{summary.p2}</div>
    </div>
  )
};

export default withStyles(styles)(SectionHeader);
