import LandingPage from './pages/LandingPage';
import CursorEffect from './affects/CursorEffect';
import BackgroundBalls from './affects/BackgroundBalls';

import { GlobalProvider } from './GlobalContext';

function App() {

  return (
    <GlobalProvider>
      <LandingPage />
      <CursorEffect />
      <BackgroundBalls />
    </GlobalProvider>
  );
}

export default App;
