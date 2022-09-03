import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
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
        alignItems="center"
        maxWidth={748}
        mx="auto"
      >
        <RestaurantRoundedIcon />
        <Typography
          variant="h5"
          component="h1"
          mx={1}
          flex={1}
        >
          野菜.tsx
        </Typography>
        <IconButton onClick={() => toggleColorMode()}>
          <Brightness4RoundedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
