// This is your Home page component
// It's a full page that users will see when they visit your app

import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My App
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          This is the home page built with React and Material-UI
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;