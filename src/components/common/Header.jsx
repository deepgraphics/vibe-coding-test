// Serial Effect Header Component
// Clean, modern header with logo and navigation

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Serial Effect Logo - Using actual SVG from assets
const SerialEffectLogo = () => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <img
      src="/src/assets/Logo.svg"
      alt="Serial Effect"
      style={{
        height: '32px',
        width: 'auto',
      }}
    />
  </Box>
);

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigation = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250, height: '100%', backgroundColor: '#FFFFFF' }}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <SerialEffectLogo />
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navigation.map((item) => (
          <ListItem key={item.label} onClick={() => scrollToSection(item.href)} sx={{ cursor: 'pointer' }}>
            <ListItemText
              primary={item.label}
              sx={{
                '& .MuiTypography-root': {
                  fontWeight: 500,
                  color: '#2D3748',
                }
              }}
            />
          </ListItem>
        ))}
        <ListItem sx={{ pt: 2 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => scrollToSection('#contact')}
            sx={{
              background: 'linear-gradient(135deg, #E53E3E 0%, #FF6B6B 100%)',
              '&:hover': {
                background: 'linear-gradient(135deg, #C53030 0%, #E53E3E 100%)',
              },
            }}
          >
            Get Free UX Audit
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.5)',
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 4 }, py: 1 }}>
          <SerialEffectLogo />

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {navigation.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    color: '#2D3748',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: '#E53E3E',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                onClick={() => scrollToSection('#contact')}
                sx={{
                  ml: 2,
                  background: 'linear-gradient(135deg, #E53E3E 0%, #FF6B6B 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #C53030 0%, #E53E3E 100%)',
                  },
                }}
              >
                Get Free UX Audit
              </Button>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ color: '#2D3748' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed header */}
      <Toolbar />
    </>
  );
};

export default Header;