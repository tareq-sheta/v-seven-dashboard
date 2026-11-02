import TotalProduction from "./TotalProduction/TotalProduction";
import PerformanceIndicatorKPI from "./PerformanceIndicatorKPI/PerformanceIndicatorKPI";
import UsageKPI from "./UsageKPI/UsageKPI";
// import CurrentActivity from "../components/CurrentActivity";
import FactoryCharts from "../../components/FactoryOrLineCharts/FactoryOrLineCharts";
// import CurrentActivity from "./CurrentActivity/CurrentActivity";
import styles from "./Factory.module.scss";
import CurrentActivity from "./CurrentActivity/CurrentActivity";

function Factory() {
  return (
    <div className={styles.oneFactoryCntr}>
      <div className={styles.div1}>
        <TotalProduction />
      </div>
      <div className={styles.div2}>
        <PerformanceIndicatorKPI />
      </div>
      <div className={styles.div3}>
        <UsageKPI />
      </div>
      <div className={styles.div4}>
        <FactoryCharts />
      </div>
      <div className={styles.div5}>
        <CurrentActivity />
      </div>
    </div>
  );
}

export default Factory;
