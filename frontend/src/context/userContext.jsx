import { createContext, useContext, useState } from "react";

export const userContext = createContext("");

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  const userContext = useContext(userContext);
  return userContext;
};
