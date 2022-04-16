import React, { useState } from 'react';

import { ChakraProvider, theme, Container } from '@chakra-ui/react';

import Nav from './components/Nav/Nav';
import Splash from './components/Splash/Splash';
import CreateQuizDrawer from './components/CreateQuizDrawer/CreateQuizDrawer';
import { LoginModal } from './components/LoginBox/LoginBox';
import { UserProvider } from './contexts/UserContext';

function App() {
  const [showQuizDrawer, setShowQuizDrawer] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  return (
    <>
      <UserProvider>
        <ChakraProvider theme={theme}>
          <Nav />
          <CreateQuizDrawer
            openDrawer={showQuizDrawer}
            onCloseDrawer={() => setShowQuizDrawer(false)}
          />
          <LoginModal
            isModalOpen={showLoginModal}
            onCloseModal={() => setShowLoginModal(false)}
          />
          <Container as="main">
            <Splash
              showDrawer={showQuizDrawer}
              setShowDrawer={setShowQuizDrawer}
              showLoginModal={showLoginModal}
              setShowLoginModal={setShowLoginModal}
            />
          </Container>
        </ChakraProvider>
      </UserProvider>
    </>
  );
}

export default App;
