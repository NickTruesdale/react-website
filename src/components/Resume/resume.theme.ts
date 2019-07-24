import { createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import createTypography from '@material-ui/core/styles/createTypography';

import { blueGrey } from '@material-ui/core/colors';
import { Overrides } from '@material-ui/core/styles/overrides';


// Light theme
const palette = createPalette({
  type: 'light',
  primary: blueGrey,
  secondary: blueGrey
});

// Typography
const typography = createTypography(palette, {
  useNextVariants: true,
  fontFamily: 'Roboto',
});

// Component overrides
const overrides: Overrides = {
  MuiTypography: {
    h1: {
      textAlign: 'justify',
      fontSize: '21px',
      fontFamily: 'Lato',
      fontWeight: 300,
      marginTop: '8px',
      marginBottom: '12px'
    },
    h2: {
      textAlign: 'left',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.4,
      fontVariant: 'small-caps',
      borderBottom: `1px solid ${palette.grey[700]}`,
      marginTop: '4px',
      marginBottom: '6px'
    },
    h3: {
      textAlign: 'left',
      fontSize: '10px',
      fontWeight: 'bold',
      lineHeight: 1.4,
      marginBottom: '2px',
    },
    h4: {
      textAlign: 'left',
      fontSize: '10px',
      fontStyle: 'italic',
      lineHeight: 1.4,
      marginBottom: '4px'
    },
    body1: {
      textAlign: 'justify',
      fontSize: '10px',
      lineHeight: 1.35,
      marginBottom: '6px',
    },
    body2: {
      textAlign: 'left',
      fontSize: '10px',
      lineHeight: 1.4,
      whiteSpace: 'pre-line'
    },
    caption: {
      fontSize: '9px',
      fontWeight: 'bold',
      lineHeight: 1.4,
      paddingRight: '8px'
    },
    subtitle1: {
      textAlign: 'justify',
      fontSize: '10px',
      lineHeight: 1.4,
      marginBottom: '2px',
    }
  },
  MuiList: {
    root: {
      listStyle: 'disc outside none',
    },
    padding: {
      paddingTop: '0',
      paddingBottom: '12px',
      paddingLeft: '20px'
    }
  },
  MuiListItem: {
    root: {
      display: 'list-item',
      textAlign: 'justify',
      fontSize: '10px'
    },
    gutters: {
      paddingTop: 0,
      paddingBottom: '2px',
      paddingLeft: 0,
      paddingRight: 0
    }
  }
} 

// Create theme instances
const serifTheme = createMuiTheme({ palette, typography, overrides });

export default {
  serif: serifTheme,
};
