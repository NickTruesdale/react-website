import React from 'react';
import styles from './resume.styles';
import { withStyles, WithStyles, Typography } from '@material-ui/core';
import { Skills, Skill } from 'models';

import DictionaryTable from './DictionaryTable';

interface Props extends WithStyles<typeof styles> {
  skills: Skills;
}

interface SkillCategories {
  [key: string]: Skill[];
}

const SkillsSection: React.FC<Props> = props => {
  const { skills } = props;

  const categories: SkillCategories = skills.all.reduce((dict: SkillCategories, skill) => ({
    ...dict,
    [skill.category]: [...(dict[skill.category] || []), skill]
  }), {});

  const dictList = Object.entries(categories).reduce((dict, [key, skills]) => ({
    ...dict,
    [key]: skills.map(skill => skill.name).join(', ')
  }), {})

  return (
    <div>
      <Typography variant="h2">Technical Skills</Typography>
      <DictionaryTable dict={dictList} />
    </div>
  )
};

export default withStyles(styles)(SkillsSection);
