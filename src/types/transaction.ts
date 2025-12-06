export type TransactionIcon = "shopping" | "globe" | "package";

export interface Transaction {
  id: string;
  amount: string;
  type: string;
  date: string;
  icon: TransactionIcon;
  highlighted?: boolean;
}
