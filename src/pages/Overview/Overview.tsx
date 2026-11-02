import styles from "./Overview.module.scss";
import OverviewSlice from "./OverviewSlice/OverviewSlice";

let valueArr = [
  { id: 101, value1: 5000, value2: 3000, value3: 10, value4: 26 },
  { id: 102, value1: 2500, value2: 1000, value3: 20, value4: 7 },
  { id: 103, value1: 3600, value2: 20000, value3: 35, value4: 6 },
  { id: 104, value1: 900, value2: 10000, value3: 41, value4: 21 },
  { id: 105, value1: 4100, value2: 9000, value3: 14, value4: 9 },
];
function Overview() {
  return (
    <div className={styles.dashboard}>
      <div className={`${styles.dashboardBody} ${styles.scrollList}`}>
        {valueArr.map((obj) => (
          <OverviewSlice key={obj.id} valuesObj={obj} />
        ))}
      </div>
    </div>
  );
}

export default Overview;
