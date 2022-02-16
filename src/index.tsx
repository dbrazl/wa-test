import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import UserProvider from './context/userState';
import GlobalStyles from './global/styles';
import theme from './global/theme';
import Routes from './routes/route';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </UserProvider>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);