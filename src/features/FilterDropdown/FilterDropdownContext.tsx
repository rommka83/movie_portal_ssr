import { createContext, useContext } from 'react';

const dropdownContext = createContext<Function | null>(null);

export const FilterDropdownProvider = dropdownContext.Provider;

export const useDropdownContext = () => {
  const context = useContext(dropdownContext);
  if (context === undefined) {
    throw new Error('Использовать useDropdownContext можно только внутри FilterDropdownProvider');
  }
  return context;
};
