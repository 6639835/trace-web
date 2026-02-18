'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const defaultThemeProviderProps: React.ComponentProps<typeof NextThemesProvider> = {
  attribute: 'class',
  defaultTheme: 'system',
  enableSystem: true,
  disableTransitionOnChange: true,
};

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...defaultThemeProviderProps} {...props}>
      {children}
    </NextThemesProvider>
  );
}
