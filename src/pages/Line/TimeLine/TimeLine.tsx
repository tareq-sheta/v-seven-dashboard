import styles from "./TimeLine.module.scss";

export type MachineState = "running" | "down" | "idle";

export type TimelineSegment = {
  id: string | number;
  state: MachineState;
  percentage: number; // Should be a value between 0 and 100
};

type StateTimelineProps = {
  lineName: string;
  segments: TimelineSegment[];
};

export default function Timeline({ lineName, segments }: StateTimelineProps) {
  // Split the line name by space to stack the text (e.g., "LINE" over "NAME")
  const [firstName, ...restNames] = lineName.split(" ");
  const secondName = restNames.join(" ");

  const getStateColorClass = (state: MachineState) => {
    switch (state) {
      case "running":
        return styles.stateRunning;
      case "down":
        return styles.stateDown;
      case "idle":
        return styles.stateIdle;
      default:
        return styles.stateIdle;
    }
  };

  return (
    <div className={styles.timelineContainer}>
      {/* Left side: Stacked Label */}
      <div className={styles.labelContainer}>
        <span>{firstName}</span>
        {secondName && <span>{secondName}</span>}
      </div>

      {/* Right side: Fluid Timeline Bar */}
      <div className={styles.barWrapper}>
        {segments.map((segment) => (
          <div
            key={segment.id}
            className={`${styles.segment} ${getStateColorClass(segment.state)}`}
            style={{ width: `${segment.percentage}%` }}
            title={`${segment.state.toUpperCase()} - ${segment.percentage}%`}
          />
        ))}
      </div>
    </div>
  );
}
