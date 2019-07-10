import React from 'react';

import { withStyles, WithStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import styles from './cover-letter.styles';
import { Contact } from 'models';

interface Props extends WithStyles<typeof styles> {
  contact: Contact;
}

const ContactInfo: React.FC<Props> = props => {
  const { classes, contact } = props;
  const { name, address1, address2, address3 } = contact;

  return (
    <div>
      <Typography variant="body1">
        <div>{name}</div>
        <div>{address1}</div>
        <div>{address2}</div>
        <div>{address3}</div>
      </Typography>
    </div>
  );
};

export default withStyles(styles)(ContactInfo);
