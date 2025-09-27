// Serial Effect About/Expertise Section
// Positioning Deep's unique blend of UX expertise + dev understanding + AI workflows

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Code as CodeIcon,
  Lightbulb as InnovationIcon,
  Group as CollaborationIcon,
  TrendingUp as GrowthIcon,
} from '@mui/icons-material';

const expertise = [
  {
    icon: CodeIcon,
    title: 'Design + Development',
    description: 'I speak both languages fluently, bridging the gap between beautiful designs and technical feasibility.',
  },
  {
    icon: InnovationIcon,
    title: 'AI-Powered Workflows',
    description: 'Leveraging cutting-edge AI tools to accelerate design processes and enhance creative output.',
  },
  {
    icon: CollaborationIcon,
    title: 'Cross-Functional Partnership',
    description: 'Years of experience working with engineering teams, understanding constraints and opportunities.',
  },
  {
    icon: GrowthIcon,
    title: 'Business Impact',
    description: 'Focus on measurable outcomes - designs that drive engagement, conversion, and user satisfaction.',
  },
];

const skills = [
  'User Experience Design',
  'Interface Design',
  'Design Systems',
  'Prototyping',
  'User Research',
  'Product Strategy',
  'React Development',
  'Component Libraries',
  'AI Design Tools',
  'Design Ops',
  'Figma to Code',
  'Accessibility',
];

const ExpertiseCard = ({ item, index }) => {
  const IconComponent = item.icon;

  return (
    <Card
      sx={{
        height: '100%',
        border: 'none',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '12px',
            backgroundColor: '#4FD1C715',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <IconComponent
            sx={{
              fontSize: 24,
              color: '#4FD1C7',
            }}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: '#2D3748',
            mb: 1,
            fontSize: '1.125rem',
          }}
        >
          {item.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: '#718096',
            lineHeight: 1.5,
          }}
        >
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#FFFFFF',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Left Column - Personal Story */}
          <Grid item xs={12} md={6}>
            <Box>
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
                About Serial Effect
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: '#2D3748',
                  mb: 4,
                  fontSize: { xs: '2.25rem', md: '2.75rem' },
                  lineHeight: 1.2,
                }}
              >
                Bridging Design & Development in the AI Era
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.125rem',
                  lineHeight: 1.6,
                  color: '#718096',
                  mb: 3,
                }}
              >
                After years of building Deep Graphics as a visual design agency, I realized the future
                lies at the intersection of UX expertise, development understanding, and AI-powered workflows.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.125rem',
                  lineHeight: 1.6,
                  color: '#718096',
                  mb: 4,
                }}
              >
                <strong style={{ color: '#2D3748' }}>Serial Effect</strong> represents this evolution -
                helping businesses navigate the rapidly changing landscape of user experience design
                with strategic thinking, technical insight, and modern AI-enhanced processes.
              </Typography>

              {/* Profile Avatar */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    mr: 3,
                    background: 'linear-gradient(135deg, #E53E3E 0%, #4FD1C7 100%)',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                  }}
                >
                  SE
                </Avatar>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#2D3748',
                      mb: 0.5,
                    }}
                  >
                    Sandeep (Deep)
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#718096',
                      fontSize: '1rem',
                    }}
                  >
                    Founder & Principal UX Strategist
                  </Typography>
                </Box>
              </Box>

              {/* Skills */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: '#2D3748',
                    mb: 2,
                    fontSize: '1.125rem',
                  }}
                >
                  Core Competencies
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      sx={{
                        backgroundColor: index % 3 === 0 ? '#E53E3E15' : index % 3 === 1 ? '#4FD1C715' : '#2D374815',
                        color: index % 3 === 0 ? '#E53E3E' : index % 3 === 1 ? '#4FD1C7' : '#2D3748',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: index % 3 === 0 ? '#E53E3E25' : index % 3 === 1 ? '#4FD1C725' : '#2D374825',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Column - Expertise Cards */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  color: '#2D3748',
                  mb: 3,
                  fontSize: { xs: '1.75rem', md: '2rem' },
                  textAlign: { xs: 'left', md: 'center' },
                }}
              >
                What Makes Serial Effect Different
              </Typography>

              <Grid container spacing={3}>
                {expertise.map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <ExpertiseCard item={item} index={index} />
                  </Grid>
                ))}
              </Grid>

              {/* Unique Value Proposition */}
              <Box
                sx={{
                  mt: 4,
                  p: 4,
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #4FD1C710 0%, #E53E3E10 100%)',
                  border: '1px solid #E2E8F0',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: '#2D3748',
                    mb: 2,
                    fontSize: '1.125rem',
                  }}
                >
                  The Serial Effect Advantage
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#718096',
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                  }}
                >
                  "I don't just design interfaces—I architect experiences that your development
                  team can build efficiently and your users will love. This dual perspective
                  eliminates the usual friction between design and implementation."
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;