// import myImage from './public/image.jpg';
import { Box, ChartColumnIncreasing, Milk } from "lucide-react";
import styles from "./TotalProduction.module.scss";
function TotalProduction() {
  const gridItems = [
    <>
      {/* <i
        key={1}
        className={styles.cardIcon + " fa-solid fa-table-cells-large"}></i> */}
      <Milk className={styles.cardIcon + " fa-solid fa-table-cells-large"} />
      <span key={2}>bottle</span>
    </>,
    <span key={3}>500k</span>,
    <>
      <Box className={styles.cardIcon + " fa-solid fa-table-cells-large"} />
      <span key={5}>pack</span>
    </>,
    <span key={6}>50k</span>,
    <>
      <ChartColumnIncreasing
        className={styles.cardIcon + " fa-solid fa-table-cells-large"}
      />
      <span key={8}>pallet</span>
    </>,
    <span key={9}>5k</span>,
  ];

  return (
    <div className={styles.totalProductionCntr}>
      <div className={styles.cntrHeader}>
        <i className="fa-solid fa-table-cells-large"></i>
        <span>Total Production</span>
      </div>
      <div className={styles.cntrBody}>
        {gridItems.map((item, index) => (
          <div className={styles.cntrBodyItem} key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TotalProduction;
