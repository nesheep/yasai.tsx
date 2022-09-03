import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box
      py={2}
      sx={{ opacity: 0.4 }}
    >
      <Typography
        variant="body2"
        textAlign="center"
      >
        &copy; {new Date().getFullYear()} nesheep All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
