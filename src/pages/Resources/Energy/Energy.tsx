import React from "react";
import { Zap, Activity, Gauge } from "lucide-react";
import styles from "./Energy.module.scss";

export default function Energy() {
  const energyCards = [
    {
      name: "Line 1 Electrical Load",
      load: 82,
      factor: 95,
      efficiency: 88,
      loadColor: "#ff5722",
      factorColor: "#003f5c",
      effColor: "#2ec4b6",
    },
    {
      name: "Pneumatic Air Compressor",
      load: 65,
      factor: 88,
      efficiency: 72,
      loadColor: "#f59e0b",
      factorColor: "#003f5c",
      effColor: "#f59e0b",
    },
    {
      name: "Chiller & Boiler Plant",
      load: 90,
      factor: 92,
      efficiency: 60,
      loadColor: "#e31837",
      factorColor: "#003f5c",
      effColor: "#e31837",
    },
  ];

  const timelineSegments = [
    { state: "running", width: "60%", label: "Peak Demand" },
    { state: "down", width: "25%", label: "Load Shedding" },
    { state: "idle", width: "15%", label: "Standby Mode" },
  ];

  return (
    <div className={styles.energyPage}>
      {/* Breadcrumb & Header */}

      {/* Top Grid: Utility Summary Cards */}
      <div className={styles.topGrid}>
        {energyCards.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.cardHeader}>
              <Zap size={18} />
              <span>{item.name}</span>
            </div>

            <div className={styles.progressGroup}>
              {/* Current Load */}
              <div className={styles.barItem}>
                <div className={styles.barTop}>
                  <span>Current Load (kW)</span>
                  <span className={styles.val}>{item.load}%</span>
                </div>
                <div className={styles.track}>
                  <div
                    className={styles.fill}
                    style={{
                      width: `${item.load}%`,
                      backgroundColor: item.loadColor,
                    }}
                  />
                </div>
              </div>

              {/* Power Factor */}
              <div className={styles.barItem}>
                <div className={styles.barTop}>
                  <span>Power Factor (cos φ)</span>
                  <span className={styles.val}>{item.factor}%</span>
                </div>
                <div className={styles.track}>
                  <div
                    className={styles.fill}
                    style={{
                      width: `${item.factor}%`,
                      backgroundColor: item.factorColor,
                    }}
                  />
                </div>
              </div>

              {/* Energy Efficiency */}
              <div className={styles.barItem}>
                <div className={styles.barTop}>
                  <span>Energy Efficiency</span>
                  <span className={styles.val}>{item.efficiency}%</span>
                </div>
                <div className={styles.track}>
                  <div
                    className={styles.fill}
                    style={{
                      width: `${item.efficiency}%`,
                      backgroundColor: item.effColor,
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
          <span>Energy Demand & Peak Timeline</span>
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

      {/* Bottom Grid: Trend Chart & Specific Energy Index */}
      <div className={styles.bottomGrid}>
        {/* Left: Power Consumption Profile Chart */}
        <div className={styles.chartCard}>
          <div className={styles.cardHeader}>
            <Activity size={18} />
            <span>Power Consumption Profile (kWh vs Baseline)</span>
          </div>
          <div className={styles.chartPlaceholder}>
            {/* Insert your Recharts LineChart here */}
            <span>Interactive Power Trend & Baseline Curve</span>
          </div>
        </div>

        {/* Right: Specific Energy Index */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Gauge size={18} />
            <span>Specific Energy Index (SEC)</span>
          </div>
          <div className={styles.progressGroup}>
            <div className={styles.barItem}>
              <div className={styles.barTop}>
                <span>SEC per 1,000 Units</span>
                <span className={styles.val}>78%</span>
              </div>
              <div className={styles.track}>
                <div
                  className={styles.fill}
                  style={{ width: "78%", backgroundColor: "#ff5722" }}
                />
              </div>
            </div>
            <div className={styles.barItem}>
              <div className={styles.barTop}>
                <span>Target Efficiency Threshold</span>
                <span className={styles.val}>85%</span>
              </div>
              <div className={styles.track}>
                <div
                  className={styles.fill}
                  style={{ width: "85%", backgroundColor: "#2ec4b6" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
