import React from 'react';
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core';

import { Route, Redirect, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';

const styles = (theme: Theme) => createStyles({
  root: {
    textAlign: 'center',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main
  }
});

interface Props extends WithStyles<typeof styles> {};

const App: React.FC<Props> = (props) => {
  const { classes } = props;
  
  return (
    <div className={classes.root}>
      <Switch>
        <Route path={'/home'} component={Home} />
        <Route path={'/resume'} component={Resume} />

        <Redirect exact from={'/'} to={'/home'} />
        <Route render={() => <div>Route not found</div>} />
      </Switch>
    </div>
  );
}

export default withStyles(styles)(App);
