import { Flex, Progress } from "antd";
import { useAnimatedCounter } from "../services/hooks/useAnimateValues";
function MachineKPIcard({ machineObj }) {
  return (
    <div
      style={{ width: "flex-grow" }}
      className="prfrmns_indctr_cntr machine-card">
      <div className="cntr-header">
        <i className="card_icon fa-solid fa-table-cells-large"></i>
        <span>{machineObj.name}</span>
      </div>
      <div className="kpi-content-cntr-body">
        <div className="kpi-content all-width">
          <div className="kpi-content-item2 all-width">
            <Flex vertical gap="small">
              <div className="kpi-progressbar-line">
                <Progress
                  percent={
                    useAnimatedCounter(machineObj.value1, 5000).currentNumber
                  }
                  strokeColor="#2C3E50"
                  size="small"
                />
                <p>Production</p>
              </div>
              <div className="kpi-progressbar-line">
                <Progress
                  percent={
                    useAnimatedCounter(machineObj.value2, 5000).currentNumber
                  }
                  strokeColor="#2C3E50"
                  size="small"
                />
                <p>Quality</p>
              </div>
              <div className="kpi-progressbar-line">
                <Progress
                  percent={
                    useAnimatedCounter(machineObj.value3, 5000).currentNumber
                  }
                  strokeColor="#2C3E50"
                  size="small"
                />
                <p>Quality</p>
              </div>
            </Flex>
          </div>
          {/* <div className="kpi-content-item2">111</div> */}
        </div>
      </div>
    </div>
  );
}

export default MachineKPIcard;
