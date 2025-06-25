import React from "react";
import { Container, Button, Box, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ScientificCalculator from "./ScientificCalculator";
import { useThemeContext } from "./ThemeContext";

function App() {
  const { toggleTheme, isDarkMode } = useThemeContext();

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
        <Button variant="outlined" onClick={toggleTheme}>
          {isDarkMode ? (
            <Brightness7Icon sx={{ mr: 1 }} />
          ) : (
            <Brightness4Icon sx={{ mr: 1 }} />
          )}
          Toggle Theme
        </Button>
      </Box>

      <Typography variant="h5" gutterBottom>
        Default Themed Calculator
      </Typography>
      <ScientificCalculator title="Global Theme" />

      <Box sx={{ my: 5 }} />

      <Typography variant="h5" gutterBottom>
        Component-Scoped "Oceanic" Theme
      </Typography>
      <ScientificCalculator title="Oceanic Theme" themeName="oceanic" />

      <Box sx={{ my: 5 }} />

      <Typography variant="h5" gutterBottom>
        Component-Scoped "Sunset" Theme
      </Typography>
      <ScientificCalculator title="Sunset Theme" themeName="sunset" />

      <Box sx={{ my: 5 }} />

      <Typography variant="h5" gutterBottom>
        Component-Scoped "Forest" Theme
      </Typography>
      <ScientificCalculator title="Forest Theme" themeName="forest" />
    </Container>
  );
}

export default App;
