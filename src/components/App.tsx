import {HelmetProvider} from "react-helmet-async";
import {AuthProvider} from "~/components/home/UserContext";
import Main from "~/components/Main";
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext<any>(null);

export const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark', 'invert');
    } else {
      document.documentElement.classList.remove('dark', 'invert');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <HelmetProvider>
        <AuthProvider>
          <Main />
        </AuthProvider>
      </HelmetProvider>
    </ThemeContext.Provider>
  );
};
