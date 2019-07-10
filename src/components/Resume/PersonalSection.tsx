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
  const { classes, personal } = props;
  const { name, phone, email, address1, address2, address3 } = personal.contact;

  const personalDict = {
    'Phone': phone,
    'Email': email,
    'Address': `${address1}\n${address2 + ', ' + address3}`
  };

  const iconDict = {
    'Phone': <PhoneIcon className={classes.tableIconContent} color="primary" />,
    'Email': <EmailIcon className={classes.tableIconContent} color="primary" />,
    'Address': <HomeIcon className={classes.tableIconContent} color="primary" />,
  };

  return (
    <div>
      <Avatar alt="Nicholas Truesdale" src={photo} className={classes.avatar} />
      <Typography variant="h1">{name}</Typography>  
      <DictionaryTable dict={personalDict} icons={iconDict} />
    </div>
  )
};

export default withStyles(styles)(PersonalSection);
