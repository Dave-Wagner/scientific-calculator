import { ThemeOptions } from '@mui/material/styles';

// Updated list of all available themes
export const availableThemes = [
    'oceanic', 'sunset', 'forest', 'nord', 'dracula', 'solarized',
    'gruvbox', 'monokai', 'tokyoNight', 'rosePine', 'eInk',
    'cyberpunk', 'pastel', 'mocha', 'mintChocolate', 'strawberryDaiquiri'
] as const;

export type ThemeName = typeof availableThemes[number];

// Type definition for a theme's light and dark palettes
type ThemePalette = { light: ThemeOptions['palette'], dark: ThemeOptions['palette'] };

const themes: Record<ThemeName, ThemePalette> = {
    // Original Themes
    oceanic: {
        light: { primary: { main: '#0077B6' }, secondary: { main: '#039BE5' }, background: { paper: '#EBF4F8' }, text: { primary: '#013A63' } },
        dark: { primary: { main: '#90E0EF' }, secondary: { main: '#48CAE4' }, background: { paper: '#012A4A' }, text: { primary: '#FFFFFF' } }
    },
    sunset: {
        light: { primary: { main: '#F4A261' }, secondary: { main: '#E76F51' }, background: { paper: '#FFF6F2' }, text: { primary: '#264653' } },
        dark: { primary: { main: '#E9C46A' }, secondary: { main: '#F4A261' }, background: { paper: '#2A4048' }, text: { primary: '#FFFFFF' } }
    },
    forest: {
        light: { primary: { main: '#588157' }, secondary: { main: '#3A5A40' }, background: { paper: '#F1F5F0' }, text: { primary: '#344E41' } },
        dark: { primary: { main: '#A3B18A' }, secondary: { main: '#588157' }, background: { paper: '#1A2E19' }, text: { primary: '#FFFFFF' } }
    },
    // New Themes
    nord: {
        light: { primary: { main: '#5E81AC' }, secondary: { main: '#81A1C1' }, background: { paper: '#ECEFF4' }, text: { primary: '#2E3440' } },
        dark: { primary: { main: '#88C0D0' }, secondary: { main: '#81A1C1' }, background: { paper: '#3B4252' }, text: { primary: '#ECEFF4' } }
    },
    dracula: {
        light: { primary: { main: '#6272A4' }, secondary: { main: '#8BE9FD' }, background: { paper: '#F8F8F2' }, text: { primary: '#282A36' } },
        dark: { primary: { main: '#BD93F9' }, secondary: { main: '#FF79C7' }, background: { paper: '#282A36' }, text: { primary: '#F8F8F2' } }
    },
    solarized: {
        light: { primary: { main: '#268BD2' }, secondary: { main: '#2AA198' }, background: { paper: '#FDF6E3' }, text: { primary: '#657B83' } },
        dark: { primary: { main: '#268BD2' }, secondary: { main: '#2AA198' }, background: { paper: '#002B36' }, text: { primary: '#839496' } }
    },
    gruvbox: {
        light: { primary: { main: '#458588' }, secondary: { main: '#B16286' }, background: { paper: '#FBF1C7' }, text: { primary: '#3C3836' } },
        dark: { primary: { main: '#83A598' }, secondary: { main: '#D3869B' }, background: { paper: '#282828' }, text: { primary: '#EBDBB2' } }
    },
    monokai: {
        light: { primary: { main: '#AE81FF' }, secondary: { main: '#66D9EF' }, background: { paper: '#F9F8F5' }, text: { primary: '#272822' } },
        dark: { primary: { main: '#AE81FF' }, secondary: { main: '#A6E22E' }, background: { paper: '#272822' }, text: { primary: '#F8F8F2' } }
    },
    tokyoNight: {
        light: { primary: { main: '#7AA2F7' }, secondary: { main: '#BB9AF7' }, background: { paper: '#D5D6E0' }, text: { primary: '#343B58' } },
        dark: { primary: { main: '#7AA2F7' }, secondary: { main: '#BB9AF7' }, background: { paper: '#1A1B26' }, text: { primary: '#A9B1D6' } }
    },
    rosePine: {
        light: { primary: { main: '#907AA9' }, secondary: { main: '#EA9A97' }, background: { paper: '#FAF4ED' }, text: { primary: '#575279' } },
        dark: { primary: { main: '#C4A7E7' }, secondary: { main: '#EBBCBA' }, background: { paper: '#191724' }, text: { primary: '#E0DEF4' } }
    },
    eInk: {
        light: { primary: { main: '#000000' }, secondary: { main: '#555555' }, background: { paper: '#FFFFFF' }, text: { primary: '#000000' } },
        dark: { primary: { main: '#FFFFFF' }, secondary: { main: '#AAAAAA' }, background: { paper: '#000000' }, text: { primary: '#FFFFFF' } }
    },
    cyberpunk: {
        light: { primary: { main: '#00BFFF' }, secondary: { main: '#FF00FF' }, background: { paper: '#F0FFFF' }, text: { primary: '#081B33' } },
        dark: { primary: { main: '#00BFFF' }, secondary: { main: '#FF00FF' }, background: { paper: '#0A192F' }, text: { primary: '#F0FFFF' } }
    },
    pastel: {
        light: { primary: { main: '#B2EBF2' }, secondary: { main: '#FFCDD2' }, background: { paper: '#F8F9FA' }, text: { primary: '#616161' } },
        dark: { primary: { main: '#80DEEA' }, secondary: { main: '#EF9A9A' }, background: { paper: '#343A40' }, text: { primary: '#F8F9FA' } }
    },
    mocha: {
        light: { primary: { main: '#8D6E63' }, secondary: { main: '#BCAAA4' }, background: { paper: '#F5F5F5' }, text: { primary: '#4E342E' } },
        dark: { primary: { main: '#A1887F' }, secondary: { main: '#D7CCC8' }, background: { paper: '#3E2723' }, text: { primary: '#EFEBE9' } }
    },
    mintChocolate: {
        light: { primary: { main: '#A5D6A7' }, secondary: { main: '#8D6E63' }, background: { paper: '#F1F8E9' }, text: { primary: '#3E2723' } },
        dark: { primary: { main: '#81C784' }, secondary: { main: '#BCAAA4' }, background: { paper: '#263238' }, text: { primary: '#E8F5E9' } }
    },
    strawberryDaiquiri: {
        light: { primary: { main: '#F06292' }, secondary: { main: '#FF8A80' }, background: { paper: '#FFF0F5' }, text: { primary: '#880E4F' } },
        dark: { primary: { main: '#EC407A' }, secondary: { main: '#FF5252' }, background: { paper: '#311B21' }, text: { primary: '#FCE4EC' } }
    }
};

export { themes };