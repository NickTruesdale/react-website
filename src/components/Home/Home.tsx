import React from 'react';
import { createStyles, withStyles, Theme, WithStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import AppBar from '../AppBar/AppBar';

const styles = (theme: Theme) => createStyles({

});

interface Props extends WithStyles<typeof styles> {};

const Home: React.FC<Props> = (props) => {
  return (
    <div>
      <AppBar />
      <Typography variant="h5">Home Page</Typography>
    </div>

  );
}

export default withStyles(styles)(Home);
