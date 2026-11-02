import { useState, useMemo } from "react";
import { Clock, TrendingUp } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import styles from "./Machines.module.scss";

const MACHINES_DATA = [
  {
    id: "line-1",
    name: "PET Bottling Line 1",
    type: "Carbonated Drinks",
    batch: "Citrus Sparkle 500ml",
    status: "Running",
    statusDuration: "2h 15m",
    currentBph: 5850,
    targetBph: 6000,
    oee: 88,
    availability: 94,
    performance: 96,
    quality: 98,
    rejectCount: 82,
    timeline: [
      {
        start: "08:00",
        duration: 120,
        state: "Running",
        label: "Normal Production",
      },
      {
        start: "10:00",
        duration: 15,
        state: "Downtime",
        label: "Capper Jam (Resolved)",
      },
      {
        start: "10:15",
        duration: 225,
        state: "Running",
        label: "Normal Production",
      },
      {
        start: "14:00",
        duration: 30,
        state: "Setup",
        label: "CIP Sanitization",
      },
      {
        start: "14:30",
        duration: 90,
        state: "Running",
        label: "Normal Production",
      },
    ],
  },
  {
    id: "line-2",
    name: "Slim Can Line 2",
    type: "Energy Beverages",
    batch: "Berry Nitro 330ml",
    status: "Downtime",
    statusDuration: "42m",
    currentBph: 0,
    targetBph: 8000,
    oee: 64,
    availability: 70,
    performance: 92,
    quality: 99,
    rejectCount: 340,
    timeline: [
      {
        start: "08:00",
        duration: 180,
        state: "Running",
        label: "Normal Production",
      },
      {
        start: "11:00",
        duration: 75,
        state: "Downtime",
        label: "Seamer Pressure Fault",
      },
      {
        start: "12:15",
        duration: 105,
        state: "Setup",
        label: "Tooling Adjustment",
      },
      {
        start: "14:00",
        duration: 80,
        state: "Downtime",
        label: "Sensor Alignment Issue",
      },
    ],
  },
  {
    id: "line-3",
    name: "Glass Line 3",
    type: "Mineral Water",
    batch: "Alps Alpine 750ml",
    status: "Running",
    statusDuration: "4h 10m",
    currentBph: 4420,
    targetBph: 4500,
    oee: 92,
    availability: 97,
    performance: 97,
    quality: 98,
    rejectCount: 45,
    timeline: [
      {
        start: "08:00",
        duration: 270,
        state: "Running",
        label: "Normal Production",
      },
      {
        start: "12:30",
        duration: 20,
        state: "Downtime",
        label: "Label Reel Change",
      },
      {
        start: "12:50",
        duration: 190,
        state: "Running",
        label: "Normal Production",
      },
    ],
  },
];

const SPEED_TREND = [
  { time: "08:00", Line1: 5800, Line2: 7900, Line3: 4400 },
  { time: "09:00", Line1: 5850, Line2: 8000, Line3: 4450 },
  { time: "10:00", Line1: 4100, Line2: 7850, Line3: 4400 },
  { time: "11:00", Line1: 5800, Line2: 0, Line3: 4420 },
  { time: "12:00", Line1: 5750, Line2: 0, Line3: 4100 },
  { time: "13:00", Line1: 5800, Line2: 0, Line3: 4410 },
  { time: "14:00", Line1: 5200, Line2: 0, Line3: 4420 },
  { time: "15:00", Line1: 5850, Line2: 0, Line3: 4430 },
];

export default function Machines() {
  const [selectedLineId, setSelectedLineId] = useState("all");
  const [compactView, setCompactView] = useState(false);

  // Compute overall plant metrics
  const plantMetrics = useMemo(() => {
    const totalBph = MACHINES_DATA.reduce((acc, m) => acc + m.currentBph, 0);
    const targetBph = MACHINES_DATA.reduce((acc, m) => acc + m.targetBph, 0);
    const avgOee = Math.round(
      MACHINES_DATA.reduce((acc, m) => acc + m.oee, 0) / MACHINES_DATA.length,
    );
    const runningLines = MACHINES_DATA.filter(
      (m) => m.status === "Running",
    ).length;
    return {
      totalBph,
      targetBph,
      avgOee,
      runningLines,
      totalLines: MACHINES_DATA.length,
    };
  }, []);

  const renderStatusBadge = (status: string, duration: string) => {
    switch (status) {
      case "Running":
        return (
          <span className={`${styles.badge} ${styles.badgeRunning}`}>
            <span className={styles.dotRunning} />
            Running ({duration})
          </span>
        );
      case "Downtime":
        return (
          <span className={`${styles.badge} ${styles.badgeDowntime}`}>
            <span className={styles.dotDowntime} />
            Downtime ({duration})
          </span>
        );
      default:
        return (
          <span className={`${styles.badge} ${styles.badgeSetup}`}>
            <span className={styles.dotSetup} />
            Setup / CIP
          </span>
        );
    }
  };

  return (
    <div className={styles.machinesPage}>
      {/* Top Metric Cards */}
      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <span className={styles.metricTitle}>Plant OEE</span>
          <div className={styles.metricBody}>
            <span className={styles.metricValue}>{plantMetrics.avgOee}%</span>
            <span className={styles.metricSubSuccess}>+1.5% vs avg</span>
          </div>
        </div>

        <div className={styles.metricCard}>
          <span className={styles.metricTitle}>Total Speed</span>
          <div className={styles.metricBody}>
            <span className={styles.metricValue}>
              {plantMetrics.totalBph.toLocaleString()}
            </span>
            <span className={styles.metricUnit}>BPH</span>
          </div>
        </div>

        <div className={styles.metricCard}>
          <span className={styles.metricTitle}>Active Production</span>
          <div className={styles.metricBody}>
            <span className={styles.metricValue}>
              {plantMetrics.runningLines}
            </span>
            <span className={styles.metricUnit}>
              / {plantMetrics.totalLines} Active
            </span>
          </div>
        </div>

        <div className={styles.metricCard}>
          <span className={styles.metricTitle}>Target Rate</span>
          <div className={styles.metricBody}>
            <span className={styles.metricValue}>
              {Math.round(
                (plantMetrics.totalBph / plantMetrics.targetBph) * 100,
              )}
              %
            </span>
            <span className={styles.metricUnit}>of capacity</span>
          </div>
        </div>
      </div>

      {/* Factory Lines Section */}
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h3>Factory Lines</h3>

          {/* Line Filter Selector */}
          <div className={styles.filterGroup}>
            <span>Filter:</span>
            <button
              onClick={() => setSelectedLineId("all")}
              className={`${styles.filterBtn} ${selectedLineId === "all" ? styles.filterActive : ""}`}
            >
              All Lines
            </button>
            {MACHINES_DATA.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedLineId(m.id)}
                className={`${styles.filterBtn} ${selectedLineId === m.id ? styles.filterActiveBlue : ""}`}
              >
                {m.name.split(" ")[0]} {m.name.split(" ")[2] || ""}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Minimal Machine Cards */}
        <div className={styles.linesGrid}>
          {MACHINES_DATA.map((machine) => {
            const isFilteredOut =
              selectedLineId !== "all" && selectedLineId !== machine.id;
            const speedPercentage = Math.round(
              (machine.currentBph / machine.targetBph) * 100,
            );

            if (isFilteredOut) return null;

            return (
              <div
                key={machine.id}
                onClick={() => setSelectedLineId(machine.id)}
                className={`${styles.machineCard} ${
                  selectedLineId === machine.id
                    ? styles.machineCardSelected
                    : ""
                }`}
              >
                {/* Card Top Header */}
                <div className={styles.machineCardTop}>
                  <div>
                    <h4>{machine.name}</h4>
                    <p>{machine.batch}</p>
                  </div>
                  {renderStatusBadge(machine.status, machine.statusDuration)}
                </div>

                {/* Main Speed Bar */}
                <div className={styles.speedSection}>
                  <div className={styles.speedHeader}>
                    <span>Speed (BPH)</span>
                    <span>
                      <strong>{machine.currentBph.toLocaleString()}</strong> /{" "}
                      {machine.targetBph.toLocaleString()}
                    </span>
                  </div>
                  <div className={styles.track}>
                    <div
                      className={`${styles.fill} ${
                        machine.status === "Downtime"
                          ? styles.fillDowntime
                          : speedPercentage >= 95
                            ? styles.fillSuccess
                            : styles.fillNormal
                      }`}
                      style={{ width: `${Math.min(speedPercentage, 100)}%` }}
                    />
                  </div>
                </div>

                {/* OEE Score Summary Footer */}
                <div className={styles.machineFooter}>
                  <div className={styles.oeeBlock}>
                    <span>OEE Score:</span>
                    <span
                      className={`${styles.oeeVal} ${
                        machine.oee >= 85
                          ? styles.textSuccess
                          : machine.oee >= 70
                            ? styles.textWarning
                            : styles.textDanger
                      }`}
                    >
                      {machine.oee}%
                    </span>
                  </div>

                  {!compactView && (
                    <div className={styles.metricsSub}>
                      <span>
                        A: <strong>{machine.availability}%</strong>
                      </span>
                      <span>
                        P: <strong>{machine.performance}%</strong>
                      </span>
                      <span>
                        Q: <strong>{machine.quality}%</strong>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Grid: Shift Timeline & Speed Trend Area Chart */}
      <div className={styles.bottomGrid}>
        {/* Shift Timeline Bar */}
        <div className={styles.timelineCard}>
          <div className={styles.cardHeader}>
            <div className={styles.titleWithIcon}>
              <Clock size={16} />
              <span>Shift Timeline (08:00 - 16:00)</span>
            </div>

            <div className={styles.legendGroup}>
              <span className={styles.legendItem}>
                <span className={styles.dotRunning} /> Running
              </span>
              <span className={styles.legendItem}>
                <span className={styles.dotDowntime} /> Downtime
              </span>
              <span className={styles.legendItem}>
                <span className={styles.dotSetup} /> Setup
              </span>
            </div>
          </div>

          <div className={styles.timelineContent}>
            <div className={styles.timeAxis}>
              <span>08:00</span>
              <span>10:00</span>
              <span>12:00</span>
              <span>14:00</span>
              <span>16:00</span>
            </div>

            {(selectedLineId === "all"
              ? MACHINES_DATA
              : MACHINES_DATA.filter((m) => m.id === selectedLineId)
            ).map((m) => (
              <div key={m.id} className={styles.timelineRow}>
                <div className={styles.timelineRowHeader}>
                  <span>{m.name}</span>
                  <span>{m.status}</span>
                </div>
                <div className={styles.timelineTrack}>
                  {m.timeline.map((evt, idx) => {
                    const totalMinutes = 480;
                    const widthPercent = (evt.duration / totalMinutes) * 100;
                    const stateClass =
                      evt.state === "Running"
                        ? styles.segRunning
                        : evt.state === "Downtime"
                          ? styles.segDowntime
                          : styles.segSetup;

                    return (
                      <div
                        key={idx}
                        title={`${evt.label} (${evt.duration} mins)`}
                        style={{ width: `${widthPercent}%` }}
                        className={`${styles.segment} ${stateClass}`}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speed Trend Area Chart */}
        <div className={styles.chartCard}>
          <div>
            <div className={styles.cardHeader}>
              <div className={styles.titleWithIcon}>
                <TrendingUp size={16} />
                <span>Speed Output Trend</span>
              </div>
              <span className={styles.badgeBph}>BPH</span>
            </div>

            <div className={styles.chartWrapper}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={SPEED_TREND}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#f1f5f9"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="time"
                    stroke="#94a3b8"
                    fontSize={10}
                    tickLine={false}
                  />
                  <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#003f5c",
                      borderRadius: "6px",
                      color: "#fff",
                      fontSize: "11px",
                      border: "none",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey={
                      selectedLineId === "line-2"
                        ? "Line2"
                        : selectedLineId === "line-3"
                          ? "Line3"
                          : "Line1"
                    }
                    stroke="#2ec4b6"
                    strokeWidth={2}
                    fill="#2ec4b6"
                    fillOpacity={0.15}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className={styles.chartFooter}>
            <span>
              Click any line card above to isolate its real-time trend
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
