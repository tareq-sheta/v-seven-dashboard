import styles from "./CircularProgess.module.scss";
// type CircularProgressProps = {
//   percent: number;
//   size?: number;
//   strokeColor?: string;
//   label?: string;
// };
interface CircularProgressProps {
  percent: number;
  strokeColor?: string | undefined; // Add the '?' to make it optional
  size?: number;
  label?: string;
}
export default function CircularProgress({
  percent = 70,
  size = 73,
  strokeColor = "#FF9F1C",
  label,
}: CircularProgressProps) {
  const strokeWidth = 5;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className={styles.circularItem}>
      <div className={styles.circularWrapper}>
        <div
          className={styles.svgContainer}
          style={{ width: size, height: size }}
        >
          <svg width={size} height={size}>
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="transparent"
              stroke="#f0f2f5"
              strokeWidth={strokeWidth}
            />
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="transparent"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                transition: "stroke-dashoffset 0.5s ease 0s",
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
            />
          </svg>
          <div className={styles.circularText}>{percent}%</div>
        </div>
      </div>

      <p className={styles.circularLabel}>{label}</p>
    </div>
  );
}
