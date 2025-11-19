import { Flex, Progress } from "antd";
import { useAnimatedCounter } from "../services/hooks/useAnimateValues";

function MachineProdictionCard({
  productionRate = "",
  productionUnit = "",
  actualProduction = "",
  actualUnit = "",
  safeYield = "",
}) {
  return (
    <div className="machine-production-card">
      <div className="card-header">
        <i className="fa-regular fa-gauge-max"></i>
        <h3 className="title">Machine Production</h3>
      </div>
      <div className="card-content">
        <div className="production-entry">
          <div className="production-values">
            <div className="value-item">
              <span className="main-value">{productionRate}</span>
              <span className="unit">{productionUnit}</span>
              <p className="description">production /h</p>
            </div>
            <div className="value-item">
              <span className="main-value">{actualProduction}</span>
              <span className="unit">{actualUnit}</span>
              <p className="description">Actual Production</p>
            </div>
          </div>
          {/* <div className="progress-section">
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${safeYield}%` }}></div>
            </div>
            <span className="progress-percentage">{safeYield}%</span>
            <p className="progress-label">Production Yield</p>
          </div> */}
          <div
            style={{
              width: 189,
              display: "flex",
              justifyContent: "space-between",
            }}>
            <span>Production Yield</span>
            <span>Production Yield</span>
          </div>
          <Flex vertical gap="small" style={{ width: 189 }}>
            <div className="kpi-progressbar-line">
              <Progress
                percent={useAnimatedCounter(50, 5000).currentNumber}
                strokeColor="#2C3E50"
                size="small"
              />
              <p>Production Yield</p>
            </div>
            <div className="kpi-progressbar-line">
              <Progress
                percent={useAnimatedCounter(75, 5000).currentNumber}
                strokeColor="#2C3E50"
                size="small"
              />
              <p>Production Yield</p>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
}

export default MachineProdictionCard;
