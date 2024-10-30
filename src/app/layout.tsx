// app/layout.tsx
import { TranslationProvider } from "./context/Translation";
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <TranslationProvider>{children}</TranslationProvider>
      </body>
    </html>
  );
}
