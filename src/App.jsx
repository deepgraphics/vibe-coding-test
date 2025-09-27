// Serial Effect Main App Component
// Assembles all sections into the complete one-page site

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import theme from './theme/theme';
import Header from './components/common/Header';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import AboutSection from './components/sections/AboutSection';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline provides consistent styling across browsers */}
      <CssBaseline />

      {/* Serial Effect One-Page Site */}
      <Box sx={{ overflow: 'hidden' }}>
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          {/* Contact section coming next */}
        </main>
      </Box>
    </ThemeProvider>
  );
}

export default App;