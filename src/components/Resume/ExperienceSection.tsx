import React from 'react';
import styles from './resume.styles';
import { withStyles, WithStyles, Typography, List, ListItem } from '@material-ui/core';
import { Experience } from 'models';
import { format } from 'date-fns';

import Leaders from './Leaders';

interface Props extends WithStyles<typeof styles> {
  experience: Experience;
}

const formatDate = (date: string) => {
  return format(new Date(date), 'YYYY.MM');
}

const formatDateRange = (start: string, end: string) => {
  return formatDate(start) + ' – ' + (end ? formatDate(end) : 'Current');
}

const ExperienceSection: React.FC<Props> = props => {
  const { experience, classes } = props;
  const jobs = experience.jobs;

  return (
    <div className={classes.experienceCard}>
      <Typography variant="h2">Experience</Typography>
      {jobs.map(job => (
        <div key={job.id} className={classes.jobCard}>
          <div className={classes.withLeaders}>
            <Typography variant="h3">{job.company}</Typography>
            <Leaders variant="h3" />
            <Typography variant="h3">{formatDateRange(job.startDate, job.endDate)}</Typography>
          </div>
          <Typography variant="h4">{job.title}</Typography>
          <Typography variant="body1">{job.summary}</Typography>
          <List>
            {job.points.map((point, index) => (
              <Typography variant="body1" key={job.id + index}>
                <ListItem>{point}</ListItem>
              </Typography>
            ))}
          </List>
        </div>
      ))}
    </div>
  )
};

export default withStyles(styles)(ExperienceSection);
