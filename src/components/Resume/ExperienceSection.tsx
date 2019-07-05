import React from 'react';
import styles from './resume.styles';
import { withStyles, WithStyles, Typography, List, ListItem } from '@material-ui/core';
import { Experience } from 'models';
import { format } from 'date-fns';

interface Props extends WithStyles<typeof styles> {
  experience: Experience;
}

const formatDate = (date: string) => {
  return date ? format(new Date(date), 'YYYY.MM') : 'Present';
}

const ExperienceSection: React.FC<Props> = props => {
  const { experience, classes } = props;
  const jobs = experience.jobs;

  return (
    <div>
      <Typography variant="h2">Experience</Typography>
      {jobs.map(job => (
        <div className={classes.jobCard} key={job.id}>
          <div className={classes.jobDates}>
            <Typography variant="subtitle1">{formatDate(job.endDate)}</Typography>
            <Typography variant="subtitle1">{formatDate(job.startDate)}</Typography>
          </div>
          <div className={classes.jobContent}>
            <Typography variant="h3">{job.title}</Typography>
            <Typography variant="h4">{job.company + '  -  ' + job.location}</Typography>
            <Typography variant="body1">{job.summary}</Typography>
            <List className={classes.jobPointList}>
              {job.points.map((point, index) => (
                <ListItem>
                  <Typography className={classes.jobPoint} variant="body1" key={job.id + index}>{point}</Typography>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      ))}
    </div>
  )
};

export default withStyles(styles)(ExperienceSection);
