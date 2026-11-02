import styles from "./WidgetContainer.module.scss";

interface WidgetContainerProps {
  children: React.ReactNode;
  title: string;
  icon?: React.ReactNode;
  width?: string;
  height?: string;
  verticalPadding?: string;
}

export default function WidgetContainer({
  children,
  title,
  icon,
  width = "100%",
  height = "100%",
  verticalPadding = "0px",
}: WidgetContainerProps) {
  return (
    <div
      className={styles.customActivityContainer}
      style={{
        width: width,
        height: height,
        paddingTop: verticalPadding,
        paddingBottom: verticalPadding,
      }}
    >
      <div className={styles.customTabsHeader}>
        <div className={styles.activityTitle}>
          {icon}
          <span style={{ marginLeft: icon ? "8px" : "0px" }}>{title}</span>
        </div>
      </div>

      <div className={styles.customTabsContent}>{children}</div>
    </div>
  );
}
