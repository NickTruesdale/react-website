import React from 'react';
import styles from './resume.styles';
import { withStyles, WithStyles, Typography } from '@material-ui/core';
import { Personal } from 'models';

interface Props extends WithStyles<typeof styles> {
  personal: Personal;
}

const PersonalSection: React.FC<Props> = props => {
  const { classes } = props;
  const { contact } = props.personal;

  return (
    <div className={classes.personalCard}>
      <Typography variant="h1" className={classes.name}>{contact.name}</Typography>
      <div className={classes.contactInfo}>
        <Typography variant="body1">{contact.phone}</Typography>
        <Typography variant="body1">{contact.email}</Typography>
        <Typography variant="body1">{contact.address1}</Typography>
      </div>
    </div>
  )
};

export default withStyles(styles)(PersonalSection);
