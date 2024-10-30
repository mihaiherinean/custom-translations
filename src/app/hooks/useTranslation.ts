// hooks/useTranslation.ts
'use client';

import { useContext } from 'react';
import { TranslationContext } from '../context/Translation';
import { TranslationContextType } from '../types/types';

export function useTranslation(): TranslationContextType {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
