// Main App component - this is the root of your application
// It sets up the theme and provides the basic structure

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme/theme';
import Header from './components/common/Header';
import Home from './pages/Home';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline provides consistent styling across browsers */}
      <CssBaseline />

      {/* Your app structure */}
      <Header />
      <main>
        <Home />
      </main>
    </ThemeProvider>
  );
}

export default App;