import React from 'react';
import styles from './resume.styles';
import { withStyles, WithStyles, Typography } from '@material-ui/core';
import { Education, Degree } from 'models';
import { format } from 'date-fns';

interface Props extends WithStyles<typeof styles> {
  education: Education;
}

const formatDegree = (degree: Degree) => {
  return degree.abbrev + ' ' + degree.subject;
}

const formatDate = (date: string) => {
  return date ? format(new Date(date), 'YYYY.MM') : 'Present';
}

const EducationSection: React.FC<Props> = props => {
  const { classes } = props;
  const { schools, honors } = props.education;

  return (
    <div>
      <Typography variant="h2">Education</Typography>
      {schools.map(school => (
        <div className={classes.jobCard} key={school.id}>
          <div className={classes.jobDates}>
            <Typography variant="subtitle1">{formatDate(school.endDate)}</Typography>
            <Typography variant="subtitle1">{formatDate(school.startDate)}</Typography>
          </div>
          <div className={classes.jobContent}>
            <Typography variant="h3">{school.name}</Typography>
            <Typography variant="h4">{school.location}</Typography>
            
            <Typography variant="body1">
              {school.degrees.map(degree => (
                <div key={degree.id}>{formatDegree(degree)}</div>  
              ))}
            </Typography>  
            
            <Typography variant="body1">{honors}</Typography>
          </div>
        </div>        
      ))}
    </div>
  )
};

export default withStyles(styles)(EducationSection);
