// components/Header.jsx
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <Box sx={{ borderBottom: '1px solid white' }}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Logo and Brand */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <img src={logo} alt="Luxrio Logo" style={{ height: '30px', marginTop: '5px' }} />
                        <Typography variant="h6">LUXRIO</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 4, flexGrow: 1, justifyContent: 'center',marginLeft:'120px' }}>
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

                    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                        {/* Phone */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <PhoneIcon fontSize="small" />
                            <Typography variant="body2">9516178888,7697144980</Typography>
                        </Box>

                        {/* Email */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <EmailIcon fontSize="small" />
                            <Typography variant="body2">piyushsoni261199@gmail.com</Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default Header;
