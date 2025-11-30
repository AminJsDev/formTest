import { User, FileText, Grid3x3, ArrowRight, Home } from "lucide-react";
import styles from "../styles/bottomNav.module.css";

const BottomNav = () => {
  return (
    <div className={styles.bottomNav}>
      <div className={`${styles.navItem} ${styles.active}`}>
        <Home className={styles.navIcon} />
      </div>
      <div className={styles.navItem}>
        <ArrowRight className={styles.navIcon} />
      </div>
      <div className={styles.navItem}>
        <Grid3x3 className={styles.navIcon} />
      </div>
      <div className={styles.navItem}>
        <FileText className={styles.navIcon} />
      </div>
      <div className={styles.navItem}>
        <User className={styles.navIcon} />
      </div>
    </div>
  );
};

export default BottomNav;
