import React from 'react';
import styles from './resume.styles';
import { withStyles, WithStyles, Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';

interface Props extends WithStyles<typeof styles> {
  variant: TypographyProps['variant'];
}

const Leaders: React.FC<Props> = props => {
  const DOTS = new Array(100).fill('·').join(' ');
  const { variant, classes } = props;
  return (
    <Typography variant={variant} className={classes.leaders}>{DOTS}</Typography>
  );
};

export default withStyles(styles)(Leaders);
