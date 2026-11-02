// import { Flex, Progress, Tooltip } from "antd";
import CustomProgBar from "../../../../components/CustomProgBar/CustomProgBar";
import styles from "./RouteChart.module.scss";

function RouteChart() {
  return (
    <>
      <div className={styles.routesChartsCntr}>
        <div className={styles.routesNamesCntr}>
          <div className={styles.routeOne}>Route 1</div>
          <div className={styles.routeTwo}>Route 2</div>
          <div className={styles.routeThree}>Route 3</div>
          <div className={styles.routeFour}>Route 4</div>
          <div className={styles.routeFive}>Route 5</div>
          <div className={styles.routeSix}>Route 6</div>
          <div className={styles.routeSeven}>Route 7</div>
          <div className={styles.routeEight}>Route 8</div>
        </div>
        <div className={styles.barOneCntr}>
          <CustomProgBar
            pos={90}
            width={100}
            sections={[10, 30]}
            colors={["#994F90", "#FFA600"]}
          />
        </div>
        <div className={styles.barTwoCntr}>
          <CustomProgBar
            pos={0}
            width={90}
            sections={[10, 10]}
            colors={["#00D3BE", "#FFA600"]}
          />
        </div>
        <div className={styles.barThreeCntr}>
          <CustomProgBar
            pos={30}
            width={450}
            sections={[10, 10, 10]}
            colors={["#26D395", "#FFA600", "#00CCF2"]}
            // colors={["#994F90", "#FFA600"]}
          />
        </div>
        <div className={styles.barFourCntr}>
          <CustomProgBar
            pos={0}
            width={450}
            sections={[10, 20, 20]}
            colors={["#634F8D", "#A0C73A", "#FFA600"]}
          />
        </div>
        <div className={styles.barFiveCntr}>
          <CustomProgBar
            pos={90}
            width={330}
            sections={[15, 20, 20]}
            colors={["#FB7644", "#00CCF2", "#26D395"]}
          />
        </div>
        <div className={styles.barSixCntr}>
          <CustomProgBar
            pos={30}
            width={200}
            sections={[5, 20]}
            colors={["#FB7644", "#994F90"]}
          />
        </div>
        <div className={styles.barSevenCntr}>
          <CustomProgBar
            pos={50}
            width={70}
            sections={[40, 10]}
            colors={["#A0C73A", "#FFA600"]}
          />
        </div>
        <div className={styles.barEightCntr}>
          <CustomProgBar
            pos={0}
            width={330}
            sections={[15, 20, 20]}
            colors={["#FB7644", "#00CCF2", "#26D395"]}
          />
        </div>
      </div>
      <div className={styles.chartTimeline}>
        <span>Today</span>
        <span>12-00</span>
        <span>12-30</span>
        <span>1-00</span>
        <span>1-30</span>
        <span>2-00</span>
        <span>2-30</span>
        <span>3-00</span>
        <span>3-30</span>
        <span>4-00</span>
        <span>4-30</span>
        <span>5-00</span>
        <span>5-30</span>
      </div>
    </>
  );
}

export default RouteChart;
