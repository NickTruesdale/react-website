import React from 'react';

import { withStyles, WithStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import styles from './cover-letter.styles';
import { Personal } from 'models';

interface Props extends WithStyles<typeof styles> {
  personal: Personal;
}

const Header: React.FC<Props> = props => {
  const { classes, personal } = props;
  const { name, phone, email, address1, address2 } = personal.contact;

  return (
    <div>
      <Typography variant="h1">{name}</Typography>
      <div className={classes.headerDetails}>
        <Typography variant="caption">{phone}</Typography>
        <Typography variant="caption">{email}</Typography>
        <Typography variant="caption">{address1 + ', ' + address2}</Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);
