//--------
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import styles from "./LineList.module.scss";

import { ChevronDown, Route } from "lucide-react";

interface LineListProps {
  availableLines: Record<string, string[]>;
}

function LineList({ availableLines }: LineListProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const openMenu = () => {
    setIsMounted(true);
    setIsClosing(false);
  };

  const closeMenu = () => {
    if (isMounted) setIsClosing(true);
  };

  const toggleMenu = () => {
    if (isMounted && !isClosing) closeMenu();
    else openMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMounted]);

  const handleAnimationEnd = () => {
    if (isClosing) {
      setIsMounted(false);
      setIsClosing(false);
    }
  };

  const isLineListDisabled = pathname.split("/")[1] !== "factory";
  const factoryName = isLineListDisabled
    ? "All Factories"
    : pathname.split("/")[2]?.replace(/-/g, " ") || "All Factories";
  const currentLine = isLineListDisabled
    ? ""
    : pathname.split("/")[3]?.replace(/-/g, " ") || "All Lines";

  const myLines = isLineListDisabled
    ? [""]
    : availableLines[factoryName] || ["All Lines"];

  const handleChangeLine = (value: string) => {
    closeMenu();
    const formattedFactoryName = factoryName.split(" ").join("-");

    if (value === "All Lines" || value === "") {
      navigate(`/factory/${formattedFactoryName}`);
    } else {
      const formattedLine = value.split(" ").join("-");
      navigate(`/factory/${formattedFactoryName}/${formattedLine}`);
    }
  };

  return (
    <div className={styles.dropdownWrapper} ref={wrapperRef}>
      <button
        type="button"
        disabled={isLineListDisabled}
        className={`
          ${styles.triggerButton} 
          ${isMounted && !isClosing ? styles.isOpen : ""} 
          ${isLineListDisabled ? styles.contracted : ""}
        `.trim()}
        onClick={toggleMenu}
      >
        {/* Layer 1: Text and Chevron (Visible when active) */}
        <div className={styles.contentActive}>
          <Route size={18} className={styles.routeIcon} color="#fff" />
          <span className={styles.buttonText}>{currentLine}</span>
          <ChevronDown className={styles.chevronIcon} />
        </div>

        {/* Layer 2: Route Icon (Visible when contracted) */}
        <div className={styles.contentContracted}>
          <Route size={18} />
        </div>
      </button>

      {!isLineListDisabled && isMounted && (
        <ul
          className={`${styles.dropdownMenu} ${isClosing ? styles.isClosing : ""}`}
          onAnimationEnd={handleAnimationEnd}
        >
          {myLines.map((line) => (
            <li
              key={line}
              className={`${styles.menuItem} ${styles.lineItemHover}`}
              onClick={() => handleChangeLine(line)}
            >
              {line}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LineList;
