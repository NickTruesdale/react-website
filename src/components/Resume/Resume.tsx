import React from 'react';

import { withStyles, WithStyles, MuiThemeProvider } from '@material-ui/core';

import themes from './resume.theme';
import styles from './resume.styles';
import ResumeLayout from './ResumeLayout';

interface Props extends WithStyles<typeof styles> {}

const Resume: React.FC<Props> = props => {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={themes.serif}>
      <div className={classes.container}>
        <div className={classes.page}>
          <ResumeLayout />
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(Resume);
