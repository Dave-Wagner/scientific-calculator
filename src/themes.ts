import { ThemeOptions } from '@mui/material/styles';

export const availableThemes = ['oceanic', 'sunset', 'forest'] as const;
export type ThemeName = typeof availableThemes[number];

const oceanic = {
    light: {
        primary: { main: '#0077B6' },
        secondary: { main: '#039BE5' },
        background: { paper: '#EBF4F8', default: '#FFFFFF' },
        text: { primary: '#013A63', secondary: '#025488' }
    },
    dark: {
        primary: { main: '#90E0EF' },
        secondary: { main: '#48CAE4' },
        background: { paper: '#012A4A', default: '#00121E' },
        text: { primary: '#FFFFFF', secondary: '#ADE8F4' }
    }
};

const sunset = {
    light: {
        primary: { main: '#F4A261' },
        secondary: { main: '#E76F51' },
        background: { paper: '#FFF6F2', default: '#FFFFFF' },
        text: { primary: '#264653', secondary: '#2A9D8F' }
    },
    dark: {
        primary: { main: '#E9C46A' },
        secondary: { main: '#F4A261' },
        background: { paper: '#2A4048', default: '#263238' },
        text: { primary: '#FFFFFF', secondary: '#E9C46A' }
    }
};

const forest = {
    light: {
        primary: { main: '#588157' },
        secondary: { main: '#3A5A40' },
        background: { paper: '#F1F5F0', default: '#FFFFFF' },
        text: { primary: '#344E41', secondary: '#588157' }
    },
    dark: {
        primary: { main: '#A3B18A' },
        secondary: { main: '#588157' },
        background: { paper: '#1A2E19', default: '#142113' },
        text: { primary: '#FFFFFF', secondary: '#DAD7CD' }
    }
};

export const themes: Record<ThemeName, { light: ThemeOptions['palette'], dark: ThemeOptions['palette'] }> = {
    oceanic,
    sunset,
    forest
};