import type { ThemeDefinition } from "vuetify";

// String that represents the name of the theme I am using
export const LIGHT_THEME = "light";
// Light mode theme
export const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: twColors.indigo[600],
    secondary: twColors.purple[600],
    error: twColors.red[500],
    info: twColors.blue[500],
    success: twColors.emerald[500],
    warning: twColors.amber[500],
    'brand-1': '#ff8047',
    'brand-2': '#b25931',
    'neutrals-1': '#FFFFFF',
    'neutrals-2': '#000000',
    'neutrals-3': '#A1AFC5',
    'neutrals-4': '#dd403f',
    'neutrals-5': '#000000',
    'neutrals-6': '#2D2D4D',
    'surface-1': '#F8FAFD',
    'surface-2': '#F5F5F5',
    'surface-3': '#3A3C56',
    danger: '#B8433D',
  },
};

// String that represents the name of the dark theme I am using
export const DARK_THEME = "dark";
// Dark mode theme
export const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#0a0c10',
    surface: twColors.slate[900],
    primary: twColors.indigo[500],
    secondary: twColors.purple[500],
    error: twColors.red[500],
    info: twColors.blue[500],
    success: twColors.emerald[500],
    warning: twColors.amber[500],
    'brand-1': '#ff8047',
    'brand-2': '#b25931',
    'neutrals-1': '#000000',
    'neutrals-2': '#FFFFFF',
    'neutrals-3': '#686B89',
    'neutrals-4': '#dd403f',
    'neutrals-5': '#FFFFFF',
    'neutrals-6': '#E7E9F6',
    'surface-1': '#131320',
    'surface-2': '#1E1E2F',
    'surface-3': '#2A2A40',
    danger: '#FF5A54',
  },
};
