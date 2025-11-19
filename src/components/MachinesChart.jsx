import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// import "./MachineActivityChart.scss"; // Import your Sass file

// Sample Data (approximated from the image)
const data = [
  { name: "Jun 12", uv: 255 },
  { name: "Jun 13", uv: 260 },
  { name: "Jun 14", uv: 220 },
  { name: "Jun 15", uv: 200 },
  { name: "Jun 16", uv: 175 },
  { name: "Jun 17", uv: 155 },
  { name: "Jun 18", uv: 245 }, // Note: Data from Jun 12 repeats in the image, assuming a continuous or segmented time series.
  { name: "Jun 19", uv: 270 },
  { name: "Jun 20", uv: 295 },
  { name: "Jun 21", uv: 235 },
  { name: "Jun 22", uv: 220 },
  { name: "Jun 23", uv: 235 },
  { name: "Jun 24", uv: 245 },
  { name: "Jun 25", uv: 250 },
  { name: "Jun 26", uv: 225 },
];
function MachinesChart() {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <i className="fa-regular fa-gauge-max"></i>
        <h3 className="title">Machine Activity</h3>
      </div>
      <div className="chart-container">
        {/* ResponsiveContainer ensures the chart fills its parent div */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            {/* The horizontal grid lines */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#c3e7ff"
            />

            {/* X-Axis for the dates */}
            <XAxis
              dataKey="name"
              stroke="#5d85a0"
              tickLine={false}
              axisLine={false}
            />

            {/* Y-Axis for the values */}
            <YAxis
              domain={[100, 300]} // Set min/max to match the image's scale
              ticks={[100, 150, 200, 250, 300]}
              stroke="#5d85a0"
              tickLine={false}
              axisLine={false}
            />

            {/* Tooltip for displaying data on hover */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
              }}
              labelStyle={{ fontWeight: "bold" }}
            />

            {/* The main line series */}
            <Line
              type="monotone" // Creates the smooth, curvy line seen in the image
              dataKey="uv" // Corresponds to the 'uv' key in the data array
              stroke="#5d85a0" // Dark blue color for the line
              strokeWidth={2}
              dot={{ fill: "#5d85a0", r: 3 }} // Small dots at data points
              activeDot={{ r: 6, fill: "#5d85a0" }} // Larger dot on hover
              // Gradient fill to match the light blue area under the line
              fill="url(#colorUv)"
            />

            {/* Define a linear gradient for the area fill */}
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#c3e7ff" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#c3e7ff" stopOpacity={0} />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MachinesChart;
