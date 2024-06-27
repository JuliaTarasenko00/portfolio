import { createContext, useEffect, useState } from 'react';

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
  const language: Array<string> = ['uk', 'en'];
  const valueLocal = window.localStorage.getItem(KEY);
  const [currentLanguage, setCurrentLanguage] = useState(() =>
    valueLocal ? JSON.parse(valueLocal) : language[1],
  );

  useEffect(() => {
    window.localStorage.setItem(KEY, JSON.stringify(currentLanguage));
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, language, setCurrentLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
