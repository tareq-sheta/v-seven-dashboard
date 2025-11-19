import { Flex, Progress } from "antd";

// import myImage from './public/image.jpg';
import { useAnimatedCounter } from "../services/hooks/useAnimateValues";
function MachineName() {
  return (
    <div className="machine_cntr">
      <div className="cntr-header">
        <i className="card_icon fa-solid fa-table-cells-large"></i>
        <span>Machine Name</span>
      </div>
      <div className="kpi-content-cntr-body">
        <div className="kpi-content">
          <div className="kpi-content-item2">
            <Flex vertical gap="small" style={{ width: 189 }}>
              <div className="kpi-progressbar-line">
                <Progress
                  percent={useAnimatedCounter(50, 5000).currentNumber}
                  strokeColor="#2C3E50"
                  size="small"
                />
                <p>Production</p>
              </div>
              <div className="kpi-progressbar-line">
                <Progress
                  percent={useAnimatedCounter(75, 5000).currentNumber}
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

export default MachineName;
