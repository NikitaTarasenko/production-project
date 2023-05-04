import { createContext } from 'react';

export enum Theme{
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
    DARK_RED = 'app_dark_red'
  }
export interface ThemeContextProps{
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
  }

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
