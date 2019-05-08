import React from 'react';
import { createStyles, withStyles, Theme, WithStyles } from '@material-ui/core';
import { Personal, getContactFullName } from 'models';

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    padding: `${theme.spacing.unit}px`,
    backgroundColor: '#bbdddd'
  },
  name: {
    fontWeight: 400,
    fontSize: '36px',
    flexGrow: 1,
    margin: 0,
  },
  contactInfo: {
    width: '200px',
    border: `2px solid black`,
    borderRadius: '4px',
    backgroundColor: '#eeaa66',
    fontSize: '10px'
  },
  contactData: {
    margin: 0
  },
  contactIcons: {
    margin: 0
  }
});

interface Props extends WithStyles<typeof styles> {
  personal: Personal;
}

const PersonalSection: React.FC<Props> = props => {
  const { classes } = props;
  const { contact } = props.personal;

  return (
    <div className={classes.root}>
      <div className={classes.name}>{getContactFullName(contact)}</div>
      <div className={classes.contactInfo}>
        <div className={classes.contactData}>
          <div>{contact.phone}</div>
          <div>{contact.email}</div>
          <div>{contact.address1}</div>
        </div>
        <div className={classes.contactIcons}>

        </div>
      </div>
    </div>
  )
};

export default withStyles(styles)(PersonalSection);
