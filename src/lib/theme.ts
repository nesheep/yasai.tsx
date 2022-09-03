import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ['Kiwi Maru', 'serif'].join(','),
  },
  palette: {
    primary: {
      main: '#416916',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#fdfcf5',
    },
  },
});
