import React from "react";
import { Container } from "./style";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, LabelList
} from 'recharts';

const data = [
  { name: "Jan", uv: 400, pv: 240, amt: 2400 },
  { name: "Feb", uv: 300, pv: 456, amt: 2400 },
  { name: "Mar", uv: 200, pv: 139, amt: 2400 },
  { name: "Apr", uv: 278, pv: 390, amt: 2400 },
  { name: "May", uv: 189, pv: 480, amt: 2400 },
];

const pieData = [
  { name: "Ganhos", value: 500 },
  { name: "Investimentos", value: 300 },
  { name: "Lançamentos", value: 300 },
  { name: "Gastos", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#e61a0b"];


const pieTimelineData = [
  { name: "Ganhos", start: 2020, duration: 2, role: "Ganhos" },
  { name: "Investimentos", start: 2022, duration: 1, role: "Investimentos" },
  { name: "Lançamentos", start: 2023, duration: 1, role: "Lançamentos" },
  { name: "Gastos", start: 2021, duration: 2, role: "Gastos" },
];

const enrichedPieTimelineData = pieTimelineData.map((d) => ({
  ...d,
  end: d.start + d.duration,
}));

const Dashboard: React.FC = () => {
  return (
    <Container>
      <div className="chart-container">
        <h2>Variações</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h2>Ganhos</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h2>Resumo mensal</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h2>Investimentos</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h2>DRE - Linha do Tempo (Resumo Financeiro)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={enrichedPieTimelineData}
            margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
          >
            <XAxis type="number" domain={[2020, 2025]} tickCount={6} />
            <YAxis dataKey="name" type="category" />
            <Tooltip
              formatter={(value, name, props) => {
                const start = props.payload.start;
                const end = props.payload.end;
                return [`${start} - ${end}`, "Período"];
              }}
            />
            <Bar dataKey="duration" fill="#00C49F">
              <LabelList dataKey="role" position="insideLeft" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
};

export default Dashboard;