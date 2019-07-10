import React from 'react';

import { withStyles, WithStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import signature from 'assets/signature.png';
import styles from './cover-letter.styles';
import { Personal } from 'models';

interface Props extends WithStyles<typeof styles> {
  personal: Personal;
}

const Footer: React.FC<Props> = props => {
  const { classes, personal } = props;
  const { name, nickname } = personal.contact;

  return (
    <div>
      <Typography variant="body1">Sincerely,</Typography>
      <img className={classes.signature} src={signature} />
      <Typography variant="body1">{nickname || name}</Typography>
    </div>
  );
};

export default withStyles(styles)(Footer);
