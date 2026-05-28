import { createContext, useContext } from 'react';

export type ThemeName = 'editorial-warm' | 'dark';

export interface ThemeContextValue {
  theme: ThemeName;
  toggle: () => void;
  setTheme: (t: ThemeName) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
