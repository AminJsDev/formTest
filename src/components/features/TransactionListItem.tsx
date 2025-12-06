import { Box, Paper, Typography, Avatar } from "@mui/material";
import { ShoppingCart, Language, Inventory } from "@mui/icons-material";
import { Transaction } from "../../types/transaction";

interface TransactionListItemProps {
  transaction: Transaction;
}

export const TransactionListItem = ({
  transaction,
}: TransactionListItemProps) => {
  const getIcon = () => {
    switch (transaction.icon) {
      case "shopping":
        return <ShoppingCart />;
      case "globe":
        return <Language />;
      case "package":
        return <Inventory />;
      default:
        return <ShoppingCart />;
    }
  };

  return (
    <Paper
      elevation={transaction.highlighted ? 2 : 0}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 2,
        mb: 1.5,
        bgcolor: transaction.highlighted ? "primary.light" : "background.paper",
        borderRadius: 3,
      }}
    >
      <Avatar
        sx={{
          bgcolor: transaction.highlighted ? "primary.main" : "grey.200",
          color: transaction.highlighted ? "white" : "text.secondary",
        }}
      >
        {getIcon()}
      </Avatar>

      <Box sx={{ flex: 1 }}>
        <Typography variant="body1" fontWeight="medium">
          {transaction.type}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {transaction.date}
        </Typography>
      </Box>

      <Typography variant="body1" fontWeight="bold">
        {transaction.amount}
      </Typography>
    </Paper>
  );
};
