import React, { useState,useContext } from 'react';
import { randProfilePicture, customProfilePicture } from '../components/ProfilePicture/ProfilePicture';


const UserContext = React.createContext();
const ModifyUserContext = React.createContext();

export function useUserContext() {
    return useContext(UserContext)
}
export function useModifyUserContext() {
    return useContext(ModifyUserContext)
}

export function UserProvider({ children }) {
    const [userProfile, setUserProfile] = useState({
        isLoggedIn : false,
        username : '',
        profilePic : ''
    });

    function loginUser(name) {
        const avatar = customProfilePicture({customSeed:name})
        setUserProfile({
            isLoggedIn: true,
            username: name,
            profilePic: avatar
        });
        //console.log("UserContext->login userprofile : ", userProfile)
    }

    function updateProfilePicture() {
        const avatar = randProfilePicture();
        setUserProfile(prevUserProfile => {
            return {...prevUserProfile, profilePic : avatar}
        })
    }

    function logout() {
        setUserProfile({
            isLoggedIn : false,
            username : '',
            profilePic : ''
        });
    }

    return(
        <UserContext.Provider value={userProfile}>
            <ModifyUserContext.Provider value={{ loginUser, updateProfilePicture, logout }}>
                {children}
            </ModifyUserContext.Provider>
        </UserContext.Provider>
    )
}