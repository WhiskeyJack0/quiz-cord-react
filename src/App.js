import React, { useState, useEffect } from 'react';

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Container
} from '@chakra-ui/react';

import Nav from './components/Nav/Nav';
import Splash from './components/Splash/Splash';
import CreateQuizDrawer from './components/CreateQuizDrawer/CreateQuizDrawer';
import {ProfilePicture, customProfilePicture} from './components/ProfilePicture/ProfilePicture';
import {LoginModal} from './components/LoginBox/LoginBox'


function App() {
  const [showQuizDrawer, setShowQuizDrawer] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [pendingAction, setPendingAction] = useState();

  function logout(){
    setProfilePic('')
    setUsername('')
  }

  useEffect(() => {
    if(isLoggedIn) {
      setProfilePic(customProfilePicture({customSeed:username}))
      if(showLoginModal) { //Login done from splash screen modal, re-route to previous action
        setShowLoginModal(false)
        pendingAction && pendingAction.action(pendingAction.value)
      }
      console.log("logged in")
    }
    else {
      logout()
    }
  },[isLoggedIn])

  return (
    <ChakraProvider theme={theme}>
      <Nav 
        isLoggedIn={isLoggedIn} 
        login={setIsLoggedIn} 
        username={username} 
        setUsername={setUsername}
        profilePic={profilePic}
        />
      
      <CreateQuizDrawer 
        openDrawer={showQuizDrawer} 
        onCloseDrawer={()=>setShowQuizDrawer(false)}/>
      <LoginModal 
        login={setIsLoggedIn} 
        username={username} 
        setUsername={setUsername}
        isModalOpen={showLoginModal} 
        onCloseModal={() => setShowLoginModal(false)}/>
      
      <Container as="main">
        <Splash 
          setShowDrawer={setShowQuizDrawer} 
          setShowLoginModal={setShowLoginModal}
          isLoggedIn={isLoggedIn}
          login={setIsLoggedIn}
          setPendingAction={setPendingAction} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
