import { BarChart3, Plus } from "lucide-react";
import styles from "../styles/actionButtons.module.css";

const ActionButtons = () => {
  return (
    <div className={styles.actionButtons}>
      <div className={`${styles.buttonWrapper} ${styles.primaryWrapper}`}>
        <button className={`${styles.actionButton} ${styles.primaryButton}`}>
          <div className={styles.buttonIcon}>
            <Plus />
          </div>
        </button>
        <span className={styles.buttonLabel}>شارژ حساب</span>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.actionButton}>
          <div className={styles.buttonIcon}>
            <BarChart3 />
          </div>
        </button>
        <span className={styles.buttonLabel}>گزارش مالی</span>
      </div>
    </div>
  );
};

export default ActionButtons;
