import { ShoppingCart, Globe, Package } from "lucide-react";
import styles from "../styles/transactionItem.module.css";

interface TransactionItemProps {
  amount: string;
  type: string;
  date: string;
  icon: "shopping" | "globe" | "package";
  highlighted?: boolean;
}

const TransactionItem = ({
  amount,
  type,
  date,
  icon,
  highlighted = false,
}: TransactionItemProps) => {
  const getIcon = () => {
    switch (icon) {
      case "shopping":
        return <ShoppingCart className={styles.transactionIcon} />;
      case "globe":
        return <Globe className={styles.transactionIcon} />;
      case "package":
        return <Package className={styles.transactionIcon} />;
      default:
        return <ShoppingCart className={styles.transactionIcon} />;
    }
  };

  return (
    <div
      className={`${styles.transactionItem} ${
        highlighted ? styles.highlighted : ""
      }`}
    >
      <div className={styles.transactionIconWrapper}>{getIcon()}</div>
      <div className={styles.transactionContent}>
        <div className={styles.transactionInfo}>
          <div className={styles.transactionType}>{type}</div>
          <div className={styles.transactionDate}>{date}</div>
        </div>
      </div>
      <div className={styles.transactionAmount}>{amount}</div>
    </div>
  );
};

export default TransactionItem;
