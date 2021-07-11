import { createContext, useEffect, useState } from 'react';

export const defaultLocale = 'ro';
export const locales = ['ro', 'en'];
export const LanguageContext = createContext([]);

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('ro');

  return (
    <LanguageContext.Provider value={[locale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  );
}
