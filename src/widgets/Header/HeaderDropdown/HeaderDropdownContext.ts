import { createContext, useContext } from 'react';

const headerDropdownContext = createContext<Function | null>(null);

export const HeaderDropdownProvider = headerDropdownContext.Provider;

export const useHeaderDropdownContext = () => {
  const context = useContext(headerDropdownContext);
  if (context === undefined) {
    throw new Error('Использовать useHeaderDropdownContext можно только внутри HeaderDropdownProvider');
  }
  return context;
};
