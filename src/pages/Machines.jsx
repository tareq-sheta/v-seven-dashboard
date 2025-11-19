// import { Flex, Progress } from "antd";

import MachineKPIcard from "../components/MachineKPIcard";
import MachineProdictionCard from "../components/MachineProdictionCard";
import MachinesChart from "../components/MachinesChart";
// import PerformanceIndicatorKPI from "../components/PerformanceIndicatorKPI";

// import { useAnimatedCounter } from "../services/hooks/useAnimateValues";
let machineArr = [
  {
    id: 101,
    name: "Machine 1",
    value1: 50,
    value2: 70,
    value3: 10,
  },
  {
    id: 102,
    name: "Machine 2",
    value1: 25,
    value2: 30,
    value3: 20,
  },
  {
    id: 103,
    name: "Machine 3",
    value1: 36,
    value2: 20,
    value3: 35,
  },
  {
    id: 104,
    name: "Machine 4",
    value1: 90,
    value2: 10,
    value3: 41,
  },
  {
    id: 105,
    name: "Machine 5",
    value1: 41,
    value2: 90,
    value3: 14,
  },
];
function Machines() {
  return (
    <>
      <div className="machine-container">
        {machineArr.map((obj) => (
          <MachineKPIcard key={obj.id} machineObj={obj} />
        ))}

        {/* <div className="div2">
      </div>
      <div className="div3">
        <UsageKPI />
      </div>
      <div className="div4">
        <FactoryCharts />
      </div>
      <div className="div5">
        <CurrentActivity />
      </div> */}
      </div>
      <div className="machine-charts_production-container">
        <MachinesChart />
        <MachineProdictionCard />
      </div>
    </>
  );
}

export default Machines;
