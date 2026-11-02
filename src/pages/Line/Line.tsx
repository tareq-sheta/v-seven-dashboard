// // import MachineKPIcard from "../Machines/MachineKpiCard/MachineKPIcard";
// // import CurrentActivity from "../Factory/CurrentActivity/CurrentActivity";
// // import LossTree from "./LossTree/LossTree";
// import WidgetContainer from "../../components/WidgetContainer/WidgetContainer";
// import { LossTreeData } from "./LossTree/LossTree";
// import Timeline from "./TimeLine/TimeLine";
// import LineTotalProduction from "./LineTotalProduction/LineTotalProduction";
// import PowerKPI from "./PowerKPI/PowerKPI";
// import styles from "./Line.module.scss";

// // Reusing some mock data for the line's machines
// const lineMachines = [
//   { id: 1, name: "Filler Unit", value1: 85, value2: 90, value3: 12 },
//   { id: 2, name: "Capper Unit", value1: 92, value2: 95, value3: 5 },
//   { id: 3, name: "Labeler Unit", value1: 78, value2: 88, value3: 22 },
// ];

// function Line() {
//   return (
//     <div className={styles.oneLineCntr}>
//       {/* 1. Machine Level KPIs for this specific line */}
//       {/* <div
//         style={{
//           display: "flex",
//           gap: "18px",
//           overflowX: "auto",
//           paddingBottom: "10px",
//         }}>
//         {lineMachines.map((machine) => (
//           <MachineKPIcard key={machine.id} machineObj={machine} />
//         ))}
//       </div> */}

//       {/* 2. The relocated Loss Tree / Route / Function tabs */}
//       {/* <div style={{ flexGrow: 1, marginTop: "10px" }}> */}
//       {/* <LossTree /> */}
//       <div className={styles.widgetsContainer}>
//         <LineTotalProduction
//           targetRate={5000}
//           targetUnit="bph"
//           actualProduction={7000}
//           actualUnit="KM"
//           yieldPercentage={75}
//         />
//         <LineTotalProduction
//           targetRate={5000}
//           targetUnit="bph"
//           actualProduction={7000}
//           actualUnit="KM"
//           yieldPercentage={75}
//         />
//         <PowerKPI
//           targetRate={5000}
//           units={["KW", ""]}
//           actualProduction={7000}
//           yieldPercentage={75}
//         />
//       </div>
//       <WidgetContainer
//         title="Current Activity"
//         icon="fa-solid fa-table-cells-large">
//         <LossTreeData />
//       </WidgetContainer>
//       <WidgetContainer title="Time Line" icon="fa-solid fa-table-cells-large">
//         <Timeline
//           lineName="FILLER MACHINE 1"
//           segments={[
//             { id: 1, state: "running", percentage: 75 },
//             { id: 2, state: "down", percentage: 15 },
//             { id: 3, state: "idle", percentage: 10 },
//           ]}
//         />
//       </WidgetContainer>
//       {/* </div> */}
//     </div>
//   );
// }

// export default Line;
//----------
// import TotalProduction from "./TotalProduction/TotalProduction";
// import PerformanceIndicatorKPI from "./PerformanceIndicatorKPI/PerformanceIndicatorKPI";
// import UsageKPI from "./UsageKPI/UsageKPI";
// import CurrentActivity from "../components/CurrentActivity";
// import FactoryCharts from "./FactoryCharts/FactoryCharts";
// import CurrentActivity from "./CurrentActivity/CurrentActivity";
import { Activity, ArrowDown } from "lucide-react";
import FactoryOrLineCharts from "../../components/FactoryOrLineCharts/FactoryOrLineCharts";
import WidgetContainer from "../../components/WidgetContainer/WidgetContainer";
import styles from "./Line.module.scss";
import LinePerformanceIndicatorKPI from "./LinePerformanceIndicatorKPI/LinePerformanceIndicatorKPI";
import LineTotalProduction from "./LineTotalProduction/LineTotalProduction";
import { LossTreeData } from "./LossTree/LossTree";
// import LossTree from "./LossTree/LossTree";
import PowerKPI from "./PowerKPI/PowerKPI";
import Timeline from "./TimeLine/TimeLine";
// import Timeline from "./TimeLine/TimeLine";
// import CurrentActivity from "./CurrentActivity/CurrentActivity";

function Line() {
  return (
    <div className={styles.oneLineCntr}>
      <div className={styles.div1}>{<LineTotalProduction />}</div>
      <div className={styles.div2}>{<LinePerformanceIndicatorKPI />}</div>
      <div className={styles.div3}>{<PowerKPI />}</div>
      <div className={styles.div4}>{<FactoryOrLineCharts />}</div>
      <div className={styles.div5}>
        <WidgetContainer
          title="Loss Tree"
          icon={<ArrowDown />}
          verticalPadding="2px">
          <LossTreeData />
        </WidgetContainer>
      </div>
      <div className={styles.div6}>
        <WidgetContainer title="Time Line" icon={<Activity />}>
          <Timeline
            lineName="FILLER MACHINE 1"
            segments={[
              { id: 1, state: "running", percentage: 75 },
              { id: 2, state: "down", percentage: 15 },
              { id: 3, state: "idle", percentage: 10 },
            ]}
          />
        </WidgetContainer>
      </div>
    </div>
  );
}

export default Line;

//----------
