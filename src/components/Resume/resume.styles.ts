import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  page: {
    width: '595px',
    height: '842px',
    margin: '10px',
    border: '1px solid black',
    boxSizing: 'content-box',
  },
  content: {
    boxSizing: 'border-box',
    margin: 0,
    marginBlock: 0,
    color: theme.palette.common.black,
    fontSize: '10px',
    textAlign: 'left',
    lineHeight: '1.4',
    // fontFamily: 'Georgia',
  },
  columns: {
    display: 'flex',
  },
  column: {
    height: '100%',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column'
  },
  left: {
    width: '220px',
  },
  right: {
    flexGrow: 1,
    paddingLeft: 0
  },
  header: {
    fontVariant: 'small-caps',
    fontWeight: 400,
    fontSize: '14px',
    borderBottom: `1px solid ${theme.palette.grey[700]}`,
    marginBottom: '8px'
  },
  subheader: {
    fontWeight: 'bold',
  },
  body: {
    textAlign: 'justify'
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
});

export default styles;
