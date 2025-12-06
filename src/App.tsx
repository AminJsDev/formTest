import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./theme/theme";
import HomePage from "./pages/HomePage";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ fontFamily: "BYekan+, Arial, sans-serif" }}>
          <HomePage />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
