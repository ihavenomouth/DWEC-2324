import {createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(0);

  const value = { nombre, setNombre, edad, setEdad, };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}