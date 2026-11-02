import { useAnimatedCounter } from "../../../services/hooks/useAnimateValues";
import styles from "./PerformanceIndicatorKPI.module.scss";
import CircularProgress from "../../../components/CircularProgess/CircularProgess";
import ProgressBar from "../../../components/PogressBar/PogressBar";

function PerformanceIndicatorKPI() {
  return (
    <div className={styles.performanceIndicatorCntr}>
      <div className={styles.cntrHeader}>
        <i className={`${styles.cardIcon} fa-solid fa-table-cells-large`}></i>
        <span>Performance Indicator KPI</span>
      </div>

      <div className={styles.kpiContentCntrBody}>
        <div className={styles.kpiContent}>
          <div className={styles.kpiContentItem1}>
            <div className={styles.kpiProgressbarCntr}>
              <CircularProgress
                size={73}
                strokeColor="#FF9F1C"
                percent={useAnimatedCounter(75).currentNumber}
                label="OEE"
              />
              {/* <p>OEE</p> */}
              {/* </div> */}
              {/* <div className={styles.circularItem}> */}
              <CircularProgress
                size={73}
                strokeColor="#00D1DE"
                percent={useAnimatedCounter(75).currentNumber}
                label="SLE"
              />
              {/* <p>SLE</p> */}
              {/* </div> */}
              {/* <div className={styles.circularItem}> */}
              <CircularProgress
                size={73}
                strokeColor="#CA4E82"
                percent={useAnimatedCounter(75).currentNumber}
                label="USLE"
              />
              {/* <p>USLE</p> */}
              {/* </div> */}
            </div>
          </div>

          <div className={styles.kpiContentItem2}>
            <div className={styles.linearGroup}>
              <div className={styles.kpiProgressbarLine}>
                <ProgressBar
                  percent={useAnimatedCounter(50, 5000).currentNumber}
                  strokeColor="#2C3E50"
                  label="Production"
                />
              </div>
              <div className={styles.kpiProgressbarLine}>
                <ProgressBar
                  percent={useAnimatedCounter(75, 5000).currentNumber}
                  strokeColor="#2C3E50"
                  label="Quality"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceIndicatorKPI;
