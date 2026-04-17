import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#0B1D3A" },
    secondary: { main: "#D4AF37" },
    background: { default: "#FFFFFF", paper: "#F7F8FA" },
    text: { primary: "#0B1D3A", secondary: "#6B7280" },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontWeight: 700, fontSize: "2.5rem", lineHeight: 1.2 },
    h2: { fontWeight: 700, fontSize: "2rem" },
    h3: { fontWeight: 600, fontSize: "1.25rem" },
    h6: { fontWeight: 400, fontSize: "1.1rem" },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", fontWeight: 600, borderRadius: 8 },
        containedSecondary: { color: "#0B1D3A" },
      },
    },
  },
});

export default theme;