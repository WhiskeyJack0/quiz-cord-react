import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Nav from '../Nav/Nav';
import { UserProvider } from '../../contexts/UserContext';
import { QuizProvider } from '../../contexts/QuizContext';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <UserProvider>
        <ChakraProvider theme={theme}>
          <QuizProvider>
            <Nav />
            <Outlet />
          </QuizProvider>
        </ChakraProvider>
      </UserProvider>
    </>
  );
};

export default Layout;
