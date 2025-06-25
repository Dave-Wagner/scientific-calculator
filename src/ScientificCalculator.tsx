import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import * as math from "mathjs";

// Define the props interface
interface ScientificCalculatorProps {
  title?: string;
}

const ScientificCalculator: React.FC<ScientificCalculatorProps> = ({
  title,
}) => {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = math.evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const buttons = [
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
      {/* Conditionally render the title only if the prop is provided */}
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
              color={/[0-9.]/.test(btn) ? "primary" : "secondary"}
              sx={{ height: "100%" }}
              onClick={() => {
                if (btn === "=") {
                  handleCalculate();
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

export default ScientificCalculator;
