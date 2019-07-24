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
  const { name, phone, email, address1, address2, address3 } = personal.contact;

  const details = [phone, '•', email, '•', address1 + ', ' + address2 + ', ' + address3];

  return (
    <div>
      <Typography variant="h1">{name}</Typography>
      <div className={classes.headerDetails}>
        {details.map((detail, index) => (
          <Typography variant="caption" key={detail + index}>{detail}</Typography>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);
