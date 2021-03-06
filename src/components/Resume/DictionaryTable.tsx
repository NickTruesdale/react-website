import React from 'react';
import styles from './resume.styles';
import { withStyles, WithStyles, Typography } from '@material-ui/core';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';

interface Props extends WithStyles<typeof styles> {
  dict: { [key: string]: string };
  icons?: { [key: string]: any};
}

const DictionaryTable: React.FC<Props> = props => {
  const { dict, classes } = props;
  const icons = props.icons || {};

  return (
    <Table padding="none">
      <TableBody>
        {Object.entries(dict).map(([key, value]) => (
          <TableRow className={classes.tableRow} key={key}>
            <TableCell className={icons[key] ? classes.tableIcon : classes.tableLeft}>
              <Typography variant="caption">{icons[key] || key}</Typography>
            </TableCell>
            <TableCell className={classes.tableRight}>
              <Typography variant="body2">{value}</Typography>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
};

export default withStyles(styles)(DictionaryTable);
