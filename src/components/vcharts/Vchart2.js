import "./vcharts.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
function Vchart2() {
  const data = [
    {
      name: "7AM",
      uv: 200,
      pv: 200,
      amt: 200,
    },
    {
      name: "8AM",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "9AM",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "1AM",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "2AM",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "3AM",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "4AM",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="chart-box first-chart">
      <h3>
        car<span> statics</span>
      </h3>
      <div charts-data className="head-chart d-flex justify-content-between">
        <h5 style={{ color: "#666" }}>20 feberuary 2022</h5>
        <ul>
          <li className="active2">day</li>
          <li>week</li>
          <li>month</li>
        </ul>
      </div>

      <AreaChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#f28539" fill="#fad8c0" />
      </AreaChart>
    </div>
  );
}
export default Vchart2;
