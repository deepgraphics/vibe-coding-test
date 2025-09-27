// About page - another example of a full page component

import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          This is the about page. You can add information about your company or project here.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;