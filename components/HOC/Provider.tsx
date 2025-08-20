

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};

export default Provider;
