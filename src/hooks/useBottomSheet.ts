import { useState, useEffect, RefObject } from "react";

export const useBottomSheet = (handleRef: RefObject<HTMLDivElement>) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handle = handleRef.current;
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

      if (deltaY > 50 && !expanded) {
        setExpanded(true);
        isDragging = false;
      }
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
  }, [expanded, handleRef]);

  return { expanded, setExpanded };
};
