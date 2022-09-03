import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles/createTheme';
import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';

export type ColorMode = 'light' | 'dark';

export const ColorModeContext = createContext(
  {} as {
    colorMode: ColorMode;
    toggleColorMode: () => void;
  },
);

const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [colorMode, setColorMode] = useState<ColorMode>(isDarkMode ? 'dark' : 'light');

  const toggleColorMode = useCallback(() => {
    setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const theme = useMemo(() => {
    const lightTheme: ThemeOptions = {
      palette: {
        mode: 'light',
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
    };

    const darkTheme: ThemeOptions = {
      palette: {
        mode: 'dark',
        primary: {
          main: '#a5d575',
        },
        secondary: {
          main: '#f50057',
        },
        background: {
          default: '#303030',
        },
      },
    };

    return createTheme({
      typography: {
        fontFamily: ['Kiwi Maru', 'serif'].join(','),
      },
      ...(colorMode === 'light' ? lightTheme : darkTheme),
    });
  }, [colorMode]);

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
