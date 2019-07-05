import React from 'react';
import styles from './resume.styles';
import { withStyles, WithStyles, Typography } from '@material-ui/core';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';

interface Props extends WithStyles<typeof styles> {
  dict: { [key: string]: string };
}

const DictionaryTable: React.FC<Props> = props => {
  const { dict, classes } = props;
  
  return (
    <Table padding="none">
      <TableBody>
        {Object.entries(dict).map(([key, value]) => (
          <TableRow className={classes.tableRow} key={key}>
            <TableCell className={classes.tableContent}>
              <Typography variant="caption">{key}</Typography>
            </TableCell>
            <TableCell className={classes.tableContent}>
              <Typography variant="body1">{value}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
};

export default withStyles(styles)(DictionaryTable);
