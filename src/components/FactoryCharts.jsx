import { ResponsiveContainer, AreaChart, Area } from "recharts";
// import {
//   chartColorOne,
//   chartColorTwo,
//   chartColorThree,
// } from "../sass/abstracts/variables";
const data = [
  { name: "1", seconds: 0 },
  { name: "2", seconds: 500 },
  { name: "3", seconds: 200 },
  { name: "4", seconds: 600 },
  { name: "5", seconds: 100 },
  { name: "6", seconds: 250 },

  { name: "7", seconds: 0 },

  // { name: "10", seconds: 4500 },
  // { name: "11", seconds: 5000 },
  // { name: "12", seconds: 5500 },
  // { name: "13", seconds: 6000 },
];
function FactoryCharts() {
  return (
    <div className="factory_charts_cntr">
      <div className="factory_chart">
        <div className="factory_chart_header">
          <i className="coloredCyrcle colorYelow"></i>
          <span className="bold">Cycle Time</span>
          <span>[seconds]</span>
        </div>
        <div className="factory_chart_body">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={300} height={300} data={data}>
              {/* <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip /> */}
              <Area
                type="monotone"
                dataKey="seconds"
                stroke="#FF9F1C"
                strokeWidth={5}
                fill="#FF9F1C33"
                // fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="factory_chart_footer">
            <div className="footer-item-one">
              <span>Avg.</span>
              <span>1.0</span>
            </div>
            <div className="footer-item-two">
              <i className="fa-regular fa-angle-down"></i>
              <span>Min.</span>
              <span>0.5</span>
            </div>
            <div className="footer-item-three">
              <i className="fa-regular fa-angle-up"></i>
              <span>Max.</span>
              <span>2.0</span>
            </div>
          </div>
        </div>
      </div>
      <div className="factory_chart">
        <div className="factory_chart_header">
          <i className="coloredCyrcle colorOrange"></i>
          <span className="bold">Speed</span>
          <span>[pbh]</span>
        </div>
        <div className="factory_chart_body">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={300} height={300} data={data}>
              {/* <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip /> */}
              <Area
                type="monotone"
                dataKey="seconds"
                stroke="#CA4E82"
                strokeWidth={5}
                fill="#CA4E8233"
                // fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="factory_chart_footer">
            <div className="footer-item-one">
              <span>Avg.</span>
              <span>1.0</span>
            </div>
            <div className="footer-item-two">
              <i className="fa-regular fa-angle-down"></i>
              <span>Min.</span>
              <span>0.5</span>
            </div>
            <div className="footer-item-three">
              <i className="fa-regular fa-angle-up"></i>
              <span>Max.</span>
              <span>2.0</span>
            </div>
          </div>
        </div>
      </div>
      <div className="factory_chart">
        <div className="factory_chart_header">
          <i className="coloredCyrcle colorGreen"></i>
          <span className="bold">UPTIME</span>
          <span>[bottle]</span>
        </div>
        <div className="factory_chart_body">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={300} height={300} data={data}>
              {/* <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip /> */}
              <Area
                type="monotone"
                dataKey="seconds"
                stroke="#2EC4B6"
                strokeWidth={5}
                fill="#2EC4B633"
                // fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="factory_chart_footer">
            <div className="footer-item-one">
              <span>Avg.</span>
              <span>1.0</span>
            </div>
            <div className="footer-item-two">
              <i className="fa-regular fa-angle-down"></i>
              <span>Min.</span>
              <span>0.5</span>
            </div>
            <div className="footer-item-three">
              <i className="fa-regular fa-angle-up"></i>
              <span>Max.</span>
              <span>2.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FactoryCharts;
