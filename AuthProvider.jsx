import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../Utils/localStorage.jsx";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  
  useEffect(( )=> {
    console.log('Fetching data from local storage...');
    const { employees, admin } = getLocalStorage();
    console.log('Data fetched:', employees, admin);
    setUserData({ employees, admin });
    console.log('userData updated:', userData);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
