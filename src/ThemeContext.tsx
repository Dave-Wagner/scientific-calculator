import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  FC,
  ReactNode,
  useCallback,
} from "react";
import {
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
  createTheme,
} from "@mui/material";

// Define the shape of the context value
type ThemeContextType = {
  toggleTheme: () => void;
  isDarkMode: boolean;
};

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};

// The provider component
export const ThemeContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  // Wrap toggleTheme in useCallback to ensure it's not recreated on every render
  const toggleTheme = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
  }, []); // The dependency array is empty because setIsDarkMode is a stable function

  // Create the theme based on the current mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
        },
      }),
    [isDarkMode]
  );

  // This useMemo is now stable because toggleTheme is stable
  const contextValue = useMemo(
    () => ({ toggleTheme, isDarkMode }),
    [toggleTheme, isDarkMode]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
