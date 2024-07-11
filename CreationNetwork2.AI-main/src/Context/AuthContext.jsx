import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  const login = (newUsername, newToken) => {
    setUsername(newUsername);
    setToken(newToken);
    console.log(newUsername);
    console.log(newToken);
  };

  const logout = () => {
    setUsername(null);
    setToken(null);
  };

  const value = {
    username,
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
