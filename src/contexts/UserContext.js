import React, { useContext, useEffect } from 'react';
import { nanoid } from 'nanoid';
import {
  randProfilePicture,
  customProfilePicture,
} from '../components/ProfilePicture/ProfilePicture';
import useLocalStorage from '../hooks/useLocalStorage';
import { useAPI } from '../hooks/useAPI';
import { authenticateUser } from '../utils';

const UserContext = React.createContext();
const ModifyUserContext = React.createContext();

export function useUserContext() {
  return useContext(UserContext);
}
export function useModifyUserContext() {
  return useContext(ModifyUserContext);
}

export function UserProvider({ children }) {
  const [userProfile, setUserProfile] = useLocalStorage("user", {
    isLoggedIn: false,
    userid: '',
    username: '',
    profilePic: '',
  });
  const [userDetails, saveUserSession] = useAPI(() => authenticateUser(userProfile.username, userProfile.userid))

  useEffect(() => {
    if(userDetails.isSuccess) {
      console.log("login api call", userDetails)
      setUserProfile((prevData) => {
        return {...prevData, isLoggedIn: true}
      })
    }
  }, [userDetails]);
  useEffect(() => {
    if(userProfile.username !== '')
    {
      saveUserSession();
    }
  }, [userProfile.username]);
  function loginUser(name) {
    const avatar = customProfilePicture({ customSeed: name });
    setUserProfile({
      isLoggedIn: false,
      userid: nanoid(),
      username: name,
      profilePic: avatar,
    });
    //console.log("UserContext->login userprofile : ", userProfile)
  }

  function updateProfilePicture() {
    const avatar = randProfilePicture();
    setUserProfile(prevUserProfile => {
      return { ...prevUserProfile, profilePic: avatar };
    });
  }

  function logout() {
    setUserProfile({
      isLoggedIn: false,
      userid: '',
      username: '',
      profilePic: '',
    });
  }
  
  return (
    <UserContext.Provider value={userProfile}>
      <ModifyUserContext.Provider
        value={{ loginUser, updateProfilePicture, logout }}
      >
        {children}
      </ModifyUserContext.Provider>
    </UserContext.Provider>
  );
}
