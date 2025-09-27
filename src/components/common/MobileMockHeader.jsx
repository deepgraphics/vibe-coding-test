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
      width: 24,
      height: 24,
      backgroundColor: '#4FD1C7',
      borderRadius: '6px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '3px',
    }}
  >
    <Box sx={{ width: '14px', height: '2px', backgroundColor: 'white', borderRadius: '1px' }} />
    <Box sx={{ width: '14px', height: '2px', backgroundColor: 'white', borderRadius: '1px' }} />
    <Box sx={{ width: '14px', height: '2px', backgroundColor: 'white', borderRadius: '1px' }} />
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
                height: '28px',
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