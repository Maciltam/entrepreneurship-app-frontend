import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "rgba(255, 255, 255, 0.1)", // Transparent white
      paper: "rgba(255, 255, 255, 0.2)", // Slightly opaque white
    },
    text: {
      primary: "#000000", // Black font
      secondary: "rgba(0, 0, 0, 0.7)",
    },
    divider: "rgba(0, 128, 0, 0.5)", // Green border
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(0, 128, 0, 0.5)", // Green border
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(0, 128, 0, 0.5)", // Green border
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(0, 128, 0, 0.5)", // Green border
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(0, 128, 0, 0.5)", // Green border
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "rgba(0, 0, 0, 0.1)", // Transparent black
      paper: "rgba(0, 0, 0, 0.2)", // Slightly opaque black
    },
    text: {
      primary: "#FFFFFF", // White font
      secondary: "rgba(255, 255, 255, 0.7)",
    },
    divider: "rgba(255, 255, 255, 0.5)", // White border
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(255, 255, 255, 0.5)", // White border
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(255, 255, 255, 0.5)", // White border
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.5)", // White border
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(255, 255, 255, 0.5)", // White border
        },
      },
    },
  },
});

export { darkTheme, lightTheme };
