import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useContext } from 'react';
import { ColorModeContext } from '@/states/colorMode';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useContext(ColorModeContext);

  return (
    <Box
      py={1}
      px={3}
      bgcolor={colorMode === 'light' ? '#ffffffa0' : '#00000040'}
      zIndex={1000}
      position="fixed"
      sx={{
        top: 0,
        right: 0,
        left: 0,
        backdropFilter: 'blur(10px)',
      }}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        maxWidth={748}
        mx="auto"
      >
        <Link href="/">
          <MuiLink
            href="/"
            color="inherit"
            underline="none"
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <RestaurantRoundedIcon />
              <Typography
                variant="h5"
                component="h1"
                mx={1}
              >
                野菜.tsx
              </Typography>
            </Box>
          </MuiLink>
        </Link>
        <Box
          flex={1}
          textAlign="end"
        >
          <IconButton onClick={() => toggleColorMode()}>
            <Brightness4RoundedIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
