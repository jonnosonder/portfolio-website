import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isSettingsActive, setIsSettingsActive] = useState(false);
  const [whichSectionToScroll, setWhichSectionToScroll] = useState(0);

  const toggleBurgerExpanded = () => {
    setIsBurgerActive((prev) => !prev);
  };

  const toggleSettingsExpanded = () => {
    setIsSettingsActive((prev) => !prev);
  };

  return (
    <GlobalContext.Provider value={{ isBurgerActive, setIsBurgerActive, toggleBurgerExpanded, isSettingsActive, setIsSettingsActive, toggleSettingsExpanded, whichSectionToScroll, setWhichSectionToScroll }}>
      {children}
    </GlobalContext.Provider>
  );
};
