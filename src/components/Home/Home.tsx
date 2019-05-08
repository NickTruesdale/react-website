import React from 'react';
import { createStyles, withStyles, Theme, WithStyles } from '@material-ui/core';

import AppBar from '../AppBar/AppBar';
import Travel from '../Travel/Travel';

const styles = (theme: Theme) => createStyles({
  homeRoot: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
});

interface Props extends WithStyles<typeof styles> {};

const Home: React.FC<Props> = (props) => {
  const { classes } = props;
  return (
    <div className={classes.homeRoot}>
      <AppBar />
      <div className={classes.toolbar}></div>
      <div className={classes.content}>
        <Travel />
      </div>
    </div>
  );
}

export default withStyles(styles)(Home);
