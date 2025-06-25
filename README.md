# MUI Themed Scientific Calculator

A flexible, theme-aware scientific calculator component for React, built with TypeScript and Material-UI (MUI).

This component is designed to be highly reusable. It can operate using a global MUI theme (respecting light/dark mode) or be customized with its own component-scoped theme from a list of over 15 pre-built color schemes.

Demo available at: <https://dave-wagner.github.io/scientific-calculator/>

## Features

- **React & MUI v5:** Built with modern, stable libraries.

- **TypeScript:** Fully typed for a better developer experience and fewer bugs.

- **Global & Scoped Theming:** Inherits themes from a parent ThemeProvider or uses its own via a simple prop.

- **Light & Dark Mode Aware:** Automatically adapts its colors to the current mode (light or dark).

- **16+ Pre-built Themes:** Includes popular color schemes like Nord, Dracula, Solarized, and more.

- **Customizable Title:** The title can be changed or omitted entirely.

- **MIT Licensed:** Free to use in any project.

## Installation

Clone the repository and install the dependencies using npm or yarn.

```bash
git clone https://github.com/dave-wagner/scientific-calculator.git
cd scientific-calculator
npm install
```

```bash
npm start
```

## How to Use

To use the calculator in your own project, you need to ensure your application has a ThemeContextProvider to manage light/dark mode, and then you can import and use the ScientificCalculator component.

### 1. Set up the Theme Context

Your application should have a theme context that provides a basic MUI theme and a way to toggle light/dark mode. The included ThemeContext.tsx is a great starting point.

Wrap your application's root with the ThemeContextProvider.

#### index.tsx or App.tsx

```jsx
import React from 'react';
import App from './App';
import { ThemeContextProvider } from './components/ThemeContext';

// Your root render function
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
```

### 2. Use the Component

Import the ScientificCalculator component and use it anywhere within your app.

#### Basic Usage (Inherits Global Theme)

By default, the calculator will use the theme provided by ThemeContextProvider.

```jsx
import ScientificCalculator from './components/ScientificCalculator';

function MyPage() {
  return <ScientificCalculator />;
}
```

#### Adding a Title

Use the title prop to display a title.

```jsx
<ScientificCalculator title="My Calculator" />
```

#### Using a Component-Scoped Theme

Pass the themeName prop to apply one of the pre-built themes. This theme will still respect the global light/dark mode setting.

```jsx
import ScientificCalculator from './components/ScientificCalculator';
import { ThemeName } from './components/themes'; // Import the type

function MyPage() {
  const selectedTheme: ThemeName = 'nord';

  return (
    <ScientificCalculator 
      title="Nord Theme Calculator" 
      themeName={selectedTheme} 
    />
  );
}
```

### ThemeName Type

The themeName prop must be one of the following string literals:

```ts
type ThemeName = 
  | 'oceanic' | 'sunset' | 'forest' | 'nord' | 'dracula' | 'solarized' 
  | 'gruvbox' | 'monokai' | 'tokyoNight' | 'rosePine' | 'eInk' 
  | 'cyberpunk' | 'pastel' | 'mocha' | 'mintChocolate' | 'strawberryDaiquiri';
```

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Dave-Wagner/scientific-calculator/issues).

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Dave-Wagner/scientific-calculator/blob/main/LICENSE) file for details.
