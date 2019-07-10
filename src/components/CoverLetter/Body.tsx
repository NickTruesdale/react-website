import React from 'react';

import { withStyles, WithStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import styles from './cover-letter.styles';
import { CoverLetterData } from 'models';

interface Props extends WithStyles<typeof styles> {
  content: CoverLetterData;
}

const Body: React.FC<Props> = props => {
  const { classes, content } = props;
  const { subject, salutation, paragraphs } = content;

  return (
    <div>
      <Typography variant="body2">RE: {subject}</Typography>
      <Typography variant="body1">{salutation}</Typography>
      {paragraphs.map(paragraph => (
        <Typography variant="body1" key={paragraph}>{paragraph}</Typography>
      ))}
    </div>
  );
};

export default withStyles(styles)(Body);
