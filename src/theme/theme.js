// This file defines your app's visual theme
// As a UX/UI designer, this is where you'll control colors, fonts, spacing, etc.

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Color palette - customize these to match your design
  palette: {
    primary: {
      main: '#1976d2', // Main brand color (blue)
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#dc004e', // Accent color (pink/red)
      light: '#e91e63',
      dark: '#c51162',
    },
    background: {
      default: '#f5f5f5', // Page background color
      paper: '#ffffff',    // Card/component background
    },
  },

  // Typography - control fonts and text sizes
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 300,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },

  // Spacing - controls margins, padding, gaps
  spacing: 8, // Base spacing unit (8px)

  // Shape - controls border radius
  shape: {
    borderRadius: 8,
  },
});

export default theme;