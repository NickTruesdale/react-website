import { createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import createTypography from '@material-ui/core/styles/createTypography';

import { blue, green } from '@material-ui/core/colors';
import { Overrides } from '@material-ui/core/styles/overrides';


// Light theme

const palette = createPalette({
  type: 'light',
  primary: blue,
  secondary: green
});

// Typography
const typography = createTypography(palette, {
  useNextVariants: true,
  fontFamily: 'serif',
});

// Component overrides
const overrides: Overrides = {
  MuiTypography: {
    h1: {
      textAlign: 'left',
      fontWeight: 400,
      fontSize: '36px'
    },
    h2: {
      textAlign: 'left',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.4,
      fontVariant: 'small-caps',
      borderBottom: `1px solid ${palette.grey[700]}`,
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
    },
    body1: {
      textAlign: 'justify',
      fontSize: '10px',
      lineHeight: 1.4,
      // margin: '4px 0'
    },
    caption: {
      fontSize: '9px',
      fontWeight: 'bold',
      lineHeight: 1.4,
      paddingRight: '8px'
    }
  },
  MuiList: {
    root: {
      listStyle: 'disc outside none',
    },
    padding: {
      paddingTop: '4px',
      paddingBottom: '8px',
      paddingLeft: '20px'
    }
  },
  MuiListItem: {
    root: {
      display: 'list-item'
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
const defaultTheme = createMuiTheme({
  typography: typography,
  overrides: overrides,
});

const serifTheme = createMuiTheme({ palette, typography, overrides });

export default {
  default: defaultTheme,
  serif: serifTheme,
};
