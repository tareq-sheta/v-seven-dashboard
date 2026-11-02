import { ResponsiveContainer, AreaChart, Area } from "recharts";
import styles from "./FactoryOrLineCharts.module.scss";
const data = [
  { name: "1", seconds: 0 },
  { name: "2", seconds: 500 },
  { name: "3", seconds: 200 },
  { name: "4", seconds: 600 },
  { name: "5", seconds: 100 },
  { name: "6", seconds: 250 },

  { name: "7", seconds: 0 },
];
function FactoryOrLineCharts() {
  return (
    <div className={styles.factoryChartsCntr}>
      <div className={styles.factoryChart}>
        <div className={styles.factoryChartHeader}>
          <i className={`${styles.coloredCyrcle} ${styles.colorYelow}`}></i>
          <span className={styles.bold}>Cycle Time</span>
          <span>[seconds]</span>
        </div>
        <div className={styles.factoryChartBody}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={300} height={300} data={data}>
              <Area
                type="monotone"
                dataKey="seconds"
                stroke="#FF9F1C"
                strokeWidth={5}
                fill="#FF9F1C33"
                // fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className={styles.factoryChartFooter}>
            <div className={styles.footerItemOne}>
              <span>Avg.</span>
              <span>1.0</span>
            </div>
            <div className={styles.footerItemTwo}>
              <i className="fa-regular fa-angle-down"></i>
              <span>Min.</span>
              <span>0.5</span>
            </div>
            <div className={styles.footerItemThree}>
              <i className="fa-regular fa-angle-up"></i>
              <span>Max.</span>
              <span>2.0</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.factoryChart}>
        <div className={styles.factoryChartHeader}>
          <i className={`${styles.coloredCyrcle} ${styles.colorOrange}`}></i>
          <span className={styles.bold}>Speed</span>
          <span>[pbh]</span>
        </div>
        <div className={styles.factoryChartBody}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={300} height={300} data={data}>
              <Area
                type="monotone"
                dataKey="seconds"
                stroke="#CA4E82"
                strokeWidth={5}
                fill="#CA4E8233"
                // fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className={styles.factoryChartFooter}>
            <div className={styles.footerItemOne}>
              <span>Avg.</span>
              <span>1.0</span>
            </div>
            <div className={styles.footerItemTwo}>
              <i className="fa-regular fa-angle-down"></i>
              <span>Min.</span>
              <span>0.5</span>
            </div>
            <div className={styles.footerItemThree}>
              <i className="fa-regular fa-angle-up"></i>
              <span>Max.</span>
              <span>2.0</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.factoryChart}>
        <div className={styles.factoryChartHeader}>
          <i className={`${styles.coloredCyrcle} ${styles.colorGreen}`}></i>
          <span className={styles.bold}>UPTIME</span>
          <span>[bottle]</span>
        </div>
        <div className={styles.factoryChartBody}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={300} height={300} data={data}>
              <Area
                type="monotone"
                dataKey="seconds"
                stroke="#2EC4B6"
                strokeWidth={5}
                fill="#2EC4B633"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className={styles.factoryChartFooter}>
            <div className={styles.footerItemOne}>
              <span>Avg.</span>
              <span>1.0</span>
            </div>
            <div className={styles.footerItemTwo}>
              <i className="fa-regular fa-angle-down"></i>
              <span>Min.</span>
              <span>0.5</span>
            </div>
            <div className={styles.footerItemThree}>
              <i className="fa-regular fa-angle-up"></i>
              <span>Max.</span>
              <span>2.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FactoryOrLineCharts;
