import { FileText } from "lucide-react";
import styles from "./Reports.module.scss";
import CircularProgress from "../../components/CircularProgess/CircularProgess";
import WidgetContainer from "../../components/WidgetContainer/WidgetContainer";
import { useAnimatedCounter } from "../../services/hooks/useAnimateValues";

type MetricItem = {
  label: string;
  value: number;
  percent: number;
  color?: string;
};

// 1. New Sub-component to safely handle the custom Hook animation per item
function MetricItemCard({ metric }: { metric: MetricItem }) {
  const animatedPercent = useAnimatedCounter(metric.percent).currentNumber;

  return (
    <div className={styles.metricColumn}>
      <span className={styles.metricLabel}>{metric.label}</span>
      <span className={styles.metricValue}>
        {metric.value.toLocaleString()}
      </span>
      <CircularProgress percent={animatedPercent} strokeColor={metric.color} />
    </div>
  );
}

export default function Reports() {
  const reportsData = [
    {
      title: "Shift A - Production Summary Report",
      metrics: [
        {
          label: "Total Production",
          value: 50000,
          percent: 75,
          color: "#003f5c",
        },
        {
          label: "Actual Production",
          value: 50000,
          percent: 75,
          color: "#2ec4b6",
        },
        {
          label: "Target Production",
          value: 50000,
          percent: 85,
          color: "#003f5c",
        },
        {
          label: "Final Production",
          value: 50000,
          percent: 75,
          color: "#2ec4b6",
        },
        {
          label: "Losses Production",
          value: 1200,
          percent: 12,
          color: "#e31837",
        },
      ],
    },
    {
      title: "Shift B - Performance & Yield Report",
      metrics: [
        {
          label: "Total Production",
          value: 48500,
          percent: 82,
          color: "#003f5c",
        },
        {
          label: "Actual Production",
          value: 47200,
          percent: 80,
          color: "#2ec4b6",
        },
        {
          label: "Target Production",
          value: 50000,
          percent: 90,
          color: "#003f5c",
        },
        {
          label: "Final Production",
          value: 46800,
          percent: 79,
          color: "#2ec4b6",
        },
        {
          label: "Losses Production",
          value: 1400,
          percent: 14,
          color: "#e31837",
        },
      ],
    },
    {
      title: "Daily Factory Consolidated Report",
      metrics: [
        {
          label: "Total Production",
          value: 98500,
          percent: 78,
          color: "#003f5c",
        },
        {
          label: "Actual Production",
          value: 95000,
          percent: 75,
          color: "#2ec4b6",
        },
        {
          label: "Target Production",
          value: 100000,
          percent: 88,
          color: "#003f5c",
        },
        {
          label: "Final Production",
          value: 93500,
          percent: 74,
          color: "#2ec4b6",
        },
        {
          label: "Losses Production",
          value: 2600,
          percent: 15,
          color: "#e31837",
        },
      ],
    },
  ];

  return (
    <div className={styles.reportsPage}>
      <div className={styles.reportsContainer}>
        {reportsData.map((report, idx) => (
          // Added missing unique key to the parent layout loop
          <WidgetContainer
            key={idx}
            title={report.title}
            icon={<FileText size={18} />}
          >
            <div className={styles.metricsGrid}>
              {report.metrics.map((m, mIdx) => (
                <MetricItemCard key={mIdx} metric={m} />
              ))}
            </div>
          </WidgetContainer>
        ))}
      </div>
    </div>
  );
}
