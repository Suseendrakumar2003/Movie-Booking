import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: isDarkMode ? {
      primary: '#1a1a2e',
      secondary: '#16213e',
      accent: '#0f3460',
      highlight: '#e94560',
      text: 'white',
      background: '#1a1a2e'
    } : {
      primary: '#ffffff',
      secondary: '#f8f9fa',
      accent: '#e9ecef',
      highlight: '#e94560',
      text: '#343a40',
      background: '#ffffff'
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}