// Serial Effect Services Section
// Three core services: Product Strategy, UX/UI Design, Design Ops

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Psychology as StrategyIcon,
  Palette as DesignIcon,
  Engineering as OpsIcon,
} from '@mui/icons-material';

const services = [
  {
    icon: StrategyIcon,
    title: 'Product Strategy',
    description: 'Transform your vision into a clear roadmap. I help you understand your users, define problems worth solving, and create strategic approaches that drive real business outcomes.',
    highlights: [
      'User research & insights',
      'Product roadmapping',
      'Competitive analysis',
      'Feature prioritization',
    ],
    color: '#E53E3E',
  },
  {
    icon: DesignIcon,
    title: 'UX/UI Design',
    description: 'Create experiences that users love and businesses value. From wireframes to pixel-perfect interfaces, I design solutions that are both beautiful and functional.',
    highlights: [
      'User experience design',
      'Interface design',
      'Prototyping & testing',
      'Design systems',
    ],
    color: '#4FD1C7',
  },
  {
    icon: OpsIcon,
    title: 'Design Ops',
    description: 'Scale your design impact with modern workflows. I help teams adopt AI-powered tools, establish design systems, and create processes that accelerate innovation.',
    highlights: [
      'Design system architecture',
      'AI workflow integration',
      'Team process optimization',
      'Tool selection & training',
    ],
    color: '#2D3748',
  },
];

const ServiceCard = ({ service, index }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const IconComponent = service.icon;

  return (
    <Card
      sx={{
        height: '100%',
        border: 'none',
        borderRadius: '20px',
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'visible',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
        },
      }}
    >
      {/* Geometric accent */}
      <Box
        sx={{
          position: 'absolute',
          top: -15,
          right: 20,
          width: 30,
          height: 30,
          backgroundColor: service.color,
          transform: 'rotate(45deg)',
          borderRadius: '6px',
          opacity: 0.9,
        }}
      />

      <CardContent sx={{ p: { xs: 3, md: 4 }, pt: { xs: 4, md: 5 } }}>
        {/* Icon */}
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: '16px',
            backgroundColor: `${service.color}15`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3,
          }}
        >
          <IconComponent
            sx={{
              fontSize: 28,
              color: service.color,
            }}
          />
        </Box>

        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: '#2D3748',
            mb: 2,
            fontSize: { xs: '1.5rem', md: '1.75rem' },
          }}
        >
          {service.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: '#718096',
            lineHeight: 1.6,
            mb: 3,
            fontSize: '1.125rem',
          }}
        >
          {service.description}
        </Typography>

        {/* Highlights */}
        <Box>
          {service.highlights.map((highlight, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: service.color,
                  mr: 2,
                  flexShrink: 0,
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: '#2D3748',
                  fontWeight: 500,
                  fontSize: '1rem',
                }}
              >
                {highlight}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #F7FAFC 0%, #EDF2F7 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background geometric elements */}
      <Box
        sx={{
          position: 'absolute',
          left: '5%',
          top: '10%',
          opacity: 0.05,
          transform: 'rotate(-15deg)',
        }}
      >
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3 }}>
          {[...Array(16)].map((_, i) => (
            <Box
              key={i}
              sx={{
                width: 40,
                height: 40,
                backgroundColor: i % 3 === 0 ? '#E53E3E' : i % 3 === 1 ? '#4FD1C7' : '#2D3748',
                transform: 'rotate(45deg)',
                borderRadius: '8px',
              }}
            />
          ))}
        </Box>
      </Box>

      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="body1"
            sx={{
              color: '#E53E3E',
              fontWeight: 600,
              fontSize: '1rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              mb: 2,
            }}
          >
            How I Help
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: '#2D3748',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3rem' },
              lineHeight: 1.2,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Strategic Design Solutions for Modern Businesses
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.125rem', md: '1.25rem' },
              lineHeight: 1.6,
              color: '#718096',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            I partner with forward-thinking companies to create user experiences that drive growth,
            using proven methodologies and cutting-edge AI workflows.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ServiceCard service={service} index={index} />
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              color: '#718096',
              mb: 2,
            }}
          >
            Ready to elevate your user experience?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#2D3748',
              fontSize: '1.25rem',
            }}
          >
            Let's discuss how these services can transform your business.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;