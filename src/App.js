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


function App() {
  const [showQuizDrawer, setShowQuizDrawer] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [profilePic, setProfilePic] = useState('');

  function logout(){
    setProfilePic('')
    setUsername('')
  }

  useEffect(() => {
    isLoggedIn ? 
      setProfilePic(customProfilePicture({customSeed:username})):
      logout()
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
      {isLoggedIn ? 
        <CreateQuizDrawer openDrawer={showQuizDrawer} onCloseDrawer={()=>setShowQuizDrawer(false)}/> :
        <></>
      }
      <Container as="main">
        <Splash setShowDrawer={setShowQuizDrawer}/>
      </Container>
    </ChakraProvider>
  );
}

export default App;
