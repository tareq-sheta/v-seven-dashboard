import CountUp from "react-countup";

import styles from "./OverviewSlice.module.scss";
import { useAnimatedCounter } from "../../../services/hooks/useAnimateValues";
import CircularProgress from "../../../components/CircularProgess/CircularProgess";

type Props = {
  value1: number;
  value2: number;
  value3: number;
  value4: number;
};

interface OverviewSliceProps {
  valuesObj?: Props;
}

export default function OverviewSlice({
  valuesObj = { value1: 5000, value2: 20000, value3: 20, value4: 5 },
}: OverviewSliceProps) {
  const animatedPercent = useAnimatedCounter(75).currentNumber;

  return (
    <div className={styles.card}>
      <h1 className={styles.primaryHeader}>Primary Header</h1>

      <div className={styles.secondaryHeaderCont}>
        <div className={styles.secondaryHeader}>
          <span>Actual speed</span>
        </div>
        <div className={styles.secondaryHeader}>
          <span className={styles.val}>
            <CountUp
              start={0}
              end={valuesObj.value1}
              duration={1}
              separator=","
            />
          </span>
          <span className={styles.unt}>L/s</span>
        </div>

        <div className={styles.secondaryHeader}>
          <span>Actual production</span>
        </div>
        <div className={styles.secondaryHeader}>
          <span className={styles.val}>
            <CountUp
              start={0}
              end={valuesObj.value2}
              duration={1}
              separator=","
            />
          </span>
          <span className={styles.unt}>s</span>
        </div>

        <div className={styles.secondaryHeader}>
          <span>Last hour cycle time</span>
        </div>
        <div className={styles.secondaryHeader}>
          <span className={styles.val}>
            <CountUp
              start={0}
              end={valuesObj.value3}
              duration={1}
              separator=","
            />
          </span>
          <span className={styles.unt}>s</span>
        </div>

        <div className={styles.secondaryHeader}>
          <span>Ratio of active lines</span>
        </div>
        <div className={styles.secondaryHeader}>
          <span className={styles.val}>
            {`${valuesObj.value4}:${valuesObj.value4}`}
          </span>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.progressbarCntr}>
        <CircularProgress
          percent={animatedPercent}
          strokeColor="#FF9F1C"
          label="OEE"
        />
        <CircularProgress
          percent={animatedPercent}
          strokeColor="#00D1DE"
          label="SLE"
        />
        <CircularProgress
          percent={animatedPercent}
          strokeColor="#CA4E82"
          label="USLE"
        />
      </div>

      <div className={`${styles.secondaryHeaderCont} ${styles.bottomSection}`}>
        <div className={styles.secondaryHeader}>
          <span>Producton volume</span>
        </div>
        <div className={styles.secondaryHeader}>
          <span className={styles.val}>
            <CountUp
              start={0}
              end={valuesObj.value3}
              duration={1}
              separator=","
            />
          </span>
          <span className={styles.unt}>L</span>
        </div>

        <div className={styles.secondaryHeader}>
          <span>Producton quality</span>
        </div>
        <div className={styles.secondaryHeader}>
          <span className={styles.val}>
            <CountUp
              start={0}
              end={valuesObj.value1}
              duration={1}
              separator=","
            />
          </span>
        </div>
      </div>
    </div>
  );
}
