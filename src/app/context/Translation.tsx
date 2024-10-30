'use client';

import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { TranslationContextType, Translations, Language } from '../types/types';
// Import translations
import en from '../locales/en.json';
import es from '../locales/es.json';

const translations: Record<Language, Translations> = { en, es };

// Create context with a default value of `undefined` to handle initialization
export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [currentTranslations, setCurrentTranslations] = useState<Translations>(translations[language]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language | null;
    if (storedLanguage && translations[storedLanguage]) {
      setLanguage(storedLanguage);
      setCurrentTranslations(translations[storedLanguage]);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setCurrentTranslations(translations[lang]);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => currentTranslations[key] || key;

  return (
    <TranslationContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};
