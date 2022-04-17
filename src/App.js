import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

import Splash from './components/Splash/Splash';
import CreateQuizDrawer from './components/CreateQuizDrawer/CreateQuizDrawer';
import { LoginModal } from './components/LoginBox/LoginBox';
import Layout from './components/Layout/Layout';
import Quiz from './components/Quiz/Quiz';

const Home = () => {
  const [showQuizDrawer, setShowQuizDrawer] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  // const data = useSlidesAPI()
  // console.log("APP.js slidesdata : ",data)
  return (
    <>
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
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
