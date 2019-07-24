import React from 'react';

import { withStyles, WithStyles, MuiThemeProvider } from '@material-ui/core';

import themes from './cover-letter.theme';
import styles from './cover-letter.styles';
import CoverLetterLayout from './CoverLetterLayout';

import { letters, resume } from './letters';
import { CoverLetterData } from 'models';


interface Props extends WithStyles<typeof styles> {}

const LETTER = 'nvidia-general';

const CoverLetter: React.FC<Props> = props => {
  const { classes } = props;
  const letter = letters.filter(letter => letter.id === LETTER)[0] || letters[0];

  return (
    <MuiThemeProvider theme={themes.serif}>
      
      <div className={classes.container}>
        <div className={classes.page}>
          <CoverLetterLayout resume={resume} letter={letter}/>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(CoverLetter);
