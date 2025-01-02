"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { userSession } from "@/interfaces/Types.session";

export interface LogginContextProps {
  userData: userSession | null; 
  setUserData: (userData: userSession | null) => void; 
  loadUserData: () => Promise<userSession | null>; 
}

export const LogginContext = createContext<LogginContextProps>({
  userData: null, 
  setUserData: () => {}, 
  loadUserData: async () => null, 
});

export interface LogginProviderProps {
  children: React.ReactNode;
}

export const LogginProvider: React.FC<LogginProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<userSession | null>(null);

  useEffect(() => {
    if (userData) {
      localStorage.setItem(
        "sessionStart",
        JSON.stringify({
          token: userData.token,
          userData: userData.userData
        })
      );
    }
  }, [userData]);

  useEffect(() => {
    const storedUserData = localStorage.getItem("sessionStart");
    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        setUserData(parsedData);
      } catch (error) {
        console.error("Error parsing session data:", error);
        setUserData(null);
      }
    }
  }, []);

  const loadUserData = async (): Promise<userSession | null> => {
    const storedUserData = localStorage.getItem("sessionStart");
    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        setUserData(parsedData);
        return parsedData;
      } catch (error) {
        console.error("Error parsing session data:", error);
        setUserData(null);
        return null;
      }
    }
    return null;
  };

  return (
    <LogginContext.Provider value={{ userData, setUserData, loadUserData }}>
      {children}
    </LogginContext.Provider>
  );
};

export const useLoggin = () => useContext(LogginContext);
