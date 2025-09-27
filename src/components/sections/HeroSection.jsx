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

// Diamond shapes using actual SVG from assets
const DiamondShapes = () => (
  <>
    {/* Background scattered diamonds */}
    <Box
      sx={{
        position: 'absolute',
        left: '5%',
        top: '15%',
        opacity: 0.08,
        transform: 'rotate(15deg)',
        zIndex: 0,
      }}
    >
      <img
        src="/src/assets/Shape.svg"
        alt=""
        style={{
          width: '40px',
          height: 'auto',
          filter: 'hue-rotate(180deg)',
        }}
      />
    </Box>

    <Box
      sx={{
        position: 'absolute',
        right: '8%',
        top: '25%',
        opacity: 0.06,
        transform: 'rotate(-20deg)',
        zIndex: 0,
      }}
    >
      <img
        src="/src/assets/Shape.svg"
        alt=""
        style={{
          width: '60px',
          height: 'auto',
        }}
      />
    </Box>

    <Box
      sx={{
        position: 'absolute',
        left: '20%',
        bottom: '20%',
        opacity: 0.04,
        transform: 'rotate(45deg)',
        zIndex: 0,
      }}
    >
      <img
        src="/src/assets/Shape.svg"
        alt=""
        style={{
          width: '80px',
          height: 'auto',
          filter: 'hue-rotate(90deg)',
        }}
      />
    </Box>
  </>
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
      <DiamondShapes />

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

          {/* Hero Illustration */}
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
              <img
                src="/src/assets/DudeandScreens.png"
                alt="UX Designer working with multiple devices"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '400px',
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;