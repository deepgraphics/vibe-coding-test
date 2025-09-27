// Mobile Mock Recreation - Exact replica of Figma mobile design
// Clean, minimal, professional

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const MobileMockHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        pt: 10, // Account for fixed header
        pb: 8,
        position: 'relative',
      }}
    >
      <Container maxWidth="sm" sx={{ px: 3 }}>
        {/* Tagline */}
        <Typography
          sx={{
            fontSize: '1rem',
            color: '#85909B',
            fontWeight: 400,
            mb: 2,
            textAlign: 'left',
            fontFamily: '"Inter", sans-serif',
          }}
        >
          Expertly Architected & Designed
        </Typography>

        {/* Main Headline - Karantina Font */}
        <Typography
          sx={{
            fontSize: '2.75rem',
            fontWeight: 400,
            lineHeight: 1.1,
            color: '#2C3E50',
            mb: 4,
            fontFamily: '"Karantina", sans-serif',
            textAlign: 'left',
          }}
        >
          USER EXPERIENCES
        </Typography>

        {/* Value Proposition */}
        <Typography
          sx={{
            fontSize: '1rem',
            lineHeight: 1.6,
            color: '#85909B',
            mb: 1,
            fontFamily: '"Inter", sans-serif',
            fontWeight: 400,
          }}
        >
          Yes, any designer can make your{' '}
          <Box component="span" sx={{ fontWeight: 600, color: '#2C3E50' }}>
            website
          </Box>{' '}
          or{' '}
          <Box component="span" sx={{ fontWeight: 600, color: '#2C3E50' }}>
            app
          </Box>
        </Typography>

        <Typography
          sx={{
            fontSize: '1rem',
            lineHeight: 1.6,
            color: '#85909B',
            mb: 1,
            fontFamily: '"Inter", sans-serif',
            fontWeight: 400,
          }}
        >
          look great, but{' '}
          <Box component="span" sx={{ fontWeight: 600, color: '#2C3E50' }}>
            does it do what you need it to?
          </Box>
        </Typography>

        <Typography
          sx={{
            fontSize: '1rem',
            lineHeight: 1.6,
            color: '#85909B',
            mb: 5,
            fontFamily: '"Inter", sans-serif',
            fontWeight: 400,
          }}
        >
          Not sure?
        </Typography>

        {/* CTA Buttons */}
        <Box sx={{ mb: 6 }}>
          {/* Primary CTA */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#1ABC9C',
              color: 'white',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 600,
              fontSize: '1rem',
              py: 2,
              mb: 2,
              borderRadius: '8px',
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#16A085',
                boxShadow: 'none',
              },
            }}
          >
            GET A FREE UX AUDIT
          </Button>

          {/* Secondary CTA */}
          <Button
            variant="outlined"
            fullWidth
            sx={{
              borderColor: '#EEE5D4',
              color: '#B5BAC0',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 400,
              fontSize: '1rem',
              py: 2,
              borderRadius: '8px',
              textTransform: 'none',
              '&:hover': {
                borderColor: '#B5BAC0',
                backgroundColor: 'transparent',
              },
            }}
          >
            See additional services
          </Button>
        </Box>

        {/* Hero Illustration */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 8,
          }}
        >
          <img
            src="/src/assets/DudeandScreens.png"
            alt="UX Designer working with multiple devices"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
            }}
          />
        </Box>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#2C3E50',
          borderTopLeftRadius: '40px',
          borderTopRightRadius: '40px',
          py: 4,
          px: 3,
        }}
      >
        <Container maxWidth="sm">
          {/* Footer Links */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
              mb: 3,
            }}
          >
            <Typography
              sx={{
                color: '#B5BAC0',
                fontSize: '0.875rem',
                fontFamily: '"Inter", sans-serif',
                cursor: 'pointer',
                '&:hover': {
                  color: '#FFFFFF',
                },
              }}
            >
              Terms of Use
            </Typography>
            <Typography
              sx={{
                color: '#B5BAC0',
                fontSize: '0.875rem',
                fontFamily: '"Inter", sans-serif',
                cursor: 'pointer',
                '&:hover': {
                  color: '#FFFFFF',
                },
              }}
            >
              Privacy Policy
            </Typography>
          </Box>

          {/* Copyright */}
          <Typography
            sx={{
              color: '#85909B',
              fontSize: '0.875rem',
              fontFamily: '"Inter", sans-serif',
              textAlign: 'center',
            }}
          >
            © 2023 DeepGraphics, LLC. All rights reserved.
          </Typography>
        </Container>

        {/* Footer decoration - small diamond shape */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            width: 40,
            height: 25,
          }}
        >
          <img
            src="/src/assets/Shape.svg"
            alt=""
            style={{
              width: '100%',
              height: 'auto',
              opacity: 0.3,
              filter: 'brightness(0) saturate(100%) invert(69%) sepia(11%) saturate(934%) hue-rotate(182deg) brightness(87%) contrast(89%)',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MobileMockHero;