// import { useState, useRef, useEffect } from "react";
// import styles from "./TypeFilter.module.scss";

// const tabs = ["SKU", "Production"];

// const TypeFilter = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const tabRefs = useRef<HTMLElement[]>([]);
//   const [indicatorStyle, setIndicatorStyle] = useState({
//     left: 0,
//     width: 0,
//   });

//   // When the RangePicker tab is clicked

//   useEffect(() => {
//     const currentTab = tabRefs.current[activeIndex];

//     if (currentTab) {
//       setIndicatorStyle({
//         left: currentTab.offsetLeft,
//         width: currentTab.offsetWidth,
//       });
//     }
//   }, [activeIndex]);

//   return (
//     <div className={styles.tabBar}>
//       <div className={styles.indicatorTypeIndicator} style={indicatorStyle} />
//       {tabs.map((tab, index) => (
//         <div
//           key={index}
//           className={`${styles.tab} ${styles.tabType} ${index === activeIndex ? styles.active : ""}`}
//           onClick={() => setActiveIndex(index)}
//           ref={(el: HTMLElement | null) => {
//             if (el) {
//               tabRefs.current[index] = el;
//             }
//           }}
//         >
//           {tab}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TypeFilter;
//-------------------------
//-------------------------
//-------------------------
//-------------------------
import { useState, useRef, useEffect } from "react";
import styles from "./TypeFilter.module.scss";
import { useSearchParams } from "react-router-dom";

interface TypeFilterProps {
  onChange?: (start: Date | null, end: Date | null, preset?: string) => void;
}

export default function TypeFilter({}: TypeFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | HTMLDivElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentTab = tabRefs.current[activeIndex];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeIndex, isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePresetClick = (tabName: string, index: number) => {
    setActiveIndex(index);
    setIsOpen(false);

    if (tabName === "sku") {
      setSearchParams({ search_by: "sku" });
    } else if (tabName === "production") {
      setSearchParams({ search_by: "production" });
    } else {
      return;
    }
  };

  return (
    <div className={styles.pickerWrapper} ref={containerRef}>
      <div className={styles.tabsContainer}>
        <div className={styles.indicator} style={indicatorStyle} />

        <button
          type="button"
          className={`${styles.tabItem} ${styles.tabItem_One} ${activeIndex === 0 ? styles.activeTab : ""}`}
          onClick={() => handlePresetClick("sku", 0)}
          ref={(el) => {
            tabRefs.current[0] = el;
          }}
        >
          SKU
        </button>
        <button
          type="button"
          className={`${styles.tabItem} ${styles.tabItem_Two} ${activeIndex === 1 ? styles.activeTab : ""}`}
          onClick={() => handlePresetClick("production", 1)}
          ref={(el) => {
            tabRefs.current[1] = el;
          }}
        >
          Production
        </button>
      </div>
    </div>
  );
}
