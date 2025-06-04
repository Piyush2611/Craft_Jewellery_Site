import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        top: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: '1px solid white',
        backgroundColor: 'black', // same as page background
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/* Logo and Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src={logo} alt="Luxrio Logo" style={{ height: '30px', marginTop: '5px' }} />
          <Typography variant="h6">AIRA CREATIONS</Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexGrow: 1 }}>
          {['Home', 'About', 'Watch', 'Ring', 'Pages', 'Contact'].map((item) => (
            <Box
              key={item}
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            >
              <Typography variant="body1">{item}</Typography>
              <ArrowDropDownIcon fontSize="small" />
            </Box>
          ))}
        </Box>

        {/* Contact Info */}
        <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <PhoneIcon fontSize="small" />
            <Typography variant="body2">9516178888, 7697144980</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <EmailIcon fontSize="small" />
            <Typography variant="body2">piyushsoni261199@gmail.com</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
