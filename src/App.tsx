import { createContext, useEffect, useState } from 'react';

import Header from './components/Header';
import Home from './pages';
import { Grid } from './types/grid';
import { Country } from './types/country';
import { Countries } from './types/countries';

export const ActiveGridContext = createContext<Grid>(null!);

function App() {
  const [activeGrid, setActiveGrid] = useState<number>(0);
  const [countries, setCountries] = useState<Country[]>([]);
  const [dataRegions, setDataRegions] = useState<Countries>({});

  useEffect(() => {
    try {
      fetch('https://restcountries.com/v3.1/all').then((response) =>
        response.json().then((data) => setCountries(data))
      );
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const newData: Countries = {};
    const newDataSlice: Countries = {};

    countries.forEach((item) =>
      !newData[item.region] ? (newData[item.region] = [item]) : newData[item.region].push(item)
    );

    for (const [key, value] of Object.entries(newData)) {
      newDataSlice[key] = value.sort((a, b) => (a.population < b.population ? 1 : -1)).slice(0, 10);
    }

    setDataRegions(newDataSlice);
  }, [countries]);

  return (
    <ActiveGridContext.Provider value={{ activeGrid, setActiveGrid }}>
      <Header />
      <Home dataRegions={dataRegions} />
    </ActiveGridContext.Provider>
  );
}

export default App;
