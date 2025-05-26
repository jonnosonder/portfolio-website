import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [whichSectionToScroll, setWhichSectionToScroll] = useState(0);

  const toggleExpanded = () => {
    setIsBurgerActive((prev) => !prev);
  };

  return (
    <GlobalContext.Provider value={{ isBurgerActive, setIsBurgerActive, toggleExpanded, whichSectionToScroll, setWhichSectionToScroll }}>
      {children}
    </GlobalContext.Provider>
  );
};
