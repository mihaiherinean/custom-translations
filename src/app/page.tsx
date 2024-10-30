// ExampleComponent.tsx
'use client';
import { useTranslation } from "./hooks/useTranslation";

export default function ExampleComponent() {
  const { t, changeLanguage, language } = useTranslation();

  return (
    <div>
      <p>{t('title')}</p>
      <button onClick={() => changeLanguage(language === 'en' ? 'es' : 'en')}>
        {language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
      </button>
    </div>
  );
}
