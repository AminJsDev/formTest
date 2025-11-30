import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import BalanceSection from "../components/BalanceSection";
import ActionButtons from "../components/ActionButtons";
import TransactionItem from "../components/TransactionItem";
import BottomNav from "../components/BottomNav";
import styles from "../styles/homepage.module.css";

const HomePage = () => {
  const [expanded, setExpanded] = useState(false);
  const transactionsPanelRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  const transactions = [
    {
      amount: "۶۰۰,۰۰۰ ریال",
      type: "خرید از فروشگاه",
      date: "۲۰:۵۰ یکشنبه، ۲۵ آبان ۱۴۰۴",
      icon: "shopping" as const,
      highlighted: false,
    },
    {
      amount: "۹۶۰,۰۰۰ ریال",
      type: "خرید اینترنتی",
      date: "١١:٥٩ یکشنبه، ۲۵ آبان ۱۴۰۴",
      icon: "globe" as const,
      highlighted: false,
    },
    {
      amount: "۳,۵۰۰,۰۰۰ ریال",
      type: "دریافت از باکس",
      date: "۱۱:۰۹ یکشنبه، ۲۵ آبان ۱۴۰۴",
      icon: "package" as const,
      highlighted: true,
    },
    {
      amount: "۸۹۰,۰۰۰ ریال",
      type: "خرید اینترنتی",
      date: "۱۹:۵۰ شنبه، ۲۴ آبان ۱۴۰۴",
      icon: "globe" as const,
      highlighted: false,
    },
    {
      amount: "۴۰۰,۰۰۰ ریال",
      type: "خرید از فروشگاه",
      date: "۲۱:۵۱ جمعه، ۲۳ آبان ۱۴۰۴",
      icon: "shopping" as const,
      highlighted: false,
    },
    {
      amount: "۱,۰۰۰,۰۰۰ ریال",
      type: "خرید اینترنتی",
      date: "۱۵:۳۰ پنج‌شنبه، ۲۲ آبان ۱۴۰۴",
      icon: "globe" as const,
      highlighted: false,
    },
  ];

  const handleHandleClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const handle = sheetRef.current?.querySelector(`.${styles.handleBar}`);
    if (!handle) return;

    let startY = 0;
    let isDragging = false;

    const handleStart = (e: TouchEvent | MouseEvent) => {
      isDragging = true;
      startY = "touches" in e ? e.touches[0].clientY : e.clientY;
      e.preventDefault();
    };

    const handleMove = (e: TouchEvent | MouseEvent) => {
      if (!isDragging) return;
      const currentY = "touches" in e ? e.touches[0].clientY : e.clientY;
      const deltaY = startY - currentY;

      // If dragging up more than 50px, expand
      if (deltaY > 50 && !expanded) {
        setExpanded(true);
        isDragging = false;
      }
      // If dragging down more than 50px, collapse
      if (deltaY < -50 && expanded) {
        setExpanded(false);
        isDragging = false;
      }
    };

    const handleEnd = () => {
      isDragging = false;
    };

    handle.addEventListener("touchstart", handleStart as EventListener);
    handle.addEventListener("touchmove", handleMove as EventListener);
    handle.addEventListener("touchend", handleEnd);
    handle.addEventListener("mousedown", handleStart as EventListener);
    document.addEventListener("mousemove", handleMove as EventListener);
    document.addEventListener("mouseup", handleEnd);

    return () => {
      handle.removeEventListener("touchstart", handleStart as EventListener);
      handle.removeEventListener("touchmove", handleMove as EventListener);
      handle.removeEventListener("touchend", handleEnd);
      handle.removeEventListener("mousedown", handleStart as EventListener);
      document.removeEventListener("mousemove", handleMove as EventListener);
      document.removeEventListener("mouseup", handleEnd);
    };
  }, [expanded]);

  return (
    <div className={styles.homePage}>
      <div className={styles.headerSection}>
        <Header />
        <BalanceSection />
        <ActionButtons />
      </div>
      <div className={styles.bottomSheetWrapper}>
        <div
          ref={sheetRef}
          className={`${styles.transactionsPanel} ${
            expanded ? styles.expanded : ""
          }`}
        >
          <div className={styles.handleBar} onClick={handleHandleClick}></div>
          <div
            ref={transactionsPanelRef}
            className={styles.transactionsContent}
          >
            {transactions.map((transaction, index) => (
              <TransactionItem
                key={index}
                amount={transaction.amount}
                type={transaction.type}
                date={transaction.date}
                icon={transaction.icon}
                highlighted={transaction.highlighted}
              />
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default HomePage;
