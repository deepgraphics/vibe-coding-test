// Mobile Mock Header - Exact replica of Figma design
// Clean logo + hamburger menu

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const HamburgerIcon = () => (
  <Box
    sx={{
      width: 42,
      height: 42,
      backgroundColor: '#1ABC9C',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '4px',
    }}
  >
    <Box sx={{ width: '24px', height: '3px', backgroundColor: 'white', borderRadius: '2px' }} />
    <Box sx={{ width: '24px', height: '3px', backgroundColor: 'white', borderRadius: '2px' }} />
    <Box sx={{ width: '24px', height: '3px', backgroundColor: 'white', borderRadius: '2px' }} />
  </Box>
);

const MobileMockHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, height: '100%', backgroundColor: '#FFFFFF', pt: 2 }}>
      <List>
        <ListItem button>
          <ListItemText
            primary="Services"
            sx={{
              '& .MuiTypography-root': {
                fontFamily: '"Inter", sans-serif',
                color: '#1E293B',
                fontWeight: 500,
              }
            }}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary="About"
            sx={{
              '& .MuiTypography-root': {
                fontFamily: '"Inter", sans-serif',
                color: '#1E293B',
                fontWeight: 500,
              }
            }}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary="Contact"
            sx={{
              '& .MuiTypography-root': {
                fontFamily: '"Inter", sans-serif',
                color: '#1E293B',
                fontWeight: 500,
              }
            }}
          />
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
          backgroundColor: '#FFFFFF',
          borderBottom: 'none',
        }}
      >
        <Toolbar sx={{ px: 3, py: 1.5 }}>
          {/* Logo */}
          <Box sx={{ flexGrow: 1 }}>
            <img
              src="/src/assets/Logo.svg"
              alt="Serial Effect"
              style={{
                height: '64px',
                width: 'auto',
              }}
            />
          </Box>

          {/* Hamburger Menu */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ p: 0 }}
          >
            <HamburgerIcon />
          </IconButton>
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
    </>
  );
};

export default MobileMockHeader;