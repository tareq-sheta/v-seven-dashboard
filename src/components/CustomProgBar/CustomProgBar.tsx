import styles from "./CustomProgBar.module.scss";
interface ChartCustomProgBarProps {
  pos: number;
  width: number;
  sections: number[];
  colors: string[];
}

const ChartCustomProgBar = ({
  width = 500,
  pos = 0,
  sections = [10, 20, 30],
  colors = ["#003f5c", "#58508d", "#bc5090"],
}: ChartCustomProgBarProps) => {
  const sum = [...sections].reduce((a, b) => a + b, 0);

  const percent1 = ((sections[0] ?? 0) / sum) * width;
  const percent2 = ((sections[1] ?? 0) / sum) * width;
  const percent3 = ((sections[2] ?? 0) / sum) * width;

  let appliedPos = pos;
  if (appliedPos > 100) {
    appliedPos = 100;
  }

  return (
    <div
      className={styles.customProgress}
      style={{
        width: `${width}px`,
        left: `calc(${appliedPos}% - ${appliedPos > 50 ? width : 0}px)`,
      }}
    >
      <span
        style={{ backgroundColor: colors[0], width: `${percent1}px` }}
      ></span>
      <span
        style={{ backgroundColor: colors[1], width: `${percent2}px` }}
      ></span>
      <span
        style={{ backgroundColor: colors[2], width: `${percent3}px` }}
      ></span>
    </div>
    // null
  );
};

export default ChartCustomProgBar;
