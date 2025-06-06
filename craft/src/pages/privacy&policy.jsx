import React from 'react';
import { Container, Typography, Box, List, ListItem, Link } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Privacy Policy</Typography>
      {/* <Typography variant="subtitle2" gutterBottom>
        <strong>Effective date:</strong> July 29, 2024
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        <strong>Last updated on:</strong> July 31, 2034
      </Typography> */}

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>1. GENERAL</Typography>
        <Typography>a. This Website with the URL of <strong>airacreations.company.site</strong> ("Website/Site") is operated by Aira Creations ("We/Our/Us")...</Typography>
        <Typography>b. We collect your personal information to provide and improve our services.</Typography>
        <Typography>c. Privacy policy is subject to change anytime without notice.</Typography>
        <Typography>d. Partners and third parties are expected to comply with this policy.</Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>2. HOW WE COLLECT THE INFORMATION</Typography>
        <List>
          <ListItem>Directly from you through this Website</ListItem>
          <ListItem>Through business interactions</ListItem>
          <ListItem>From other sources like social media, public databases, third parties</ListItem>
        </List>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>3. INFORMATION WE COLLECT</Typography>
        <Typography>We may collect:</Typography>
        <List>
          <ListItem>Name, Mobile Number, E-Mail, Delivery & Billing Address</ListItem>
          <ListItem>Order History, Product Preferences</ListItem>
          <ListItem>Device info, IP address, browser type, visit details, clickstream data</ListItem>
          <ListItem>Cookies for personalization, analytics, security</ListItem>
        </List>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>4. HOW WE USE INFORMATION</Typography>
        <List>
          <ListItem>To improve services and website performance</ListItem>
          <ListItem>Personalize user experience and content</ListItem>
          <ListItem>Fulfill orders and customer support</ListItem>
          <ListItem>Marketing and promotions (with consent)</ListItem>
          <ListItem>Fraud detection and compliance with laws</ListItem>
        </List>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>5. DATA TRANSFER</Typography>
        <Typography>
          We share data with trusted vendors and affiliates only as necessary, and only under privacy-compliant terms.
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>6. COOKIES</Typography>
        <List>
          <ListItem>Used for session handling, personalization, analytics</ListItem>
          <ListItem>Third parties may set cookies when you interact with the site</ListItem>
          <ListItem>You can disable cookies in your browser settings, though functionality may be limited</ListItem>
        </List>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>7. DATA SECURITY</Typography>
        <List>
          <ListItem>SSL encryption and PCI-DSS compliance</ListItem>
          <ListItem>Physical, electronic, and procedural safeguards</ListItem>
          <ListItem>Limit access to only those who need it for business</ListItem>
        </List>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>8. LINKS TO THIRD-PARTY SITES/APPS</Typography>
        <Typography>
          We are not responsible for the privacy practices of third-party sites linked from our platform. Please review their policies individually.
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>9. SOCIAL NETWORK PLUGINS</Typography>
        <Typography>
          Social plugins may set cookies based on your interactions. Governed by the respective social media privacy policies.
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>10. SHARING OF PERSONAL INFORMATION</Typography>
        <Typography>We do not share personal data without consent except:</Typography>
        <List>
          <ListItem>With service providers who comply with privacy laws</ListItem>
          <ListItem>For legal obligations or law enforcement</ListItem>
          <ListItem>For mergers, sales, or corporate transitions</ListItem>
        </List>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>11. CHILDREN</Typography>
        <Typography>
          Users under 18 may only use the site with parental consent. We disclaim liability for non-compliance.
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>12. CHANGES TO THIS POLICY</Typography>
        <Typography>
          We may change this policy periodically. Continued use after changes means acceptance.
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>13. NEWSLETTER</Typography>
        <Typography>
          If you subscribe, your email will be used for promotional purposes until you opt out. You can unsubscribe at any time using the link in our emails.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
