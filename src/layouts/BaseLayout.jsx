import React from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStyles } from '../theme/globalStyles';
import { AppHeader } from '../ui/AppHeader';
import { Logo } from '../ui/Logo';

export function BaseLayout({ children }) {
  return (
    <div>
      <GlobalStyles />

      <AppHeader />

      <main>{children}</main>
    </div>
  );
}
