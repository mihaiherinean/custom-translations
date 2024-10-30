export type Translations = {
    [key: string]: string;
  };
  
export type Language = 'en' | 'es';

export interface TranslationContextType {
language: Language;
t: (key: string) => string;
changeLanguage: (lang: Language) => void;
}
  