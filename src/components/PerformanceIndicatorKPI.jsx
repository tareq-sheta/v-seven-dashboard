import { Flex, Progress } from "antd";

// import myImage from './public/image.jpg';
import { useAnimatedCounter } from "../services/hooks/useAnimateValues";
function PerformanceIndicatorKPI() {
  return (
    <div className="prfrmns_indctr_cntr">
      <div className="cntr-header">
        <i className="card_icon fa-solid fa-table-cells-large"></i>
        <span>Performance Indicator KPI</span>
      </div>
      <div className="kpi-content-cntr-body">
        <div className="kpi-content">
          <div className="kpi-content-item1">
            <Flex className="kpi-progressbar-cntr">
              <div>
                <Progress
                  size={73}
                  strokeColor="#FF9F1C"
                  type="circle"
                  percent={useAnimatedCounter(75).currentNumber}
                />
                <p>OEE</p>
              </div>
              <div>
                <Progress
                  size={73}
                  strokeColor="#00D1DE"
                  type="circle"
                  percent={useAnimatedCounter(75).currentNumber}
                />
                <p>SLE</p>
              </div>
              <div>
                <Progress
                  size={73}
                  strokeColor="#CA4E82"
                  type="circle"
                  percent={useAnimatedCounter(75).currentNumber}
                />
                <p>USLE</p>
              </div>
            </Flex>
          </div>
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

export default PerformanceIndicatorKPI;
