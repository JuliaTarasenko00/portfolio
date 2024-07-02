import { createContext, useEffect, useState } from 'react';
import { LOCAL } from '../../i18n/constants';
import i18n from '../../i18n';

export type LanguageContextType = {
  currentLanguage: string;
  language: string[];
  setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const KEY = 'language';

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const language: Array<string> = [LOCAL.UK, LOCAL.EN];
  const valueLocal = window.localStorage.getItem(KEY);
  const [currentLanguage, setCurrentLanguage] = useState(
    () => JSON.parse(valueLocal as string) ?? language[1],
  );

  useEffect(() => {
    window.localStorage.setItem(KEY, JSON.stringify(currentLanguage));
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, language, setCurrentLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
