import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <Box
      py={1}
      px={3}
      position="fixed"
      zIndex={1000}
      sx={{
        top: 0,
        right: 0,
        left: 0,
        background: '#ffffffa0',
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
        <Brightness4RoundedIcon />
      </Box>
    </Box>
  );
};

export default Navbar;
