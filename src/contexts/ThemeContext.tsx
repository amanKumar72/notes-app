import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useColorScheme } from 'react-native'

const themes = {
  light: {
    background: "#FFFFFF",
    border: "#E0E0E0",
    card: "#F5F5F5",
    text: "#1A1A1A",
    subtext: "#666666",
    accent: "#6C63FF",
  },
  dark: {
    background: "#121212",
    border: "#2C2C2C",
    card: "#1E1E1E",
    text: "#FFFFFF",
    subtext: "#AAAAAA",
    accent: "#9D97FF",
  },
};

interface ThemeContextType {
  theme: typeof themes.light | typeof themes.dark;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemScheme = useColorScheme();
  const [manualDark, setManualDark] = useState<boolean | null>(null);

  const isDark = manualDark !== null ? manualDark : systemScheme === "dark";
  const theme = isDark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, isDark, setIsDark: setManualDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
