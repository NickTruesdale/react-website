import React from 'react';
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core';
import { Toolbar, IconButton, Typography } from '@material-ui/core';
import { AppBar as MaterialAppBar } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

const styles = (theme: Theme) => createStyles({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

interface Props extends WithStyles<typeof styles> {};

const AppBar: React.FC<Props> = (props) => {
  const { classes } = props;
  
  return (
    <MaterialAppBar position="fixed">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          Sandbox
        </Typography>
      </Toolbar>
    </MaterialAppBar>
  );
}

export default withStyles(styles)(AppBar);
