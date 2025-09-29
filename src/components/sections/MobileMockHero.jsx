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
        pb: 0,
      }}
    >
      <Container maxWidth="sm" sx={{ px: 3 }}>
        {/* Tagline */}
        <Typography
          sx={{
            fontSize: '32px',
            color: '#85909B',
            fontWeight: 300,
            mb: '16px',
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
            mb: '32px',
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
          <Box component="span" sx={{ fontWeight: 600, color: '#2C3E50' }}>
            Yes
          </Box>
          , any designer can make your{' '}
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
            is it positioned to succeed?
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
          Let's{' '}
          <Box component="span" sx={{ fontWeight: 600, color: '#2C3E50' }}>
            bridge the gap
          </Box>{' '}
          between great design and strategic success.
        </Typography>

        {/* CTA Buttons */}
        <Box sx={{ mb: 10 }}>
          {/* Primary CTA */}
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              const formElement = document.querySelector('form');
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
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

        {/* Services Section */}
        <Box sx={{ mb: '64px' }}>
          {/* Section Header */}
          <Typography
            sx={{
              fontSize: '32px',
              fontWeight: 300,
              fontFamily: '"Karantina", sans-serif',
              color: '#85909B',
              mb: '16px',
              textAlign: 'center',
            }}
          >
            How I Help
          </Typography>

          <Typography
            sx={{
              fontSize: '48px',
              fontWeight: 400,
              fontFamily: '"Karantina", sans-serif',
              color: '#2C3E50',
              mb: '32px',
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            AI-ERA UX SOLUTIONS
          </Typography>

          {/* Services Cards */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', mb: '32px' }}>
            {/* Product Strategy */}
            <Box sx={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEE5D4',
              borderRadius: '16px',
              p: '24px',
              boxShadow: '0 2px 8px rgba(44, 62, 80, 0.04)',
            }}>
              <Typography
                sx={{
                  fontSize: '24px',
                  fontWeight: 400,
                  fontFamily: '"Karantina", sans-serif',
                  color: '#2C3E50',
                  mb: '8px',
                }}
              >
                AI-Informed Strategy
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#85909B',
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 400,
                }}
              >
                Navigate the{' '}
                <Box component="span" sx={{ fontWeight: 600, color: '#2C3E50' }}>
                  AI tools landscape
                </Box>{' '}
                and integrate smart workflows that enhance rather than replace human creativity.
              </Typography>
            </Box>

            {/* UX/UI Design */}
            <Box sx={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEE5D4',
              borderRadius: '16px',
              p: '24px',
              boxShadow: '0 2px 8px rgba(44, 62, 80, 0.04)',
            }}>
              <Typography
                sx={{
                  fontSize: '24px',
                  fontWeight: 400,
                  fontFamily: '"Karantina", sans-serif',
                  color: '#2C3E50',
                  mb: '8px',
                }}
              >
                Human-Centered Design
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#85909B',
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 400,
                }}
              >
                Solve real user problems with{' '}
                <Box component="span" sx={{ fontWeight: 600, color: '#2C3E50' }}>
                  AI-enhanced workflows
                </Box>{' '}
                that accelerate design while maintaining strategic thinking and user empathy.
              </Typography>
            </Box>

            {/* Design Ops */}
            <Box sx={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEE5D4',
              borderRadius: '16px',
              p: '24px',
              boxShadow: '0 2px 8px rgba(44, 62, 80, 0.04)',
            }}>
              <Typography
                sx={{
                  fontSize: '24px',
                  fontWeight: 400,
                  fontFamily: '"Karantina", sans-serif',
                  color: '#2C3E50',
                  mb: '8px',
                }}
              >
                Future-Ready Systems
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#85909B',
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 400,
                }}
              >
                Build{' '}
                <Box component="span" sx={{ fontWeight: 600, color: '#2C3E50' }}>
                  scalable design systems
                </Box>{' '}
                that adapt to rapid AI tool evolution while maintaining consistency and team efficiency.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* About Section */}
        <Box sx={{ mb: '64px' }}>
          <Typography
            sx={{
              fontSize: '32px',
              fontWeight: 300,
              fontFamily: '"Karantina", sans-serif',
              color: '#85909B',
              mb: '16px',
              textAlign: 'center',
            }}
          >
            About Serial Effect
          </Typography>

          <Typography
            sx={{
              fontSize: '48px',
              fontWeight: 400,
              fontFamily: '"Karantina", sans-serif',
              color: '#2C3E50',
              mb: '32px',
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            NAVIGATING THE AI-UX EVOLUTION
          </Typography>

          <Typography
            sx={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#85909B',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 400,
              mb: '16px',
              textAlign: 'center',
            }}
          >
            After years building Deep Graphics as a visual design agency, I discovered that 2025 brings a unique challenge—{' '}
            <Box component="span" sx={{ fontWeight: 600, color: '#2C3E50' }}>
              AI tools are everywhere
            </Box>
            , but most teams struggle to integrate them meaningfully. Drawing from psychology principles like the serial position effect, I help teams remember what matters most: solving real user problems.
          </Typography>

          <Typography
            sx={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#85909B',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 400,
              textAlign: 'center',
            }}
          >
            <Box component="span" sx={{ fontWeight: 600, color: '#2C3E50' }}>
              Serial Effect
            </Box>{' '}
            bridges the gap between AI hype and practical implementation—helping teams use AI tools to enhance creativity while maintaining{' '}
            <Box component="span" sx={{ fontWeight: 600, color: '#2C3E50' }}>
              human-centered design
            </Box>
            .
          </Typography>
        </Box>
      </Container>

      {/* UX Audit Form - Full Width */}
      <Box sx={{ backgroundColor: '#FFFFFF', py: '64px' }}>
        <Container maxWidth="xl">
          <Typography
            sx={{
              fontSize: '32px',
              fontWeight: 300,
              fontFamily: '"Karantina", sans-serif',
              color: '#85909B',
              mb: '16px',
              textAlign: 'center',
            }}
          >
            Get Your Free UX Audit
          </Typography>

          <Typography
            sx={{
              fontSize: '48px',
              fontWeight: 400,
              fontFamily: '"Karantina", sans-serif',
              color: '#2C3E50',
              mb: '48px',
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            AI-POWERED INSIGHTS
          </Typography>

          {/* Form + Illustration Container */}
          <Box
            sx={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEE5D4',
              borderRadius: '20px',
              p: { xs: '32px', md: '48px' },
              boxShadow: '0 8px 32px rgba(44, 62, 80, 0.08)',
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              alignItems: { xs: 'center', lg: 'flex-start' },
              gap: { xs: '40px', lg: '64px' },
              maxWidth: '1400px',
              mx: 'auto',
            }}
          >
            {/* Form Section */}
            <Box sx={{ flex: { xs: '1', lg: '1' }, width: '100%', maxWidth: { xs: '100%', lg: '600px' } }}>
              <form>
                {/* Website URL */}
                <Box sx={{ mb: '28px' }}>
                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#2C3E50',
                      mb: '12px',
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    Website or App URL *
                  </Typography>
                  <input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    required
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      border: '2px solid #E2E8F0',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontFamily: '"Inter", sans-serif',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1ABC9C'}
                    onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                  />
                </Box>

                {/* Mad Libs Question 1 */}
                <Box sx={{ mb: '28px' }}>
                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#2C3E50',
                      mb: '16px',
                      fontFamily: '"Inter", sans-serif',
                      lineHeight: 1.6,
                    }}
                  >
                    "I want my users to{' '}
                    <Box
                      component="input"
                      type="text"
                      placeholder="sign up"
                      sx={{
                        display: 'inline-block',
                        minWidth: '140px',
                        padding: '6px 12px',
                        border: 'none',
                        borderBottom: '3px solid #1ABC9C',
                        backgroundColor: 'transparent',
                        fontSize: '18px',
                        fontFamily: '"Inter", sans-serif',
                        outline: 'none',
                        textAlign: 'center',
                        mx: '6px',
                      }}
                    />
                    but they're struggling to{' '}
                    <Box
                      component="input"
                      type="text"
                      placeholder="find the pricing"
                      sx={{
                        display: 'inline-block',
                        minWidth: '160px',
                        padding: '6px 12px',
                        border: 'none',
                        borderBottom: '3px solid #1ABC9C',
                        backgroundColor: 'transparent',
                        fontSize: '18px',
                        fontFamily: '"Inter", sans-serif',
                        outline: 'none',
                        textAlign: 'center',
                        mx: '6px',
                      }}
                    />
                    "
                  </Typography>
                </Box>

                {/* Mad Libs Question 2 */}
                <Box sx={{ mb: '28px' }}>
                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#2C3E50',
                      mb: '16px',
                      fontFamily: '"Inter", sans-serif',
                      lineHeight: 1.6,
                    }}
                  >
                    "The #1 thing users complain about is{' '}
                    <Box
                      component="input"
                      type="text"
                      placeholder="it's too slow"
                      sx={{
                        display: 'inline-block',
                        minWidth: '180px',
                        padding: '6px 12px',
                        border: 'none',
                        borderBottom: '3px solid #1ABC9C',
                        backgroundColor: 'transparent',
                        fontSize: '18px',
                        fontFamily: '"Inter", sans-serif',
                        outline: 'none',
                        textAlign: 'center',
                        mx: '6px',
                      }}
                    />
                    "
                  </Typography>
                </Box>

                {/* Contact Info */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: '20px', mb: '32px' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#2C3E50',
                        mb: '12px',
                        fontFamily: '"Inter", sans-serif',
                      }}
                    >
                      Name *
                    </Typography>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        border: '2px solid #E2E8F0',
                        borderRadius: '12px',
                        fontSize: '16px',
                        fontFamily: '"Inter", sans-serif',
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#1ABC9C'}
                      onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#2C3E50',
                        mb: '12px',
                        fontFamily: '"Inter", sans-serif',
                      }}
                    >
                      Email *
                    </Typography>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        border: '2px solid #E2E8F0',
                        borderRadius: '12px',
                        fontSize: '16px',
                        fontFamily: '"Inter", sans-serif',
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#1ABC9C'}
                      onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                    />
                  </Box>
                </Box>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: '#1ABC9C',
                    color: 'white',
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    py: 3,
                    borderRadius: '12px',
                    textTransform: 'none',
                    boxShadow: '0 6px 20px rgba(26, 188, 156, 0.3)',
                    '&:hover': {
                      backgroundColor: '#16A085',
                      boxShadow: '0 8px 25px rgba(26, 188, 156, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get My Free UX Audit
                </Button>
              </form>
            </Box>

            {/* Illustration Section */}
            <Box
              sx={{
                flex: { xs: '1', lg: '1' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                order: { xs: -1, lg: 1 }, // Show illustration above form on mobile
              }}
            >
              <img
                src="/src/assets/DudeandScreens.png"
                alt="UX Designer analyzing multiple devices and screens"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                  filter: 'drop-shadow(0 8px 24px rgba(44, 62, 80, 0.12))',
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

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