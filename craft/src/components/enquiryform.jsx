import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    TextField,
    Button,
    Box,
    Grid,
    Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SendInquiryModal = ({ open, onClose, selectedRing = "Wedding Ring" }) => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        address: '',
    });

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
        onClose(); // optionally close the modal
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth={false}
            PaperProps={{
                sx: {
                    width: '700px',
                    maxWidth: '90%',
                    borderRadius: 2,
                },
            }} >
            <DialogTitle
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid #ccc',
                    fontWeight: 'bold',
                    color: '#1976d2',
                }}
            >
                Inquiry for {selectedRing}
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        mt: 2,
                        px: { xs: 1, sm: 0 },
                        py: 2,
                        width: '100%',
                        
                    }}
                >
                    <Grid container spacing={2} justifyContent={'center'}>
                        <Grid item xs={12} md={12}>
                            <TextField
                                label="Name"
                                name="name"
                                fullWidth
                                required
                                value={formData.name}
                                onChange={handleChange}
                                sx={{minWidth:'100px'}}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Contact Number"
                                name="contact"
                                fullWidth
                                required
                                value={formData.contact}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                                fullWidth
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Address"
                                name="address"
                                fullWidth
                                required
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>



                    <Box sx={{ mt: 4, textAlign: 'center' }}>
                        <Button type="submit" variant="contained" color="primary" sx={{ px: 2 }}>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default SendInquiryModal;
