import React from 'react';
import { AuthProvider } from './authContext/AuthContext';
import { LanguageProvider } from './languageContext/LanguageContext';
import { MainInformationProvider } from './mainInformarion/MainInformationContext';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <MainInformationProvider>{children}</MainInformationProvider>
      </LanguageProvider>
    </AuthProvider>
  );
};
