import React, { useState, useMemo } from "react";
import {
  Button,
  Grid,
  Paper,
  Box,
  Typography,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
import * as math from "mathjs";
import { ThemeName, themes } from "./themes";

// Define the props interface with the new callback
interface ScientificCalculatorProps {
  title?: string;
  themeName?: ThemeName;
  onCalculate?: (result: string, expression: string) => void;
}

const ScientificCalculator: React.FC<ScientificCalculatorProps> = ({
  title,
  themeName,
  onCalculate, // Destructure the new prop
}) => {
  const [expression, setExpression] = useState("");
  const [display, setDisplay] = useState("0");
  const [isResult, setIsResult] = useState(false);

  const globalTheme = useTheme();

  const calculatorTheme = useMemo(() => {
    if (!themeName) return null;
    const mode = globalTheme.palette.mode;
    const selectedPalette = themes[themeName][mode];
    return createTheme({ palette: { mode, ...selectedPalette } });
  }, [themeName, globalTheme.palette.mode]);

  // --- Logic Functions ---

  const handleClear = () => {
    setExpression("");
    setDisplay("0");
    setIsResult(false);
  };

  const handleDelete = () => {
    if (isResult) return;
    setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };

  const handleNumberClick = (value: string) => {
    if (isResult) {
      setExpression("");
      setDisplay(value);
      setIsResult(false);
      return;
    }
    if (value === "." && display.includes(".")) return;
    setDisplay((prev) =>
      prev === "0" && value !== "." ? value : prev + value
    );
  };

  const handleOperatorClick = (value: string) => {
    setExpression((prev) => prev + display + " " + value + " ");
    setDisplay("0");
    setIsResult(false);
  };

  const handleCalculate = () => {
    // Define the expression early to use it in both try/catch for the callback
    const finalExpression = expression + display;
    try {
      const result = math.evaluate(finalExpression).toString();
      setDisplay(result);
      setExpression(finalExpression + " =");
      setIsResult(true);

      // Call the callback on success
      if (onCalculate) {
        onCalculate(result, finalExpression);
      }
    } catch (error) {
      const errorMessage = "Error";
      setDisplay(errorMessage);
      setExpression("");
      setIsResult(true);

      // Call the callback on error, providing the failed expression
      if (onCalculate) {
        onCalculate(errorMessage, finalExpression);
      }
    }
  };

  // --- UI Component ---

  const CalculatorContent = () => {
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

        <Box
          sx={{
            mb: 2,
            p: 2,
            bgcolor: "background.default",
            borderRadius: 1,
            textAlign: "right",
            minHeight: "4em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary" noWrap>
            {expression || " "}
          </Typography>
          <Typography variant="h4" color="text.primary">
            {display}
          </Typography>
        </Box>

        <Grid container spacing={1}>
          {buttons.map((btn) => (
            <Grid item xs={3} key={btn}>
              <Button
                fullWidth
                variant="contained"
                color={
                  btn === "DEL"
                    ? "warning"
                    : btn === "="
                    ? "success"
                    : /[0-9.]/.test(btn)
                    ? "primary"
                    : "secondary"
                }
                sx={{ height: "100%" }}
                onClick={() => {
                  if (btn === "=") handleCalculate();
                  else if (btn === "DEL") handleDelete();
                  else if (/[0-9.]/.test(btn)) handleNumberClick(btn);
                  else handleOperatorClick(btn);
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
