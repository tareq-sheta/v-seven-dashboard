import styles from "./PogressBar.module.scss";
type ProgressBarProps = {
  percent: number;
  strokeColor?: string;
  label?: string;
};
export default function ProgressBar({
  percent = 70,
  strokeColor = "#2C3E50",
  label,
}: ProgressBarProps) {
  return (
    <>
      <div>
        <div className={styles.linearProgressWrapper}>
          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{
                width: `${percent}%`,
                backgroundColor: strokeColor,
              }}></div>
          </div>
          <span className={styles.progressText}>{percent}%</span>
        </div>
        <p className={styles.circularLabel}>{label}</p>
      </div>
    </>
  );
}
