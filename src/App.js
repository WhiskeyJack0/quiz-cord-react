import React, { useState } from 'react';

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



function App() {
  const [showQuizDrawer, setShowQuizDrawer] = useState(false);
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <CreateQuizDrawer openDrawer={showQuizDrawer} onCloseDrawer={()=>setShowQuizDrawer(false)}/>
      <Container as="main">
        <Splash setShowDrawer={setShowQuizDrawer}/>
      </Container>
    </ChakraProvider>
  );
}

export default App;
