import React from "react";
import { Warehouse, TrendingDown, Layers, Activity } from "lucide-react";
import styles from "./Materials.module.scss";

export default function Materials() {
  const materialCards = [
    {
      name: "PET Resin Granules",
      stock: 85,
      scrap: 5,
      yield: 92,
      stockColor: "#2ec4b6",
      scrapColor: "#e31837",
      yieldColor: "#003f5c",
    },
    {
      name: "Preform Blanks 500ml",
      stock: 60,
      scrap: 12,
      yield: 88,
      stockColor: "#f59e0b",
      scrapColor: "#e31837",
      yieldColor: "#003f5c",
    },
    {
      name: "Printed Labels & Caps",
      stock: 40,
      scrap: 8,
      yield: 95,
      stockColor: "#a855f7",
      scrapColor: "#e31837",
      yieldColor: "#2ec4b6",
    },
  ];

  const timelineSegments = [
    { state: "running", width: "45%", label: "Batch Active" },
    { state: "idle", width: "15%", label: "Refill Pause" },
    { state: "down", width: "10%", label: "Material Jam" },
    { state: "running", width: "30%", label: "Batch Resumed" },
  ];

  return (
    <div className={styles.materialsPage}>
      {/* Breadcrumb & Header */}
      {/* <div className={styles.pageHeader}>
        <h2>Dashboard / Materials</h2>
      </div> */}

      {/* Top Grid: Material Summary Cards */}
      <div className={styles.topGrid}>
        {materialCards.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.cardHeader}>
              <Warehouse size={18} />
              <span>{item.name}</span>
            </div>

            <div className={styles.progressGroup}>
              {/* Stock Level */}
              <div className={styles.barItem}>
                <div className={styles.barTop}>
                  <span>Stock Level</span>
                  <span className={styles.val}>{item.stock}%</span>
                </div>
                <div className={styles.track}>
                  <div
                    className={styles.fill}
                    style={{
                      width: `${item.stock}%`,
                      backgroundColor: item.stockColor,
                    }}
                  />
                </div>
              </div>

              {/* Scrap Rate */}
              <div className={styles.barItem}>
                <div className={styles.barTop}>
                  <span>Scrap Rate</span>
                  <span className={styles.val}>{item.scrap}%</span>
                </div>
                <div className={styles.track}>
                  <div
                    className={styles.fill}
                    style={{
                      width: `${item.scrap}%`,
                      backgroundColor: item.scrapColor,
                    }}
                  />
                </div>
              </div>

              {/* Material Yield */}
              <div className={styles.barItem}>
                <div className={styles.barTop}>
                  <span>Material Yield</span>
                  <span className={styles.val}>{item.yield}%</span>
                </div>
                <div className={styles.track}>
                  <div
                    className={styles.fill}
                    style={{
                      width: `${item.yield}%`,
                      backgroundColor: item.yieldColor,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Middle State Timeline Bar */}
      <div className={styles.timelineRow}>
        <div className={styles.timelineHeader}>
          <Activity size={16} />
          <span>Material Flow & Batch Timeline</span>
        </div>
        <div className={styles.timelineBar}>
          {timelineSegments.map((seg, idx) => (
            <div
              key={idx}
              className={`${styles.segment} ${styles[seg.state]}`}
              style={{ width: seg.width }}
              title={seg.label}
            />
          ))}
        </div>
      </div>

      {/* Bottom Grid: Trend Chart & Yield Breakdown */}
      <div className={styles.bottomGrid}>
        {/* Left: Consumption Trend Chart Placeholder */}
        <div className={styles.chartCard}>
          <div className={styles.cardHeader}>
            <TrendingDown size={18} />
            <span>Material Consumption & Waste Trend</span>
          </div>
          <div className={styles.chartPlaceholder}>
            {/* Insert your Recharts LineChart here */}
            <span>Interactive Consumption Trend Curve</span>
          </div>
        </div>

        {/* Right: Detailed Batch Yield */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Layers size={18} />
            <span>Batch Mass & Yield</span>
          </div>
          <div className={styles.progressGroup}>
            <div className={styles.barItem}>
              <div className={styles.barTop}>
                <span>Good Material Yield</span>
                <span className={styles.val}>94%</span>
              </div>
              <div className={styles.track}>
                <div
                  className={styles.fill}
                  style={{ width: "94%", backgroundColor: "#2ec4b6" }}
                />
              </div>
            </div>
            <div className={styles.barItem}>
              <div className={styles.barTop}>
                <span>Process Waste Mass</span>
                <span className={styles.val}>6%</span>
              </div>
              <div className={styles.track}>
                <div
                  className={styles.fill}
                  style={{ width: "6%", backgroundColor: "#e31837" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
