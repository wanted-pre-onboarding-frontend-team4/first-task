import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/global-styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
