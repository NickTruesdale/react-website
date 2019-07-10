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
  fontFamily: 'Lora',
});

// Component overrides
const overrides: Overrides = {
  MuiTypography: {
    h1: {
      textAlign: 'center',
      fontSize: '24px',
      paddingBottom: '8px',
      marginBottom: '4px',
      borderBottom: `2px solid ${palette.grey[700]}`
    },
    body1: {
      textAlign: 'justify',
      fontSize: '11px',
      marginBottom: '11px',
      lineHeight: 1.4,
    },
    body2: {
      textAlign: 'justify',
      fontSize: '11px',
      fontWeight: 'bold',
      marginBottom: '11px',
      lineHeight: 1.4,
    },
    caption: {
      fontSize: '11px',
      padding: '0 8px',
      marginBottom: '16px',
      lineHeight: 1.4,
    }
  }
} 

// Create theme instances
const serifTheme = createMuiTheme({ palette, typography, overrides });

export default {
  serif: serifTheme,
};
