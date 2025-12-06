import {
  Paper,
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import {
  Home,
  ArrowForward,
  GridView,
  Description,
  Person,
} from "@mui/icons-material";
import { useState } from "react";

export const BottomNavigation = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
      elevation={3}
    >
      <MuiBottomNavigation
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        showLabels={false}
      >
        <BottomNavigationAction icon={<Home />} />
        <BottomNavigationAction icon={<ArrowForward />} />
        <BottomNavigationAction icon={<GridView />} />
        <BottomNavigationAction icon={<Description />} />
        <BottomNavigationAction icon={<Person />} />
      </MuiBottomNavigation>
    </Paper>
  );
};
