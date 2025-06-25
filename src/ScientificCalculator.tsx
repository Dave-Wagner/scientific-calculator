import React, { useState, useMemo } from "react";
import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
import * as math from "mathjs";
import { ThemeName, themes } from "./themes";

// Define the props interface
interface ScientificCalculatorProps {
  title?: string;
  themeName?: ThemeName;
}

const ScientificCalculator: React.FC<ScientificCalculatorProps> = ({
  title,
  themeName,
}) => {
  const [input, setInput] = useState("");
  const globalTheme = useTheme(); // Hook into the global theme to get light/dark mode

  const calculatorTheme = useMemo(() => {
    if (!themeName) return null; // Return null if no themeName is provided

    const mode = globalTheme.palette.mode;
    const selectedPalette = themes[themeName][mode];

    return createTheme({
      palette: {
        mode,
        ...selectedPalette,
      },
    });
  }, [themeName, globalTheme.palette.mode]);

  const CalculatorContent = () => (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 2,
        maxWidth: 400,
        margin: "auto",
        bgcolor: "background.paper",
      }}
    >
      {title && (
        <Typography variant="h6" sx={{ mb: 2, color: "text.primary" }}>
          {title}
        </Typography>
      )}
      <TextField
        fullWidth
        variant="outlined"
        value={input}
        inputProps={{
          readOnly: true,
          style: { textAlign: "right" },
        }}
        sx={{ mb: 2 }}
      />
      <Grid container spacing={1}>
        {/* ... (rest of the buttons logic, no changes needed here) ... */}
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "=",
          "+",
          "sin(",
          "cos(",
          "tan(",
          "sqrt(",
          "log(",
          "exp(",
          "(",
          ")",
        ].map((btn) => (
          <Grid item xs={3} key={btn}>
            <Button
              fullWidth
              variant="contained"
              color={/[0-9.]/.test(btn) ? "primary" : "secondary"}
              sx={{ height: "100%" }}
              onClick={() => {
                if (btn === "=") handleCalculate();
                else handleClick(btn);
              }}
            >
              {btn}
            </Button>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="error"
            onClick={handleClear}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );

  const handleCalculate = () => {
    try {
      setInput(math.evaluate(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => setInput("");
  const handleClick = (value: string) => setInput((prev) => prev + value);

  // If a custom theme is created, wrap the content in a ThemeProvider.
  // Otherwise, render it directly to use the global theme.
  if (calculatorTheme) {
    return (
      <ThemeProvider theme={calculatorTheme}>
        <CalculatorContent />
      </ThemeProvider>
    );
  }

  return <CalculatorContent />;
};

export default ScientificCalculator;
