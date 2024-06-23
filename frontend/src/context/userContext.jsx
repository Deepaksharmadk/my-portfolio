import { createContext, useContext } from "react";

export const userContext = createContext("");

export const userContextProvider = ({ children }) => {
  return (
    <userContextProvider.Provider value={{}}>
      {children}
    </userContextProvider.Provider>
  );
};
export const useUserContext = () => {
  const usercontext = useContext(userContext);
  return usercontext;
};
