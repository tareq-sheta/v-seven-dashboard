import { Flex, Progress } from "antd";
import CountUp from "react-countup";

import { useAnimatedCounter } from "../services/hooks/useAnimateValues";

function DashBoardSlice({
  valuesObj = { value1: 5000, value2: 20000, value3: 20, value4: 5 },
}) {
  // let values = [{ value1: 5000, value2: 20000, value3: 20, value4: 5 }];
  return (
    <div className="card">
      <h1 className="primary-header">Primary Header</h1>
      <div className="secondary-header-cont">
        <div className="secondary-header">
          <i className="fa-regular fa-gauge-max"></i>
          <span>Actual speed</span>
        </div>
        <div className="secondary-header">
          <span className="val">
            <CountUp start={0} end={valuesObj.value1} duration={1} />
          </span>
          <span className="unt">L/s</span>
        </div>
        <div className="secondary-header">
          <i className="fa-regular fa-gear"></i>
          <span>Actual production</span>
        </div>
        <div className="secondary-header">
          <span className="val">
            <CountUp start={0} end={valuesObj.value2} duration={1} />
          </span>
          <span className="unt">s</span>
        </div>
        <div className="secondary-header">
          <i className="fa-regular fa-arrow-rotate-right"></i>
          <span>Last hour cycle time</span>
        </div>
        <div className="secondary-header">
          <span className="val">
            <CountUp start={0} end={valuesObj.value3} duration={1} />
          </span>
          <span className="unt">s</span>
        </div>
        <div className="secondary-header">
          <i className="fa-solid fa-wave-pulse"></i>
          <span>Ratio of active lines</span>
        </div>
        <div className="secondary-header">
          <span
            className="val"
            style={{
              marginLeft: "19px",
            }}>{`${valuesObj.value4}:${valuesObj.value4}`}</span>
        </div>
      </div>
      <div className="line"></div>
      <Flex className="progressbar-cntr">
        <div>
          <Progress
            size={60}
            strokeColor="#FF9F1C"
            type="circle"
            percent={useAnimatedCounter(75).currentNumber}
          />

          <p>OEE</p>
        </div>
        <div>
          <Progress
            size={60}
            strokeColor="#00D1DE"
            type="circle"
            percent={useAnimatedCounter(75).currentNumber}
          />

          <p>SLE</p>
        </div>
        <div>
          <Progress
            size={60}
            strokeColor="#CA4E82"
            type="circle"
            percent={useAnimatedCounter(75).currentNumber}
          />

          <p>USLE</p>
        </div>
      </Flex>

      <div className="secondary-header-cont">
        <div className="secondary-header">
          <i className="fa-regular fa-chart-column"></i>
          <span>Producton volume</span>
        </div>
        <div className="secondary-header">
          <span className="val">
            <CountUp start={0} end={valuesObj.value3} duration={1} />
          </span>
          <span className="unt">L</span>
        </div>
        <div className="secondary-header">
          <i className="fa-sharp fa-light fa-award"></i>
          <span>Producton quality</span>
        </div>
        <div className="secondary-header">
          <span className="val">
            <CountUp start={0} end={valuesObj.value1} duration={1} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default DashBoardSlice;
