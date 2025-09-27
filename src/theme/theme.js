// Serial Effect Custom Theme
// Based on Figma design with modern, tech-forward aesthetic

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Serial Effect Color Palette (from Figma)
  palette: {
    primary: {
      main: '#E53E3E', // Vibrant red/coral from design
      light: '#FF6B6B',
      dark: '#C53030',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#4FD1C7', // Teal/mint accent
      light: '#81E6E0',
      dark: '#38B2AC',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#2D3748', // Dark navy for text/contrast
      light: '#4A5568',
      dark: '#1A202C',
    },
    background: {
      default: '#FFFFFF', // Clean white background
      paper: '#FFFFFF',
      secondary: '#F7FAFC', // Light gray for sections
    },
    text: {
      primary: '#2D3748', // Dark navy for main text
      secondary: '#718096', // Medium gray for secondary text
    },
    neutral: {
      beige: '#F7F3F0', // Neutral beige from design
      lightGray: '#E2E8F0',
      mediumGray: '#A0AEC0',
    },
  },

  // Typography - Modern, professional hierarchy
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
      color: '#718096',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#718096',
    },
    button: {
      fontSize: '1rem',
      fontWeight: 600,
      textTransform: 'none', // No all caps
      letterSpacing: '0.01em',
    },
  },

  // Spacing - 8px base unit
  spacing: 8,

  // Shape - Modern rounded corners
  shape: {
    borderRadius: 12, // More modern than default 8px
  },

  // Component overrides for Serial Effect style
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 32px',
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #E53E3E 0%, #FF6B6B 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #C53030 0%, #E53E3E 100%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
          },
        },
      },
    },
  },
});

export default theme;