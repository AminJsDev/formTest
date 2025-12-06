import { useRef } from "react";
import { Box, Paper } from "@mui/material";
import { useBottomSheet } from "../../hooks/useBottomSheet";
import { Transaction } from "../../types/transaction";
import { TransactionList } from "./TransactionList";

interface TransactionsBottomSheetProps {
  transactions: Transaction[];
}

export const TransactionsBottomSheet = ({
  transactions,
}: TransactionsBottomSheetProps) => {
  const handleRef = useRef<HTMLDivElement>(null);
  const { expanded, setExpanded } = useBottomSheet(handleRef);

  return (
    <Paper
      elevation={8}
      sx={{
        position: "fixed",
        bottom: 56,
        left: 0,
        right: 0,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        transition: "transform 0.3s ease-out",
        transform: expanded
          ? "translateY(0)"
          : "translateY(calc(100% - 120px))",
        height: "calc(100vh - 300px)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        ref={handleRef}
        onClick={() => setExpanded(!expanded)}
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 1.5,
          cursor: "pointer",
          "&:active": {
            bgcolor: "action.hover",
          },
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 4,
            bgcolor: "grey.300",
            borderRadius: 2,
          }}
        />
      </Box>

      <Box sx={{ flex: 1, overflowY: "auto", pb: 2 }}>
        <TransactionList transactions={transactions} />
      </Box>
    </Paper>
  );
};
