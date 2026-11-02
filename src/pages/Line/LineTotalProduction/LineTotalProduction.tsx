import React from "react";
import CountUp from "react-countup";
import { useAnimatedCounter } from "../../../services/hooks/useAnimateValues";
import styles from "./LineTotalProduction.module.scss";
import ProgressBar from "../../../components/PogressBar/PogressBar";
import WidgetContainer from "../../../components/WidgetContainer/WidgetContainer";
import { ScanText } from "lucide-react";

type LineTotalProductionProps = {
  targetRate?: number;
  targetUnit?: string;
  actualProduction?: number;
  actualUnit?: string;
  yieldPercentage?: number;
};

export default function LineTotalProduction({
  targetRate = 5000,
  targetUnit = "bph",
  actualProduction = 7000,
  actualUnit = "KM",
  yieldPercentage = 75,
}: LineTotalProductionProps) {
  // Uses your existing custom hook for the progress bar animation
  const animatedYield = useAnimatedCounter(yieldPercentage, 1500).currentNumber;

  return (
    <WidgetContainer
      title="Production"
      icon={<ScanText color="#000000" size={18} />}
    >
      <div className={styles.metricsContainer}>
        <div className={styles.topRow}>
          <div className={styles.metricBlock}>
            <div className={styles.valueWrapper}>
              <span className={styles.value}>
                <CountUp end={targetRate} separator="," duration={1.5} />
              </span>
              <span className={styles.unit}>{targetUnit}</span>
            </div>
            <span className={styles.label}>Production /h</span>
          </div>

          <div className={styles.metricBlock}>
            <div className={styles.valueWrapper}>
              <span className={styles.value}>
                <CountUp end={actualProduction} separator="," duration={1.5} />
              </span>
              {/* The KM unit in the mockup is uppercase */}
              <span className={`${styles.unit} ${styles.uppercase}`}>
                {actualUnit}
              </span>
            </div>
            <span className={styles.label}>Actual Production</span>
          </div>
        </div>

        <ProgressBar
          percent={animatedYield}
          strokeColor="#2ec4b6"
          label="Production Yield"
        />
      </div>
    </WidgetContainer>
  );
}
