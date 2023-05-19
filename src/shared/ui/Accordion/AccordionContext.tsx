import { createContext, useContext } from 'react';

const accordionContext = createContext<Function | null>(null);

export const AccordionDropdownProvider = accordionContext.Provider;

export const useAccordionContext = () => {
  const context = useContext(accordionContext);
  if (context === undefined) {
    throw new Error('Использовать useAccordionContext можно только внутри AccordionDropdownProvider');
  }
  return context;
};
