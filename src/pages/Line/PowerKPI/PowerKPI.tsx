import React from "react";
import CountUp from "react-countup";
import { useAnimatedCounter } from "../../../services/hooks/useAnimateValues";
import styles from "./PowerKPI.module.scss";
// import ProgressBar from "../../../components/PogressBar/PogressBar";
import WidgetContainer from "../../../components/WidgetContainer/WidgetContainer";
import { Activity, ScanText, Zap } from "lucide-react";

type LineTotalProductionProps = {
  targetRate?: number;
  units?: string[];
  actualProduction?: number;
  // actualUnit?: string;
  yieldPercentage?: number;
};

export default function PowerKPI({
  targetRate = 5000,
  units = ["KW"],
  actualProduction = 7000,

  yieldPercentage = 75,
}: LineTotalProductionProps) {
  // Uses your existing custom hook for the progress bar animation
  const animatedYield = useAnimatedCounter(yieldPercentage, 1500).currentNumber;

  return (
    <WidgetContainer
      title="Power KPI"
      // icon={<Activity color="#000000" size={18} />}>
      icon={<Zap color="#000000" size={18} />}>
      <div className={styles.metricsContainer}>
        {/* Top Row: Production Metrics */}
        <div className={styles.topRow}>
          <div className={styles.metricBlock}>
            <div className={styles.valueWrapper}>
              <span className={styles.value}>
                <CountUp end={targetRate} separator="," duration={1.5} />
              </span>
              <span className={styles.unit}>{units[0]}</span>
            </div>
            <span className={styles.label}>Energy Used</span>
          </div>

          <div className={styles.metricBlock}>
            <div className={styles.valueWrapper}>
              <span className={styles.value}>
                <CountUp end={actualProduction} separator="," duration={1.5} />
              </span>
              {/* The KM unit in the mockup is uppercase */}
              <span className={`${styles.unit} ${styles.uppercase}`}>
                {units[1]}
              </span>
            </div>
            <span className={styles.label}>Power Factor</span>
          </div>
        </div>
        <div className={styles.metricBlock}>
          <div className={styles.valueWrapper}>
            <span className={styles.value}>
              <CountUp end={actualProduction} separator="," duration={1.5} />
            </span>
            {/* The KM unit in the mockup is uppercase */}
            <span className={`${styles.unit}`}>{units[0]}</span>
          </div>
          <span className={styles.label}>Energy Used</span>
        </div>
      </div>
    </WidgetContainer>
  );
}
