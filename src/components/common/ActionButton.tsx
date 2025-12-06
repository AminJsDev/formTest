import { Box, Fab, Typography } from "@mui/material";
import { ReactNode } from "react";

interface ActionButtonProps {
  icon: ReactNode;
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

export const ActionButton = ({
  icon,
  label,
  primary = false,
  onClick,
}: ActionButtonProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Fab
        color={primary ? "primary" : "default"}
        onClick={onClick}
        sx={{
          bgcolor: primary ? "primary.main" : "background.paper",
          boxShadow: 2,
        }}
      >
        {icon}
      </Fab>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
    </Box>
  );
};
