// Serial Effect Hero Section
// Main landing section with value proposition and CTA

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';

// Geometric shapes component for visual interest
const GeometricShapes = () => (
  <Box
    sx={{
      position: 'absolute',
      right: { xs: '10%', md: '15%' },
      top: '20%',
      opacity: 0.1,
      transform: 'rotate(15deg)',
      zIndex: 0,
    }}
  >
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
      {[...Array(9)].map((_, i) => (
        <Box
          key={i}
          sx={{
            width: { xs: 20, md: 30 },
            height: { xs: 20, md: 30 },
            backgroundColor: i % 3 === 0 ? '#E53E3E' : i % 3 === 1 ? '#4FD1C7' : '#2D3748',
            transform: 'rotate(45deg)',
            borderRadius: '4px',
            opacity: Math.random() * 0.5 + 0.3,
          }}
        />
      ))}
    </Box>
  </Box>
);

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F7FAFC 100%)',
        overflow: 'hidden',
      }}
    >
      <GeometricShapes />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Box sx={{ maxWidth: { xs: '100%', md: '600px' } }}>
              {/* Tagline */}
              <Typography
                variant="body1"
                sx={{
                  color: '#E53E3E',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  mb: 2,
                }}
              >
                Expertly Architected & Designed
              </Typography>

              {/* Main Headline */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: '#2D3748',
                  mb: 3,
                  letterSpacing: '-0.02em',
                }}
              >
                USER EXPERIENCES
              </Typography>

              {/* Value Proposition */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  lineHeight: 1.6,
                  color: '#718096',
                  mb: 4,
                  maxWidth: '540px',
                }}
              >
                Yes, any designer can make your{' '}
                <Box component="span" sx={{ fontWeight: 600, color: '#2D3748' }}>
                  website
                </Box>{' '}
                or{' '}
                <Box component="span" sx={{ fontWeight: 600, color: '#2D3748' }}>
                  app
                </Box>{' '}
                look great, but{' '}
                <Box component="span" sx={{ fontWeight: 600, color: '#E53E3E' }}>
                  does it do what you need it to?
                </Box>
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  color: '#718096',
                  mb: 5,
                  maxWidth: '480px',
                }}
              >
                Not sure? Let's find out together.
              </Typography>

              {/* CTA Buttons */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToContact}
                  sx={{
                    background: 'linear-gradient(135deg, #E53E3E 0%, #FF6B6B 100%)',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    py: { xs: 1.5, md: 2 },
                    px: { xs: 3, md: 4 },
                    borderRadius: '8px',
                    textTransform: 'none',
                    boxShadow: '0 4px 20px rgba(229, 62, 62, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #C53030 0%, #E53E3E 100%)',
                      boxShadow: '0 6px 25px rgba(229, 62, 62, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  GET A FREE UX AUDIT
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={scrollToServices}
                  sx={{
                    borderColor: '#E2E8F0',
                    color: '#2D3748',
                    fontWeight: 600,
                    fontSize: '1rem',
                    py: { xs: 1.5, md: 2 },
                    px: { xs: 3, md: 4 },
                    borderRadius: '8px',
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: '#E53E3E',
                      color: '#E53E3E',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  See Additional Services
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Isometric Illustration Space */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
                height: '400px',
                position: 'relative',
              }}
            >
              {/* Placeholder for isometric illustration - can be replaced with actual graphic */}
              <Box
                sx={{
                  width: '300px',
                  height: '300px',
                  background: 'linear-gradient(135deg, #4FD1C7 0%, #38B2AC 100%)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0.8,
                  transform: 'rotate(-5deg)',
                  boxShadow: '0 20px 40px rgba(79, 209, 199, 0.2)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 600,
                    transform: 'rotate(5deg)',
                  }}
                >
                  Isometric
                  <br />
                  Illustration
                  <br />
                  Placeholder
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;