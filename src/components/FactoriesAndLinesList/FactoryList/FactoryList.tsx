import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import styles from "../FactoriesAndLinesList.module.scss";
import styles from "../FactoryList/FactoryList.module.scss";
import { ChevronDown, Orbit } from "lucide-react";

interface FactoryListProps {
  availableFactories: string[];
}

function FactoryList({ availableFactories }: FactoryListProps) {
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

  const handleChangeFactory = (value: string) => {
    closeMenu();
    if (value === "All Factories") {
      navigate(`/dashboard`);
    } else {
      navigate(`/factory/${value.split(" ").join("-")}`);
    }
  };

  // This perfectly syncs React's unmount with your SCSS animation duration
  const handleAnimationEnd = () => {
    if (isClosing) {
      setIsMounted(false);
      setIsClosing(false);
    }
  };

  const currentValue =
    pathname.split("/")[1] === "factory"
      ? pathname.split("/")[2]?.replace(/-/g, " ") || "All Factories"
      : "All Factories";

  return (
    <div className={styles.dropdownWrapper} ref={wrapperRef}>
      <button
        type="button"
        className={`
          ${styles.triggerButton} 
          ${isMounted && !isClosing ? styles.isOpen : ""} 
         
        `.trim()}
        onClick={toggleMenu}
      >
        <div className={styles.contentActive}>
          <Orbit className={styles.buttonIcon} size={18} />
          <span className={styles.buttonText}> {currentValue}</span>
          <ChevronDown className={styles.chevronIcon} />
        </div>
      </button>

      {isMounted && (
        <ul
          className={`${styles.dropdownMenu} ${isClosing ? styles.isClosing : ""}`}
          onAnimationEnd={handleAnimationEnd}
        >
          {availableFactories.map((factory) => (
            <li
              key={factory}
              className={`${styles.menuItem} ${factory === currentValue ? styles.active : ""}`}
              onClick={() => handleChangeFactory(factory)}
            >
              {factory}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FactoryList;
