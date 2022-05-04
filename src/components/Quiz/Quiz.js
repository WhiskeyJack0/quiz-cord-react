import { Button, Heading, useDisclosure } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client'
import QuizContainer from '../Quiz-Container';
import { LoginModal } from '../Login/Login';
import { useQuizContext } from '../../contexts/QuizContext';
import { useUserContext } from '../../contexts/UserContext';
import { useAPI } from '../../hooks/useAPI';
import { getPresentationIDFromUrl, getQuizFromDB } from '../../utils';
import { useSocketContext } from '../../contexts/SocketContext';

export const Quiz = () => {
  
  let params = useParams();
  
  const quizContext = useQuizContext();
  const userContext = useUserContext();
  const socket = useSocketContext();
  
  const navigate = useNavigate();
  const [quizReady, setQuizReady] = useState(false);
  const {isOpen, onClose, onOpen} = useDisclosure();
  const [quizDetails, getQuizDetails] = useAPI(() =>getQuizFromDB(params.quizID))
  // console.log(quizContext)
  // console.log(params.quizID)
  // console.log(socket)
  const sendMessage = async() => {
    const messageData = {
      room : quizContext.quizState.quizID,
      author: userContext.username,
      message: "Test",
      time: new Date(Date.now()).toLocaleTimeString()}
      await socket.emit('send_message', messageData);
  }
  
  useEffect(() => {
    socket.on('receive_message', (data) =>{
        console.log("Socket message : ", data)
    });
}, [socket]);
  useEffect(() => {
    if(!userContext.isLoggedIn) {
      console.log("Not logged in")
      onOpen();
    }
  }, []);

  useEffect(() => {
    if(userContext.isLoggedIn && quizContext.quizState.quizID === '') {
      console.log("User logged in, but no quizcontext")
      getQuizDetails()
      
    }
    if(userContext.isLoggedIn && quizContext.quizState.quizID !== ''){
      let active_users = quizContext.quizState.active_users;
      console.log("Active users ", active_users)      
    }
  }, [userContext.isLoggedIn, quizContext]);

  useEffect(() => {
    console.log("UEF Quiz.js : ", quizDetails)
    if(userContext.isLoggedIn && quizDetails.isSuccess){
      if(quizDetails.data) {
        console.log("Quiz Details updated: ", JSON.parse(quizDetails.data))
        quizContext.setCurrentQuiz(JSON.parse(quizDetails.data))
      }
      else {
        navigate("/") // Maybe a Not Found Page?
      }
    
    }//
  }, [quizDetails.inProgress]);
  
  useEffect(() => {
    if(quizContext.quizState.quizID !== '' && !quizReady){
      quizContext.addParticipant(userContext.username, userContext.userid)
      socket.emit("join_room", quizContext.quizState.quizID)
      setQuizReady(true)
    }
  }, [quizContext]);
  return (
      <>
        {quizReady && <Heading as="h1" size="2xl" ml={4}>{quizContext.quizState.quizName}</Heading>}
        {quizReady && <Button onClick={sendMessage}>Emit</Button>}
        {quizReady && <QuizContainer pID={getPresentationIDFromUrl(quizContext.quizState.quizURL)} />}
        <LoginModal
        isModalOpen={isOpen}
        onCloseModal={() => onClose()}
      />
      </>
  );
};

export default Quiz;
