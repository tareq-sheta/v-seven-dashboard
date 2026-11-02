import { ArrowDown } from "lucide-react";
import styles from "./LossTree.module.scss";

export function LossTreeData() {
  let on_subPersent1 = 25;
  let on_subPersent2 = 50;
  // -----------
  let off_subPersent1 = 5;
  let off_subPersent2 = 3;
  let off_subPersent3 = 7;
  let off_subPersent4 = 2;
  let off_subPersent5 = 8;
  let totalOnPersent = on_subPersent1 + on_subPersent2;
  let totalOffPersent =
    off_subPersent1 +
    off_subPersent2 +
    off_subPersent3 +
    off_subPersent4 +
    off_subPersent5;
  let pos1 = off_subPersent1 + 1;
  let pos2 = pos1 + off_subPersent2 + 1;
  let pos3 = pos2 + off_subPersent3 + 1;
  return (
    <div
      style={{ gridTemplateRows: `${totalOffPersent}% ${totalOnPersent}%` }}
      className={styles.lossTreeCntr}>
      <div className={styles.mainOff}>
        <span className={styles.name}>OFF</span>
        <span className={styles.persent}>{totalOffPersent}%</span>
      </div>
      <div className={styles.mainOn}>
        <span className={styles.name}>ON</span>
        <span className={styles.persent}>{totalOnPersent}%</span>
      </div>
      {/* -------- */}
      <div className={styles.subOn1}>
        <span className={styles.title}>Quality Loss</span>
        <span
          style={{ height: (on_subPersent1 / totalOnPersent) * 100 + "%" }}
          className={styles.amount}>
          <span className={styles.persent}>{on_subPersent1}%</span>
        </span>
      </div>
      <div className={styles.subOn2}>
        <span className={styles.title}>Speed Loss</span>
        <span
          style={{ height: (on_subPersent2 / totalOnPersent) * 100 + "%" }}
          className={styles.amount}>
          <span className={styles.persent}>{on_subPersent2}%</span>
        </span>
      </div>

      <div className={styles.subOff1}>
        <span className={styles.title}>
          Break-
          <br />
          down
        </span>
        <span
          style={{ height: (off_subPersent1 / totalOffPersent) * 100 + "%" }}
          className={styles.amount}>
          <span className={styles.persent}>{off_subPersent1}%</span>
        </span>
      </div>

      <div className={styles.subOff2}>
        <span className={styles.title}>
          Cleaning <br /> process
        </span>
        <span
          style={{
            height: (off_subPersent2 / totalOffPersent) * 100 + "%",
            top: `${pos1 * 3.5}%`,
          }}
          className={styles.amount}>
          <span className={styles.persent}>{off_subPersent2}%</span>
        </span>
      </div>

      <div className={styles.subOff3}>
        <span className={styles.title}>
          Change <span style={{ whiteSpace: "nowrap" }}>over time</span>
        </span>
        <span
          style={{
            height: (off_subPersent3 / totalOffPersent) * 100 + "%",
            top: `${pos2 * 3.25}%`,
          }}
          className={styles.amount}>
          <span className={styles.persent}>{off_subPersent3}%</span>
        </span>
      </div>

      <div className={styles.subOff4}>
        <span className={styles.title}>Idle</span>
        <span
          style={{
            height: (off_subPersent4 / totalOffPersent) * 100 + "%",
            top: `${pos3 * 3.125}%`,
          }}
          className={styles.amount}>
          <span className={styles.persent}>{off_subPersent4}%</span>
        </span>
      </div>

      <div className={styles.subOff5}>
        <span className={styles.title}>
          Minor
          <br />
          stops
        </span>
        <span
          style={{ height: (off_subPersent5 / totalOffPersent) * 100 + "%" }}
          className={styles.amount}>
          <span className={styles.persent}>{off_subPersent5}%</span>
        </span>
      </div>
    </div>
  );
}
function LossTree() {
  return (
    <div className={styles.customActivityContainer}>
      <div className={styles.customTabsHeader}>
        <div className={styles.activityTitle}>
          {/* <i className="fa-solid fa-table-cells-large"></i> */}
          <ArrowDown />
          <span>Loss Tree</span>
        </div>

        <div className=""></div>
      </div>

      <div className={styles.customTabsContent}>
        <LossTreeData />
      </div>
    </div>
  );
}

export default LossTree;
