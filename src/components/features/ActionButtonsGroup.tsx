import { Box } from "@mui/material";
import { Add, BarChart } from "@mui/icons-material";
import { ActionButton } from "../common/ActionButton";

export const ActionButtonsGroup = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 4,
        py: 3,
      }}
    >
      <ActionButton icon={<Add />} label="شارژ حساب" primary />
      <ActionButton icon={<BarChart />} label="گزارش مالی" />
    </Box>
  );
};
