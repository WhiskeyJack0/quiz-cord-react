import React, { useContext, useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const QuizContext = React.createContext();

export function useQuizContext(){
  return useContext(QuizContext)
}
export function QuizProvider({ children }) {
  const [quizState, setQuizState] = useLocalStorage('quiz', { // USE OBJECT DIRECTLY INSTEAD OF USESTATE?
    quizID: '',
    quizName: '',
    quizURL: '',
    creator: '',
    active_users:[]
  });

  function createQuiz({ quizID, quizName, quizURL, creator, new_user }) {
    setQuizState({
      quizID: quizID,
      quizName: quizName,
      quizURL: quizURL,
      creator: creator,
      active_users: [new_user]
    });
    return "Success!"
  }
  function addParticipant(username, userid) {
    setQuizState((prevQuizState) => {
      const new_users_list = prevQuizState.active_users
      new_users_list.find((data) => data.hasOwnProperty(userid)) ? console.log('existing user') : new_users_list.push({[userid] : username})
      return({...prevQuizState, active_users:new_users_list})
    });
  }
  function clearActiveQuiz() {
    setQuizState({
      quizID: '',
      quizName: '',
      quizURL: '',
      creator: '',
      active_users:[]
    })
  }
  function setCurrentQuiz(quiz) {
    setQuizState(quiz)
  }
  useEffect(() => {
    console.log("Updated quiz context : ",quizState)
  }, [quizState]);
  return(
    <QuizContext.Provider value={{quizState, createQuiz, setCurrentQuiz, clearActiveQuiz, addParticipant}}>
      { children }
    </QuizContext.Provider>
  )
}