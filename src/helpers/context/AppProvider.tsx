import React from 'react';
import { AuthProvider } from './authContext/AuthContext';
import { LanguageProvider } from './languageContext/LanguageContext';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </AuthProvider>
  );
};
