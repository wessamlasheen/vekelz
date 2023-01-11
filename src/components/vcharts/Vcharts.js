import React from "react";
import "./vcharts.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Vcharts() {
  const data = [
    {
      name: "1PM",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "2PM",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "3PM",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "4PM",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "5PM",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "6PM",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "7PM",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="chart-box first-chart">
      <h3>
        Miles<span> statics</span>
      </h3>
      <div charts-data className="head-chart d-flex justify-content-between">
        <ul>
          <li className="active1">day</li>
          <li>week</li>
          <li>month</li>
        </ul>
        <h5 style={{ color: "#666" }}>256 miles</h5>
      </div>

      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>
    </div>
  );
}
export default Vcharts;
