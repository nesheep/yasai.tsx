import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app';
import ColorModeProvider from '@/states/colorMode';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ColorModeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </ColorModeProvider>
  );
};

export default MyApp;
