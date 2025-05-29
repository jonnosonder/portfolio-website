import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isSettingsActive, setIsSettingsActive] = useState(false);

  const toggleBurgerExpanded = (whichSectionToScroll) => {
    setIsBurgerActive((prev) => !prev);
    
    const el = document.getElementById('root');
    if (!el) return;
    if (isBurgerActive) {
      el.classList.remove("noScrolling");
      el.classList.add("allowScrolling");
    } else {
      el.classList.remove("allowScrolling");
      el.classList.add("noScrolling");
    }

    if (isBurgerActive) {
      if (whichSectionToScroll === 0) {
        const sec = document.getElementById('hero');
        if (sec) {
          sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (whichSectionToScroll === 1) {
        const sec = document.getElementById('experience');
        if (sec) {
          sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }else if (whichSectionToScroll === 2) {
        const sec = document.getElementById('certificates');
        if (sec) {
          sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }else if (whichSectionToScroll === 3) {
        const sec = document.getElementById('3dmodeling');
        if (sec) {
          sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }else if (whichSectionToScroll === 4) {
        const sec = document.getElementById('skills');
        if (sec) {
          sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  };

  const toggleSettingsExpanded = () => {
    setIsSettingsActive((prev) => !prev);
  };

  return (
    <GlobalContext.Provider value={{ isBurgerActive, setIsBurgerActive, toggleBurgerExpanded, isSettingsActive, setIsSettingsActive, toggleSettingsExpanded }}>
      {children}
    </GlobalContext.Provider>
  );
};
