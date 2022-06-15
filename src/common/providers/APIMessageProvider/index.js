import React, { useState, useCallback } from 'react';

export const APIMessagesContext = React.createContext({
  messages: [],
  addMessage: () => {}
});

export default function APIMessagesProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages(oldMessages => [ ...oldMessages, message])
  };

  const contextValue = {
    messages,
    addMessage: useCallback((message) => {
      addMessage(message)
    }, [])
  };

  return (
    <APIMessagesContext.Provider value={contextValue}>
      {children}
    </APIMessagesContext.Provider>
  );
}