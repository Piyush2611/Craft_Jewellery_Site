import React, { useEffect, useState } from "react";
import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const TanishqPopup = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000); // show after 1 second
    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          display: "flex",
          bgcolor: "#fff8f0",
          borderRadius: 3,
          boxShadow: 24,
          p: 3,
          width: "80%",
          maxWidth: 800,
          mx: "auto",
          mt: 20,
          position: "relative",
        }}
      >
        {/* Left Side */}
        <Box
          sx={{
            width: "50%",
            bgcolor: "#fff0e5",
            borderRadius: 2,
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://img.icons8.com/ios/500/gift--v1.png"
            alt="Gift Box"
            width="100"
          />
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
            On your first order get
          </Typography>
          <Typography variant="h4" sx={{ color: "#b12704", fontWeight: 700 }}>
            ₹500 off
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            And other benefits:
          </Typography>
          <Box sx={{ mt: 1, textAlign: "center" }}>
            <Typography variant="body2">🪙 Encircle & Tata Neu coins</Typography>
            <Typography variant="body2">💖 Unlock wishlist</Typography>
            <Typography variant="body2">🎯 Personalized shopping</Typography>
          </Box>
        </Box>

        {/* Right Side */}
        <Box sx={{ width: "50%", p: 3 }}>
          <Typography variant="h6" fontWeight={600}>
            Welcome to AIRA CREATIONS
          </Typography>
          <TextField
            fullWidth
            sx={{mt:2}}
            label="Enter mobile number"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            color="error"
            sx={{ mt: 2, borderRadius: 5,mt:10 }}
            fullWidth
          >
            Request OTP
          </Button>

          <Typography variant="caption" sx={{ mt: 3,mb:1, display: "block" }}>
            By continuing, I agree to the{" "}
            <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a>
          </Typography>
        </Box>

        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default TanishqPopup;
