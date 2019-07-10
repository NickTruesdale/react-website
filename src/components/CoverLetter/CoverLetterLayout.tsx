import React from 'react';

import { withStyles, WithStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { format } from 'date-fns';

import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';

import styles from './cover-letter.styles';
import resumeJson from 'assets/resume.json';
import letterJson from './letters/microsoft-data-science.json';

import { ResumeData, CoverLetterData } from 'models';

const resume = resumeJson as ResumeData;
const letter = letterJson as CoverLetterData;

const formatDate = (date: string) => {
  return date ? format(new Date(date), 'D MMMM, YYYY') : 'Present';
}

interface Props extends WithStyles<typeof styles> {}

const CoverLetterLayout: React.FC<Props> = props => {
  const { classes } = props;
  return (
    <div>
      <Header personal={resume.personal} />
      <Typography variant="body1">{formatDate(letter.date)}</Typography>
      <Contact contact={letter.contact} />
      
      <br />
      <Body content={letter} />
      
      <Footer personal={resume.personal} />
    </div>
  );
};

export default withStyles(styles)(CoverLetterLayout);
