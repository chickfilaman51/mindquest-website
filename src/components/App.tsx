import {HelmetProvider} from "react-helmet-async";
import {AuthProvider} from "~/components/home/UserContext";
import Main from "~/components/Main";
import React, { createContext, useState, useEffect } from 'react';
import 'index.css'

export const ThemeContext = createContext<any>(null);

export const App = () => {
  const themes = ['light', 'dark', 'pastel', 'monochrome'];
  const [theme, setTheme] = useState(themes[0]);

  useEffect(() => {
    // Remove all theme classes
    document.documentElement.classList.remove(...themes);

    // Add the selected theme class
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <HelmetProvider>
        <AuthProvider>
          <Main />
        </AuthProvider>
      </HelmetProvider>
    </ThemeContext.Provider>
  );
};
