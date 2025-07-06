import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    IconButton,
    TextField,
    Button,
    Box,
    Grid,
    Typography,
    MenuItem,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import contact_us from '../assets/contact_us.jpg';

const SendInquiryModal = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        inquiryType: '',
        message: '',
    });

    const [showThankYou, setShowThankYou] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        onClose();
        setShowThankYou(true);

    };

    const handleThankYouClose = () => {
        setShowThankYou(false);
        // Optionally reset form here if needed:
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            inquiryType: '',
            message: '',
        });
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 0,
                        overflow: 'hidden',
                    },
                }}
            >
                <Grid container sx={{ height: '100%' }}>
                    {/* Left image */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ display: { xs: 'none', md: 'block' }, height: '100%' }}
                    >
                        <Box
                            component="img"
                            src={contact_us}
                            alt="Contact"
                            sx={{
                                maxWidth: '300px',
                                height: '500px',
                                objectFit: 'cover',
                                display: 'block',
                                p: 4,
                                mt: 1,
                            }}
                        />
                    </Grid>

                    {/* Right form */}
                    <Grid item xs={12} md={6}>
                        <DialogContent sx={{ p: 4 }}>
                            <IconButton
                                onClick={onClose}
                                sx={{ position: 'absolute', top: 10, right: 10 }}
                            >
                                <CloseIcon />
                            </IconButton>

                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                display="flex"
                                flexDirection="column"
                                justifyContent="center"
                            >
                                <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
                                    CONTACT US
                                </Typography>
                                <Typography
                                    variant="caption"
                                    align="center"
                                    color="textSecondary"
                                    display="block"
                                >
                                    WE USUALLY GET BACK WITHIN 2 BUSINESS DAYS!
                                </Typography>

                                {/* Name */}
                                <Box sx={{ mt: 3 }}>
                                    <Typography fontSize={14} fontWeight="bold" sx={{ mb: 1 }}>
                                        NAME
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                placeholder="First Name"
                                                name="firstName"
                                                fullWidth
                                                required
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                size="small"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                placeholder="Last Name"
                                                name="lastName"
                                                fullWidth
                                                required
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                size="small"
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>

                                {/* Email */}
                                <Box sx={{ mt: 2 }}>
                                    <Typography fontSize={14} fontWeight="bold" sx={{ mb: 1 }}>
                                        EMAIL
                                    </Typography>
                                    <TextField
                                        placeholder="Enter your email"
                                        name="email"
                                        type="email"
                                        fullWidth
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        size="small"
                                    />
                                </Box>

                                {/* Message */}
                                <Box sx={{ mt: 2 }}>
                                    <Typography fontSize={14} fontWeight="bold" sx={{ mb: 1 }}>
                                        MESSAGE
                                    </Typography>
                                    <TextField
                                        name="message"
                                        placeholder="Type your message here..."
                                        multiline
                                        rows={4}
                                        fullWidth
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </Box>

                                {/* Submit */}
                                <Box sx={{ mt: 4 }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            backgroundColor: '#5C2C0C',
                                            '&:hover': { backgroundColor: '#4A2309' },
                                            fontWeight: 'bold',
                                            color: '#fff',
                                            py: 1.5,
                                        }}
                                    >
                                        SUBMIT
                                    </Button>
                                </Box>
                            </Box>
                        </DialogContent>
                    </Grid>
                </Grid>
            </Dialog>

            {/* Thank You Modal */}
            <Dialog open={showThankYou} onClose={handleThankYouClose} maxWidth="xs" fullWidth>
                <DialogContent
                    sx={{
                        position: 'relative', // needed for absolute positioning of close button
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        py: 5,
                    }}
                >
                    <IconButton
                        onClick={handleThankYouClose}
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                        }}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>

                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Thank You!
                    </Typography>
                    <Typography variant="body1" textAlign="center" mb={3}>
                        Your Inquiry has been Submitted Successfully.
                    </Typography>
                </DialogContent>
            </Dialog>

        </>
    );

};

export default SendInquiryModal;
