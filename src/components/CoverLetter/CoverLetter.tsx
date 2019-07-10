import React from 'react';

import { withStyles, WithStyles, MuiThemeProvider } from '@material-ui/core';

import themes from './cover-letter.theme';
import styles from './cover-letter.styles';
import CoverLetterLayout from './CoverLetterLayout';

interface Props extends WithStyles<typeof styles> {}

const CoverLetter: React.FC<Props> = props => {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={themes.serif}>
      <div className={classes.container}>
        <div className={classes.page}>
          <CoverLetterLayout />
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(CoverLetter);
