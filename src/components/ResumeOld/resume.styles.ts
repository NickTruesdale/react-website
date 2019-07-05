import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  container: {
    padding: '10px'
  },
  page: {
    width: '595px',
    height: '842px',
    border: '1px solid black',
    padding: '20px 20px',
  },
  columns: {
    display: 'flex',
  },
  column: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  left: {
    width: '180px',
    flexShrink: 0
  },
  right: {
    flexGrow: 1,
    paddingLeft: '20px',
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
  tableContent: {
    borderBottom: 'none'
  },

  personalCard: {
    display: 'flex',
    alignItems: 'flex-end',
    backgroundColor: '#bbdddd',
    marginBottom: '10px',
  },
  summaryCard: {
    backgroundColor: '#eeaa77'
  },
  educationCard: {
    marginTop: '10px',
    backgroundColor: '#ddddbb'
  },
  skillsCard: {
    marginTop: '10px',
    backgroundColor: '#88aaff'
  },
  experienceCard: {
    backgroundColor: '#ddbbdd'
  },
  jobCard: {

  },
});

export default styles;
