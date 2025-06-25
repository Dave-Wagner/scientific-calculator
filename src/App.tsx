import React, { useState } from "react";
import {
  Container,
  Button,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ScientificCalculator from "./ScientificCalculator";
import { useThemeContext } from "./ThemeContext";
import { availableThemes, ThemeName } from "./themes"; // Import the theme names

function App() {
  const { toggleTheme, isDarkMode } = useThemeContext();

  // State to hold the currently selected theme name. 'default' is a special value for the global theme.
  const [selectedTheme, setSelectedTheme] = useState<ThemeName | "default">(
    "default"
  );

  // Handler for the dropdown selection change
  const handleThemeChange = (
    event: SelectChangeEvent<typeof selectedTheme>
  ) => {
    setSelectedTheme(event.target.value as ThemeName | "default");
  };

  // Capitalize the first letter of a string for display
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <Container sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          mb: 4,
        }}
      >
        {/* Dropdown for theme selection */}
        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
          <InputLabel id="theme-select-label">Calculator Theme</InputLabel>
          <Select
            labelId="theme-select-label"
            id="theme-select"
            value={selectedTheme}
            label="Calculator Theme"
            onChange={handleThemeChange}
          >
            <MenuItem value="default">
              <em>Default (Global)</em>
            </MenuItem>
            {availableThemes.map((themeName) => (
              <MenuItem key={themeName} value={themeName}>
                {capitalize(themeName)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Button to toggle light/dark mode */}
        <Button variant="outlined" onClick={toggleTheme}>
          {isDarkMode ? (
            <Brightness7Icon sx={{ mr: 1 }} />
          ) : (
            <Brightness4Icon sx={{ mr: 1 }} />
          )}
          Toggle Light/Dark Mode
        </Button>
      </Box>

      <ScientificCalculator
        title={
          selectedTheme === "default"
            ? "Global Theme"
            : `${capitalize(selectedTheme)} Theme`
        }
        // Pass the selected theme name, or undefined if 'default' is chosen
        themeName={selectedTheme === "default" ? undefined : selectedTheme}
      />
    </Container>
  );
}

export default App;
