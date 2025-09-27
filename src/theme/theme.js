// Serial Effect Custom Theme
// Based on Figma design with modern, tech-forward aesthetic

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Exact Figma Color Palette
  palette: {
    primary: {
      main: '#1ABC9C', // Exact teal from Figma
      light: '#1ABC9C',
      dark: '#16A085',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#D62A04', // Exact red from Figma
      light: '#E74C3C',
      dark: '#5C1C03', // Dark brown from Figma
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#2C3E50', // Exact dark blue from Figma
      light: '#2C3E50',
      dark: '#2C3E50',
    },
    background: {
      default: '#FFFFFF', // Pure white
      paper: '#FFFFFF',
      secondary: '#FFFFFF',
      accent: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50', // Dark blue for main text
      secondary: '#85909B', // Gray from Figma
      muted: '#B5BAC0', // Light gray from Figma
    },
    neutral: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A',
    },
    // Modern gradient palette
    gradients: {
      primary: 'linear-gradient(135deg, #4FD1C7 0%, #38B2AC 100%)',
      secondary: 'linear-gradient(135deg, #E63946 0%, #D62828 100%)',
      neutral: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
      sophisticate: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
    },
  },

  // Typography - Karantina for headings, Inter for body (matching Figma)
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',

    // Headers use Karantina font
    h1: {
      fontFamily: '"Karantina", "Inter", sans-serif',
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Karantina", "Inter", sans-serif',
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Karantina", "Inter", sans-serif',
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: '"Karantina", "Inter", sans-serif',
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: '"Karantina", "Inter", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: '"Karantina", "Inter", sans-serif',
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: 1.4,
    },

    // Body text uses Inter
    body1: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      fontSize: '1.125rem',
      lineHeight: 1.6,
      color: '#718096',
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#718096',
      fontWeight: 400,
    },

    // Buttons use Inter
    button: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      fontSize: '1rem',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
  },

  // Spacing - 8px base unit
  spacing: 8,

  // Shape - Modern rounded corners
  shape: {
    borderRadius: 12, // More modern than default 8px
  },

  // Modern component overrides with contemporary UX patterns
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12, // More modern rounded corners
          padding: '14px 32px',
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(79, 209, 199, 0.25)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #4FD1C7 0%, #38B2AC 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #38B2AC 0%, #319795 100%)',
          },
        },
        outlined: {
          borderColor: '#E2E8F0',
          color: '#0F172A',
          borderWidth: '2px',
          '&:hover': {
            borderColor: '#4FD1C7',
            backgroundColor: 'rgba(79, 209, 199, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20, // Very modern rounded corners
          boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
          border: '1px solid rgba(226, 232, 240, 0.6)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.05)',
            borderColor: 'rgba(79, 209, 199, 0.2)',
          },
        },
      },
    },
    // Modern typography scale
    MuiTypography: {
      styleOverrides: {
        h1: {
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
      },
    },
  },
});

export default theme;