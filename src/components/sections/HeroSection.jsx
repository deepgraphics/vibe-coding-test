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
        background: 'linear-gradient(135deg, #FDFDFE 0%, #F8FAFC 50%, #F1F5F9 100%)',
        overflow: 'hidden',
      }}
    >
      <DiamondShapes />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Box sx={{ maxWidth: { xs: '100%', md: '600px' } }}>
              {/* Modern tagline with pill design */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  px: 3,
                  py: 1,
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, rgba(79, 209, 199, 0.1) 0%, rgba(56, 178, 172, 0.1) 100%)',
                  border: '1px solid rgba(79, 209, 199, 0.2)',
                  mb: 3,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: '#4FD1C7',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  Expertly Architected & Designed
                </Typography>
              </Box>

              {/* Modern headline with better hierarchy */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  mb: 4,
                  letterSpacing: '-0.02em',
                }}
              >
                USER EXPERIENCES
              </Typography>

              {/* Modern value proposition with better contrast */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  lineHeight: 1.6,
                  color: '#64748B',
                  mb: 3,
                  maxWidth: '540px',
                  fontWeight: 400,
                }}
              >
                Yes, any designer can make your{' '}
                <Box component="span" sx={{ fontWeight: 600, color: '#0F172A' }}>
                  website
                </Box>{' '}
                or{' '}
                <Box component="span" sx={{ fontWeight: 600, color: '#0F172A' }}>
                  app
                </Box>{' '}
                look great, but{' '}
                <Box component="span" sx={{ fontWeight: 700, color: '#4FD1C7' }}>
                  does it do what you need it to?
                </Box>
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  color: '#94A3B8',
                  mb: 6,
                  maxWidth: '480px',
                  fontStyle: 'italic',
                }}
              >
                Not sure? Let's find out together.
              </Typography>

              {/* Modern CTA buttons with better hierarchy */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToContact}
                  sx={{
                    background: 'linear-gradient(135deg, #4FD1C7 0%, #38B2AC 100%)',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    py: { xs: 2, md: 2.5 },
                    px: { xs: 4, md: 5 },
                    borderRadius: '12px',
                    textTransform: 'none',
                    boxShadow: '0 4px 20px rgba(79, 209, 199, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #38B2AC 0%, #319795 100%)',
                      boxShadow: '0 8px 30px rgba(79, 209, 199, 0.4)',
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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
                    color: '#0F172A',
                    fontWeight: 600,
                    fontSize: '1rem',
                    py: { xs: 2, md: 2.5 },
                    px: { xs: 4, md: 5 },
                    borderRadius: '12px',
                    borderWidth: '2px',
                    textTransform: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      borderColor: '#4FD1C7',
                      color: '#4FD1C7',
                      backgroundColor: 'rgba(79, 209, 199, 0.04)',
                      transform: 'translateY(-2px)',
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