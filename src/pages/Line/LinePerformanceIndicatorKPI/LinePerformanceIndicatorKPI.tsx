import { useAnimatedCounter } from "../../../services/hooks/useAnimateValues";
import styles from "./LinePerformanceIndicatorKPI.module.scss";
import CircularProgress from "../../../components/CircularProgess/CircularProgess";
import ProgressBar from "../../../components/PogressBar/PogressBar";
import { SlidersHorizontal } from "lucide-react";

function LinePerformanceIndicatorKPI() {
  return (
    <div className={styles.performanceIndicatorCntr}>
      <div className={styles.cntrHeader}>
        <SlidersHorizontal className={styles.cardIcon} />
        <span>Performance Indicator KPI</span>
      </div>

      <div className={styles.kpiContentCntrBody}>
        <div className={styles.kpiContentItem1}>
          <div className={styles.kpiProgressbarCntr}>
            <CircularProgress
              size={73}
              strokeColor="#08415C"
              percent={useAnimatedCounter(75).currentNumber}
              label="OEE"
            />
          </div>
        </div>

        <div className={styles.kpiContentItem2}>
          <div className={styles.linearGroup}>
            <div className={styles.kpiProgressbarLine}>
              <ProgressBar
                percent={useAnimatedCounter(50, 5000).currentNumber}
                strokeColor="#FF5400"
                label="Availability"
              />
            </div>
            <div className={styles.kpiProgressbarLine}>
              <ProgressBar
                percent={useAnimatedCounter(75, 5000).currentNumber}
                strokeColor="#FF9F1C"
                label="Performance"
              />
            </div>
            <div className={styles.kpiProgressbarLine}>
              <ProgressBar
                percent={useAnimatedCounter(75, 5000).currentNumber}
                strokeColor="#FF5400"
                label="Quality"
              />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default LinePerformanceIndicatorKPI;
