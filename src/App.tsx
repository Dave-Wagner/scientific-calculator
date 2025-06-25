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
        Calculator with Custom Title:
      </Typography>
      {/* Use the component with a custom title */}
      <ScientificCalculator title="My Awesome Calculator" />

      <Box sx={{ my: 5 }} />

      <Typography variant="h5" gutterBottom>
        Calculator with Title Omitted:
      </Typography>
      {/* Use the component without the title prop */}
      <ScientificCalculator />
    </Container>
  );
}

export default App;
