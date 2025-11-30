import { useState } from "react";
import { Eye, EyeOff, ChevronDown } from "lucide-react";
import styles from "../styles/balanceSection.module.css";

const BalanceSection = () => {
  const [hidden, setHidden] = useState(false);
  const formattedBalance = "۲,۲۵۳,۶۲۳ ریال";

  const handleEyeClick = () => {
    setHidden(!hidden);
  };

  return (
    <div className={styles.balanceSection}>
      <div className={styles.balanceAmount}>
        {hidden ? "******" : formattedBalance}
      </div>
      <div className={styles.balanceLabel}>
        <span>موجودی</span>
        {hidden ? (
          <EyeOff className={styles.eyeIcon} onClick={handleEyeClick} />
        ) : (
          <Eye className={styles.eyeIcon} onClick={handleEyeClick} />
        )}
        <ChevronDown className={styles.chevronIcon} />
      </div>
    </div>
  );
};

export default BalanceSection;
