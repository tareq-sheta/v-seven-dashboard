import { useState } from "react";
import Function from "./Function/Function";
import LossTree from "../../Line/LossTree/LossTree";
import RouteChart from "./RouteChart/RouteChart";
import styles from "./CurrentActivity.module.scss";

function CurrentActivity() {
  const [activeTab, setActiveTab] = useState("1");

  const tabs = [
    {
      key: "1",
      label: "Function",
      content: <Function />,
    },
    {
      key: "2",
      label: "Route",
      content: <RouteChart />,
    },
    // {
    //   key: "3",
    //   label: "Loss Tree",
    //   content: <LossTree />,
    // },
  ];

  return (
    <div className={styles.customActivityContainer}>
      <div className={styles.customTabsHeader}>
        <div className={styles.activityTitle}>
          <i className="fa-solid fa-table-cells-large"></i>
          <span>Current Activity</span>
        </div>

        <div className={styles.tabsNav}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`${styles.tabTrigger} ${activeTab === tab.key ? styles.active : ""}`}
              onClick={() => setActiveTab(tab.key)}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.customTabsContent}>
        {tabs.find((tab) => tab.key === activeTab)?.content}
      </div>
    </div>
  );
}

export default CurrentActivity;
