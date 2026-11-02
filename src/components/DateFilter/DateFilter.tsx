import { useState, useRef, useEffect } from "react";
import styles from "./DateFilter.module.scss";

interface DateFilterProps {
  startDate?: Date | null;
  endDate?: Date | null;
  onChange?: (start: Date | null, end: Date | null, preset?: string) => void;
}

export default function DateFilter({
  startDate: initialStart = null,
  endDate: initialEnd = null,
  onChange,
}: DateFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [startDate, setStartDate] = useState<Date | null>(initialStart);
  const [endDate, setEndDate] = useState<Date | null>(initialEnd);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [activeMonth, setActiveMonth] = useState<Date>(new Date(2026, 8, 1)); // September 2026

  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | HTMLDivElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const currentTab = tabRefs.current[activeIndex];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeIndex, startDate, isOpen]);

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

    const today = new Date(2026, 8, 10);
    let start: Date, end: Date;

    if (tabName === "today") {
      start = new Date(today);
      end = new Date(today);
    } else if (tabName === "yesterday") {
      start = new Date(today);
      start.setDate(today.getDate() - 1);
      end = new Date(start);
    } else if (tabName === "lastWeek") {
      start = new Date(today);
      start.setDate(today.getDate() - 7);
      end = new Date(today);
    } else {
      return;
    }

    setStartDate(start);
    setEndDate(end);
    if (onChange) onChange(start, end, tabName);
  };

  const handleCustomTriggerClick = (index: number) => {
    setActiveIndex(index);
    setIsOpen(!isOpen);
  };

  const handlePrevMonth = () => {
    setActiveMonth(
      new Date(activeMonth.getFullYear(), activeMonth.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setActiveMonth(
      new Date(activeMonth.getFullYear(), activeMonth.getMonth() + 1, 1),
    );
  };

  const handleYearChange = (offset: number) => {
    setActiveMonth(
      new Date(activeMonth.getFullYear() + offset, activeMonth.getMonth(), 1),
    );
  };

  const secondMonth = new Date(
    activeMonth.getFullYear(),
    activeMonth.getMonth() + 1,
    1,
  );

  const getDaysInMonth = (year: number, month: number) => {
    const date = new Date(year, month, 1);
    const days = [];
    const firstDayIndex = date.getDay();
    const prevMonthDays = new Date(year, month, 0).getDate();

    for (let i = firstDayIndex - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthDays - i),
        isCurrentMonth: false,
      });
    }

    const totalDays = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= totalDays; i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true,
      });
    }

    const remainingCells = 42 - days.length;
    for (let i = 1; i <= remainingCells; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
      });
    }

    return days;
  };

  const handleDateClick = (date: Date) => {
    setActiveIndex(3);
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (date < startDate) {
        setStartDate(date);
      } else {
        setEndDate(date);
        setIsOpen(false);
        if (onChange) onChange(startDate, date, "custom");
      }
    }
  };

  const formatDateLabel = (date: Date | null) => {
    if (!date) return "";
    return `${date.getDate()} ${date.toLocaleString("default", { month: "short" })}`;
  };

  const renderMonthGrid = (year: number, month: number) => {
    const days = getDaysInMonth(year, month);
    const monthName = new Date(year, month, 1).toLocaleString("default", {
      month: "short",
    });

    return (
      <div className={styles.calendarMonth}>
        <div className={styles.monthHeaderTitle}>
          {monthName} {year}
        </div>
        <div className={styles.weekdaysRow}>
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className={styles.daysGrid}>
          {days.map((item, index) => {
            const time = new Date(
              item.date.getFullYear(),
              item.date.getMonth(),
              item.date.getDate(),
            ).getTime();

            const startTime = startDate
              ? new Date(
                  startDate.getFullYear(),
                  startDate.getMonth(),
                  startDate.getDate(),
                ).getTime()
              : null;

            const endTime = endDate
              ? new Date(
                  endDate.getFullYear(),
                  endDate.getMonth(),
                  endDate.getDate(),
                ).getTime()
              : null;

            const hoverTime = hoverDate
              ? new Date(
                  hoverDate.getFullYear(),
                  hoverDate.getMonth(),
                  hoverDate.getDate(),
                ).getTime()
              : null;

            let isStart = startTime !== null && time === startTime;
            let isEnd = endTime !== null && time === endTime;
            let isInRange = false;

            // Handle range calculation (including backwards hovering)
            if (startTime) {
              const currentEnd = endTime || hoverTime;

              if (currentEnd !== null) {
                // Determine the actual visual start and end of the selection block
                const rangeStart = Math.min(startTime, currentEnd);
                const rangeEnd = Math.max(startTime, currentEnd);

                isInRange = time > rangeStart && time < rangeEnd;

                // If actively selecting (no end date yet), update the start/end caps based on hover direction
                if (!endTime && hoverDate) {
                  isStart = time === rangeStart;
                  isEnd = time === rangeEnd;
                }
              }
            }

            return (
              <button
                key={index}
                type="button"
                onClick={() => handleDateClick(item.date)}
                onMouseEnter={() => setHoverDate(item.date)}
                className={`
                  ${styles.dayCell} 
                  ${!item.isCurrentMonth ? styles.outsideMonth : ""}
                  ${isStart ? styles.selectedStart : ""}
                  ${isEnd ? styles.selectedEnd : ""}
                  ${isInRange ? styles.inRange : ""}
                `.trim()}
              >
                {item.date.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  };
  const showDates = startDate !== null || isOpen;

  return (
    <div className={styles.pickerWrapper} ref={containerRef}>
      <div className={styles.tabsContainer}>
        <div className={styles.indicator} style={indicatorStyle} />

        <button
          type="button"
          className={`${styles.tabItem} ${activeIndex === 0 ? styles.activeTab : ""}`}
          onClick={() => handlePresetClick("today", 0)}
          ref={(el) => {
            tabRefs.current[0] = el;
          }}
        >
          Today
        </button>
        <button
          type="button"
          className={`${styles.tabItem} ${activeIndex === 1 ? styles.activeTab : ""}`}
          onClick={() => handlePresetClick("yesterday", 1)}
          ref={(el) => {
            tabRefs.current[1] = el;
          }}
        >
          Yesterday
        </button>
        <button
          type="button"
          className={`${styles.tabItem} ${activeIndex === 2 ? styles.activeTab : ""}`}
          onClick={() => handlePresetClick("lastWeek", 2)}
          ref={(el) => {
            tabRefs.current[2] = el;
          }}
        >
          Last Week
        </button>

        <div
          className={`${styles.customTriggerPill} ${activeIndex === 3 ? styles.activeTab : ""}`}
          onClick={() => handleCustomTriggerClick(3)}
          ref={(el) => {
            tabRefs.current[3] = el;
          }}
        >
          <div
            className={`${styles.contentWrapper} ${activeIndex === 3 ? styles.showText : styles.showIcon}`}
          >
            {activeIndex === 3 ? (
              <div className={styles.dateRangeContent}>
                <span>
                  {startDate ? formatDateLabel(startDate) : "Start date"}
                </span>
                <span className={styles.arrowSeparator}>→</span>
                <span>{endDate ? formatDateLabel(endDate) : "End date"}</span>
              </div>
            ) : (
              <div className={styles.iconContainer}>
                <svg
                  className={styles.calendarIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={styles.calendarPopup}>
          <div className={styles.popupNavHeader}>
            <div className={styles.navGroup}>
              <button type="button" onClick={() => handleYearChange(-1)}>
                «
              </button>
              <button type="button" onClick={handlePrevMonth}>
                ‹
              </button>
            </div>
            <div className={styles.navGroup}>
              <button type="button" onClick={handleNextMonth}>
                ›
              </button>
              <button type="button" onClick={() => handleYearChange(1)}>
                »
              </button>
            </div>
          </div>

          <div className={styles.calendarsWrapper}>
            {renderMonthGrid(activeMonth.getFullYear(), activeMonth.getMonth())}
            {renderMonthGrid(secondMonth.getFullYear(), secondMonth.getMonth())}
          </div>
        </div>
      )}
    </div>
  );
}
