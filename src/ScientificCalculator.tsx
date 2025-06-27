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

  // Memoize the theme creation
  const calculatorTheme = useMemo(() => {
    if (!themeName) return null;

    const mode = globalTheme.palette.mode;
    const selectedPalette = themes[themeName][mode];

    return createTheme({
      palette: {
        mode,
        ...selectedPalette,
      },
    });
  }, [themeName, globalTheme.palette.mode]);

  // --- LOGIC ---
  const handleCalculate = () => {
    try {
      setInput(math.evaluate(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => setInput("");
  const handleClick = (value: string) => setInput((prev) => prev + value);

  // New function for handling backspace
  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // --- UI ---
  const CalculatorContent = () => {
    // Added "DEL" to the button layout
    const buttons = [
      "(",
      ")",
      "log(",
      "DEL",
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
      "exp(", // Added extra button to fill the grid, can be changed later
    ];

    return (
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
          {buttons.map((btn) => (
            <Grid item xs={3} key={btn}>
              <Button
                fullWidth
                variant="contained"
                // Make DEL button a different color to stand out
                color={
                  btn === "DEL"
                    ? "warning"
                    : /[0-9.]/.test(btn)
                    ? "primary"
                    : "secondary"
                }
                sx={{ height: "100%" }}
                onClick={() => {
                  if (btn === "=") {
                    handleCalculate();
                  } else if (btn === "DEL") {
                    handleDelete();
                  } else {
                    handleClick(btn);
                  }
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
  };

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
