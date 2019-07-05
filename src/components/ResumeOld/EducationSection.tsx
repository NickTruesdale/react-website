import React from 'react';
import styles from './resume.styles';
import { withStyles, WithStyles, Typography } from '@material-ui/core';
import { Education, Degree } from 'models';
import { format } from 'date-fns';

import DictionaryTable from './DictionaryTable';
import Leaders from './Leaders';

interface Props extends WithStyles<typeof styles> {
  education: Education;
}

const formatDegree = (degree: Degree) => {
  return degree.abbrev + ' ' + degree.subject;
}

const formatDate = (date: string) => {
  return format(new Date(date), 'MM.YY');
};

const EducationSection: React.FC<Props> = props => {
  const { classes } = props;
  const { schools, focus, thesis, honors } = props.education;

  const tableDict = {
    'Focus': focus,
    'Thesis': thesis,
    'Honors': honors
  };

  return (
    <div className={classes.educationCard}>
      <Typography variant="h2">Education</Typography>
      {schools.map(school => (
        <div className={classes.degreeList} key={school.id}>
          <Typography variant="h3">{school.name}</Typography>
          {school.degrees.map(degree => (
            <div className={classes.withLeaders} key={school.id + degree.id}>
              <Typography variant="body1">{formatDegree(degree)}</Typography>
              <Leaders variant="body1" />
              <Typography variant="body1">{formatDate(degree.endDate)}</Typography>
            </div>
          ))}  
        </div>
      ))}
      <DictionaryTable dict={tableDict} />
    </div>
  )
};

export default withStyles(styles)(EducationSection);
