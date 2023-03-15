import { createContext, useState } from 'react';

import Header from './components/Header';
import Home from './pages';

interface ActiveGridContext {
  activeGrid: number;
  setActiveGrid: (active: number) => void;
}

export const ActiveGridContext = createContext<ActiveGridContext>(null!);

function App() {
  const [activeGrid, setActiveGrid] = useState(0);

  return (
    <ActiveGridContext.Provider value={{ activeGrid, setActiveGrid }}>
      <Header />
      <Home />
    </ActiveGridContext.Provider>
  );
}

export default App;
