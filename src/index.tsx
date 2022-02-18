import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import UserProvider from './context/userState';
import QuestionProvider from './context/questionState';
import GlobalStyles from './global/styles';
import theme from './global/theme';
import Routes from './routes/route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <GlobalStyles />

    <UserProvider>
      <QuestionProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </QuestionProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);