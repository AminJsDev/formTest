import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import {
  Search,
  Person,
  Notifications,
  HelpOutline,
} from "@mui/icons-material";

export const AppHeader = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "transparent",
        color: "text.primary",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton size="small">
            <Search />
          </IconButton>
          <IconButton size="small">
            <Person />
          </IconButton>
        </Box>

        <Typography variant="h6" component="h1" fontWeight="bold">
          خانه
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton size="small">
            <Notifications />
          </IconButton>
          <IconButton size="small">
            <HelpOutline />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
