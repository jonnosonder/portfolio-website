import LandingPage from './pages/LandingPage';
import CursorEffect from './affects/CursorEffect';
import BackgroundBalls from './affects/BackgroundBalls';

import { useState } from "react"; 

function App() {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  return (
    <>
    <LandingPage 
      isBurgerActive={isBurgerActive}
      setIsBurgerActive={setIsBurgerActive}
    />
    <CursorEffect paused={isBurgerActive} />
    <BackgroundBalls paused={isBurgerActive} />
    </>
  );
}

export default App;
