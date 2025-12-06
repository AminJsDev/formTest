import { Box } from "@mui/material";
import { Transaction } from "../../types/transaction";
import { TransactionListItem } from "./TransactionListItem";

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <Box sx={{ px: 2 }}>
      {transactions.map((transaction) => (
        <TransactionListItem key={transaction.id} transaction={transaction} />
      ))}
    </Box>
  );
};
