import { useContext } from 'react';
import { AppContext } from './AppContext';

import { ContextType } from './AppContext';

// Custom hook for consuming the context
const useAppContext = () => {
  const context: ContextType | undefined = useContext(AppContext);
  
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }

  return context;
};

export default useAppContext;