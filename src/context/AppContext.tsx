import React, { createContext, useState, ReactNode } from 'react';

export interface StateType {
  value: number;
}
  
export interface ContextType {
  state: StateType;
  setState: React.Dispatch<React.SetStateAction<StateType>>;
}


const initialState: StateType = {
  value: 0,
};


export const AppContext = createContext<ContextType | undefined>(undefined);
 

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};