// app/layout.tsx
import { TranslationProvider } from "./context/Translation";
import { ReactNode } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <TranslationProvider>{children}</TranslationProvider>
        </UserProvider>
      </body>
    </html>
  );
}
