import { createMuiTheme } from '@material-ui/core/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

import { blue, green } from '@material-ui/core/colors';


// Light theme
const lightPrimary = green;
const lightSecondary = blue;

const lightPalette: PaletteOptions = {
  type: 'light',
  primary: lightPrimary,
  secondary: lightSecondary,
  background: {
    default: '#fff'
  }
};

// Dark theme
const darkPrimary = lightPrimary;
const darkSecondary = lightSecondary;

const darkPalette: PaletteOptions = {
  type: 'dark',
  primary: darkPrimary,
  secondary: darkSecondary
};

// Typography
const typography: TypographyOptions = {
  useNextVariants: true
};

// Create theme instances
const defaultTheme = createMuiTheme({
  typography: typography
});

const lightTheme = createMuiTheme({
  palette: lightPalette,
  typography: typography
});

const darkTheme = createMuiTheme({
  palette: darkPalette,
  typography: typography
});

export const themes = {
  default: defaultTheme,
  light: lightTheme,
  dark: darkTheme
};
