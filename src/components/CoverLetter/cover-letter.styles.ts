import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  container: {
    padding: '10px'
  },
  page: {
    width: '595px',
    height: '842px',
    padding: '50px',
    border: '1px solid black',
  },
  headerDetails: {
    display: 'flex',
    justifyContent: 'center'
  },
  signature: {
    height: '76px',
    paddingTop: '4px'
  },
});

export default styles;
