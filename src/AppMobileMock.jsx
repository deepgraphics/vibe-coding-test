// Mobile Mock App - Exact recreation of Figma mobile design
// Start here, then expand to full site

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import theme from './theme/theme';
import MobileMockHeader from './components/common/MobileMockHeader';
import MobileMockHero from './components/sections/MobileMockHero';
import './styles/global.css';

function AppMobileMock() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ overflow: 'hidden' }}>
        <MobileMockHeader />
        <main>
          <MobileMockHero />
        </main>
      </Box>
    </ThemeProvider>
  );
}

export default AppMobileMock;