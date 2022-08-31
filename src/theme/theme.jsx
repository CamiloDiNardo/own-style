// Configuracion para personalizar propiedades de los componentes por defecto
import { createTheme } from '@mui/material';
export const theme = createTheme({
  direction: 'ltr',
  palette: {
    type: 'light',
    primary: {
      main: '#FFFFFF',
      light: '#3572D2',
      white: '#FFF',
    },
    secondary: {
      main: '#000',
    },
    error: {
      main: '#3BCD3A',
    },
  },
  typography: {
    fontFamily: '"Barlow", sans-serif',
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 800,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

/* Mas configuraciones interesantes
 breakpoints: {
    values: {
      xs: 280,
      sm: 600,
      ms: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    Typography: {
      fontFamily: ['"Barlow"', 'sans-serif'].join(','),
      h1: {
        fontFamily: `'Barlow',sans-serif`,
      },
      a: {
        fontFamily: `'Barlow',sans-serif`,
      },
      p: {
        fontFamily: `'Barlow',sans-serif`,
      },
    },
  },
}); */
