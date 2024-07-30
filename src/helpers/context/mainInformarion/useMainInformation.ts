import { useContext } from 'react';
import { MainContext, MainInformation } from './MainInformationContext';

export const useMainInformation = (): MainInformation => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error(
      'useMainInformation must be used within a LanguageProvider',
    );
  }

  return context;
};
