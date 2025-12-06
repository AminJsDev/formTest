import { Box } from "@mui/material";
import { AppHeader } from "../components/layout/AppHeader";
import { BottomNavigation } from "../components/layout/BottomNavigation";
import { BalanceCard } from "../components/common/BalanceCard";
import { ActionButtonsGroup } from "../components/features/ActionButtonsGroup";
import { TransactionsBottomSheet } from "../components/features/TransactionsBottomSheet";
import { Transaction } from "../types/transaction";

const HomePage = () => {
  const transactions: Transaction[] = [
    {
      id: "1",
      amount: "۶۰۰,۰۰۰ ریال",
      type: "خرید از فروشگاه",
      date: "۲۰:۵۰ یکشنبه، ۲۵ آبان ۱۴۰۴",
      icon: "shopping",
      highlighted: false,
    },
    {
      id: "2",
      amount: "۹۶۰,۰۰۰ ریال",
      type: "خرید اینترنتی",
      date: "١١:٥٩ یکشنبه، ۲۵ آبان ۱۴۰۴",
      icon: "globe",
      highlighted: false,
    },
    {
      id: "3",
      amount: "۳,۵۰۰,۰۰۰ ریال",
      type: "دریافت از باکس",
      date: "۱۱:۰۹ یکشنبه، ۲۵ آبان ۱۴۰۴",
      icon: "package",
      highlighted: true,
    },
    {
      id: "4",
      amount: "۸۹۰,۰۰۰ ریال",
      type: "خرید اینترنتی",
      date: "۱۹:۵۰ شنبه، ۲۴ آبان ۱۴۰۴",
      icon: "globe",
      highlighted: false,
    },
    {
      id: "5",
      amount: "۴۰۰,۰۰۰ ریال",
      type: "خرید از فروشگاه",
      date: "۲۱:۵۱ جمعه، ۲۳ آبان ۱۴۰۴",
      icon: "shopping",
      highlighted: false,
    },
    {
      id: "6",
      amount: "۱,۰۰۰,۰۰۰ ریال",
      type: "خرید اینترنتی",
      date: "۱۵:۳۰ پنج‌شنبه، ۲۲ آبان ۱۴۰۴",
      icon: "globe",
      highlighted: false,
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        pb: 7,
      }}
    >
      <AppHeader />
      <BalanceCard />
      <ActionButtonsGroup />
      <TransactionsBottomSheet transactions={transactions} />
      <BottomNavigation />
    </Box>
  );
};

export default HomePage;
