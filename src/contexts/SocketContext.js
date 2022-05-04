import React, { useContext, useState } from 'react';
import io from 'socket.io-client'

const SocketContext = React.createContext();

export function useSocketContext(){
  return useContext(SocketContext)
}
export function SocketProvider({ children }) {
  const socket = io.connect();

  return(
    <SocketContext.Provider value={socket}>
      { children }
    </SocketContext.Provider>
  )
}