import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const Terms = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Terms and Conditions
      </Typography>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>1. Acceptance of Terms</Typography>
        <Typography>
          By accessing and using the “Aira Creations” website, you agree to be bound by these terms and conditions.
          If you do not agree, please refrain from using the site.
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>2. Intellectual Property</Typography>
        <Typography>
          All designs, images, and content on the website are the exclusive property of “Aira Creations.”<br />
          Users may not reproduce, distribute, or modify any content without explicit permission.
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>3. User Conduct</Typography>
        <Typography>
          Be kind, respectful, and fashion-loving! No spam, trolling, or harmful behavior.<br />
          Users are responsible for their interactions and contributions.
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>4. Privacy Policy</Typography>
        <Typography>
          Our detailed privacy policy outlines how we collect, process, and protect user data. Please review it separately.
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>5. Disclaimers</Typography>
        <Typography>
          All the related information on our site is for general purposes only.<br />
          “Aira Creations” is not liable for any inaccuracies or damages resulting from reliance on this content.
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>6. Limitation of Liability</Typography>
        <Typography>
          We’re passionate about fashion, but we’re not liable for any direct or indirect damages arising from website use.<br />
          Our liability is limited to the extent permitted by applicable law.
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>7. Governing Law</Typography>
        <Typography>
          These terms are governed by the laws of India.<br />
          Any disputes will be resolved in the courts of India.
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>8. Changes to Terms</Typography>
        <Typography>
          We reserve the right to modify these terms. Updates will be posted on the website.
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>9. Contact Us</Typography>
        <Typography>
          For complaints, compliments, or just to say hello, reach out to us at{' '}
          <Link href="mailto:aira.creations@outlook.com">aira.creations@outlook.com</Link>.
        </Typography>
      </Box>
    </Container>
  );
};

export default Terms;
