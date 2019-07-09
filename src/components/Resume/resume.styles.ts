import { createStyles, Theme } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

const styles = (theme: Theme) => createStyles({
  container: {
    // padding: '10px'
  },
  page: {
    width: '595px',
    height: '842px',
    // border: '1px solid black',
    boxSizing: 'content-box'
  },
  columns: {
    display: 'flex',
    height: '100%',
    boxSizing: 'border-box',
  },
  column: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  left: {
    backgroundColor: '#dcecfa',
    padding: '12px 22px',
    width: '216px',
    flexShrink: 0
  },
  right: {
    flexGrow: 1,
    padding: '18px 26px 12px 14px'
  },

  avatar: {
    width: '94%',
    margin: '3%',
    height: 'auto',
  },




  withLeaders: {
    display: 'flex',
    whiteSpace: 'nowrap',
  },
  leaders: {
    flexGrow: 1,
    overflow: 'hidden',
    margin: '0 8px',
  },
  name: {
    flexGrow: 1,
  },
  contactInfo: {
    width: '200px',
    border: `2px solid black`,
    borderRadius: '4px',
    backgroundColor: '#eeaa66',
  },
  degreeList: {
    padding: '4px 0'
  },
  tableRow: {
    verticalAlign: 'top',
    height: 'auto',
  },
  tableLeft: {
    width: '53px',
    borderBottom: 'none',
  },
  tableRight: {
    borderBottom: 'none',
    paddingBottom: '3px'
  },
  tableIcon: {
    width: '24px',
    borderBottom: 'none',
  },
  tableIconContent: {
    fontSize: '13px',
    color: theme.palette.primary.dark
  },

  jobCard: {
    display: 'flex'
  },
  jobDates: {
    width: '48px',
    flexShrink: 0,
  },
  jobContent: {
    flexGrow: 1,
  },
  jobPointList: {
    marginRight: '-2px'
  },
  jobPoint: {
    display: 'inline',
    position: 'relative',
    left: '-2px',
  },
});

export default styles;
