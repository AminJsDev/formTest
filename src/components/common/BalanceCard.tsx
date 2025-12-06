import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  KeyboardArrowDown,
} from "@mui/icons-material";

export const BalanceCard = () => {
  const [hidden, setHidden] = useState(false);
  const formattedBalance = "۲,۲۵۳,۶۲۳ ریال";

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 3,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 1, letterSpacing: 1 }}
      >
        {hidden ? "******" : formattedBalance}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.5,
        }}
      >
        <KeyboardArrowDown fontSize="small" />
        <IconButton size="small" onClick={() => setHidden(!hidden)}>
          {hidden ? (
            <VisibilityOff fontSize="small" />
          ) : (
            <Visibility fontSize="small" />
          )}
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          موجودی
        </Typography>
      </Box>
    </Box>
  );
};
