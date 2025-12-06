import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#6366f1",
    },
    secondary: {
      main: "#8b5cf6",
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "BYekan+, Arial, sans-serif",
  },
  shape: {
    borderRadius: 16,
  },
});
