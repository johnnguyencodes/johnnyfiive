// Refer to this blog post for details and documentation: https://www.mattstobbs.com/remix-dark-mode/#1-naive-dark-mode-switch

import {createContext, useContext, useState} from 'react';
import type {Dispatch, ReactNode, SetStateAction} from 'react';

enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

type ThemeContextType = [Theme | null, Dispatch<SetStateAction<Theme | null>>];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const prefersDarkMQ = '(prefers-color-scheme: dark)';
const getPreferredTheme = () =>
  window.matchMedia(prefersDarkMQ).matches ? Theme.DARK : Theme.LIGHT;

function ThemeProvider({children}: {children: ReactNode}) {
  const [theme, setTheme] = useState<Theme | null>(() => {
    // there's no way for us to know what the theme should be in this context
    // the client will have to figure it out before hydration.
    if (typeof window !== 'object') {
      return null;
    }

    return getPreferredTheme();
  });
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

const clientThemeCode = `
;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersDarkMQ)}).matches
    ? 'dark'
    : 'light';
  const cl = document.documentElement.classList;
  const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
  if (themeAlreadyApplied) {
    // this script shouldn't exist if the theme is already applied!
    console.warn(
      "Hi there, could you let John know you're seeing this message? Thanks!",
    );
  } else {
    cl.add(theme);
  }
})();
`;

function NonFlashOfWrongThemeEls() {
  // It should be double curly brackets but for some reason
  // my markdown doesn't like it ¯\_(ツ)_/¯
  return <script dangerouslySetInnerHTML={{__html: clientThemeCode}} />;
}

const themes: Array<Theme> = Object.values(Theme);

function isTheme(value: unknown): value is Theme {
  return typeof value === 'string' && themes.includes(value as Theme);
}

export {isTheme, NonFlashOfWrongThemeEls, Theme, ThemeProvider, useTheme};
