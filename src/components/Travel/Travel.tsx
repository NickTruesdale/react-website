import React from 'react';

import { createStyles, withStyles, Theme, WithStyles } from '@material-ui/core';

import TravelMap from '../TravelMap/TravelMap';

const styles = (theme: Theme) => createStyles({
  root: {
    height: '100%'
  }
});

interface Props extends WithStyles<typeof styles> {
}

const Travel: React.FC<Props> = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <TravelMap />
    </div>
  )
};

export default withStyles(styles)(Travel);
