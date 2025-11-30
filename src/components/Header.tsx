import { HelpCircle, Bell, User, Search } from "lucide-react";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.rightIcons}>
        <Search className={styles.icon} />
        <User className={styles.icon} />
      </div>
      <h1 className={styles.title}>خانه</h1>
      <div className={styles.leftIcons}>
        <Bell className={styles.icon} />
        <HelpCircle className={styles.icon} />
      </div>
    </div>
  );
};

export default Header;
