import React from 'react';
import styles from './resume.styles';
import { withStyles, WithStyles } from '@material-ui/core';
import { Education, groupDegreesBySchool } from 'models';

interface Props extends WithStyles<typeof styles> {
  education: Education;
}

const EducationSection: React.FC<Props> = props => {
  const { classes } = props;
  const { degrees, focus, thesis, honors } = props.education;

  const schoolDict = groupDegreesBySchool(degrees);
  const schools = Object.keys(schoolDict).map(id => schoolDict[id]);

  return (
    <div className={classes.educationCard}>
      <div className={classes.header}>Education</div>
      {schools.map(school => (
        <div className={classes.subheader}>{school.school ? school.school.name : ''}</div>
      ))}
      <div className={classes.body}>Focus: {focus}</div>
      <div className={classes.body}>Thesis: {thesis}</div>
      <div className={classes.body}>Honors: {honors}</div>
    </div>
  )
};

export default withStyles(styles)(EducationSection);
