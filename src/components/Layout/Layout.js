import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Nav from '../Nav/Nav';
import { UserProvider } from '../../contexts/UserContext';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <UserProvider>
        <ChakraProvider theme={theme}>
          <Nav />
          <Outlet />
        </ChakraProvider>
      </UserProvider>
    </>
  );
};

export default Layout;
