import React from 'react';
import styles from './resume.styles';
import { withStyles, WithStyles, Typography, Avatar } from '@material-ui/core';
import {
  Phone as PhoneIcon,
  MailOutline as EmailIcon,
  Home as HomeIcon,
} from '@material-ui/icons';

import { Personal } from 'models';
import DictionaryTable from './DictionaryTable';
import photo from 'assets/headshot-light-small.png';

interface Props extends WithStyles<typeof styles> {
  personal: Personal;
}

const PersonalSection: React.FC<Props> = props => {
  const { classes } = props;
  const { contact } = props.personal;

  const personalDict = {
    'Phone': contact.phone,
    'Email': contact.email,
    'Address': `${contact.address1}\n${contact.address2}`
  };

  const iconDict = {
    'Phone': <PhoneIcon className={classes.tableIconContent} color="primary" />,
    'Email': <EmailIcon className={classes.tableIconContent} color="primary" />,
    'Address': <HomeIcon className={classes.tableIconContent} color="primary" />,
  };

  return (
    <div>
      <Avatar alt="Nicholas Truesdale" src={photo} className={classes.avatar} />
      <Typography variant="h1">{contact.name}</Typography>  
      <DictionaryTable dict={personalDict} icons={iconDict} />
    </div>
  )
};

export default withStyles(styles)(PersonalSection);
