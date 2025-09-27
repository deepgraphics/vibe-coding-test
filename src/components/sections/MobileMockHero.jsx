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
        backgroundColor: '#FFFFFF',
        pt: 15, // Increased padding to account for larger header
        pb: 0, // Remove bottom padding since footer is now in flow
      }}
    >
      <Container maxWidth="sm" sx={{ px: 3 }}>
        {/* Tagline */}
        <Typography
          sx={{
            fontSize: '32px',
            color: '#85909B',
            fontWeight: 300,
            mb: 2,
            textAlign: 'left',
            fontFamily: '"Karantina", sans-serif',
          }}
        >
          Expertly Architected & Designed
        </Typography>

        {/* Main Headline - Karantina Font */}
        <Typography
          sx={{
            fontSize: '64px',
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
            fontSize: '16px',
            lineHeight: '24px',
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
            fontSize: '16px',
            lineHeight: '24px',
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
            fontSize: '16px',
            lineHeight: '24px',
            color: '#85909B',
            mb: 5,
            fontFamily: '"Inter", sans-serif',
            fontWeight: 400,
          }}
        >
          Not sure?
        </Typography>

        {/* CTA Buttons */}
        <Box sx={{ mb: 10 }}>
          {/* Primary CTA */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#1ABC9C',
              color: 'white',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              py: 2,
              mb: 2,
              borderRadius: '8px',
              textTransform: 'none',
              boxShadow: '0 4px 8px rgba(26, 188, 156, 0.3)',
              '&:hover': {
                backgroundColor: '#16A085',
                boxShadow: '0 6px 12px rgba(26, 188, 156, 0.4)',
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
              borderColor: '#B5BAC0',
              color: '#B5BAC0',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              py: 2,
              borderRadius: '8px',
              textTransform: 'none',
              '&:hover': {
                borderColor: '#85909B',
                color: '#85909B',
                backgroundColor: 'transparent',
              },
            }}
          >
            See additional services
          </Button>
        </Box>

        {/* Space for new content sections */}
        <Box sx={{ mb: 10 }}>
          {/* Future content will go here */}
        </Box>

        {/* Hero Illustration - locked to footer */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 0, // No gap between illustration and footer
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
          backgroundColor: '#2C3E50',
          py: 4,
          px: 3,
          width: '100%',
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
                color: '#FFFFFF',
                fontSize: '12px',
                fontFamily: '"Inter", sans-serif',
                cursor: 'pointer',
                '&:hover': {
                  color: '#1ABC9C',
                },
              }}
            >
              Terms of Use
            </Typography>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontSize: '12px',
                fontFamily: '"Inter", sans-serif',
                cursor: 'pointer',
                '&:hover': {
                  color: '#1ABC9C',
                },
              }}
            >
              Privacy Policy
            </Typography>
          </Box>

          {/* Copyright */}
          <Typography
            sx={{
              color: '#FFFFFF',
              fontSize: '12px',
              fontFamily: '"Inter", sans-serif',
              textAlign: 'center',
            }}
          >
            © 2023 DeepGraphics, LLC. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default MobileMockHero;