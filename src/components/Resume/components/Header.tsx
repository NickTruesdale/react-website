import React from 'react';

import { createStyles, withStyles, Theme, WithStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import { Contact, Person } from '../../../models';

const styles = (theme: Theme) => createStyles({
  root: {

  }
});

interface Props extends WithStyles<typeof styles> {
  contact: Contact;
  person: Person;
}

const Header: React.FC<Props> = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h5">Nicholas Truesdale</Typography>
    </div>
  )
};

export default withStyles(styles)(Header);
