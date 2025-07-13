import React, { useState } from "react";
import {
  Container,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Paper,
  Typography,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ScientificCalculator from "./ScientificCalculator";
import { useThemeContext } from "./ThemeContext";
import { availableThemes, ThemeName } from "./themes";

function App() {
  const { toggleTheme, isDarkMode } = useThemeContext();
  const [selectedTheme, setSelectedTheme] = useState<ThemeName | "default">(
    "default"
  );
  // New state to store the last calculation from the callback
  const [lastCalculation, setLastCalculation] = useState<{
    result: string;
    expression: string;
  } | null>(null);

  const handleThemeChange = (
    event: SelectChangeEvent<typeof selectedTheme>
  ) => {
    setSelectedTheme(event.target.value as ThemeName | "default");
  };

  // The callback function that will be passed to the calculator
  const handleCalculationResult = (result: string, expression: string) => {
    console.log("Calculation received:", { result, expression });
    setLastCalculation({ result, expression });
  };

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
        themeName={selectedTheme === "default" ? undefined : selectedTheme}
        // Pass the callback function as a prop
        onCalculate={handleCalculationResult}
      />

      {/* New section to display the captured result */}
      <Paper sx={{ mt: 4, p: 2, bgcolor: "background.default" }}>
        <Typography variant="h6">Parent Component State</Typography>
        <Typography variant="body1">
          Last calculation captured by parent:
        </Typography>
        {lastCalculation ? (
          <Typography variant="body2" component="pre" sx={{ mt: 1 }}>
            {`${lastCalculation.expression} = ${lastCalculation.result}`}
          </Typography>
        ) : (
          <Typography variant="body2" sx={{ mt: 1 }}>
            No calculation performed yet.
          </Typography>
        )}
      </Paper>
    </Container>
  );
}

export default App;
