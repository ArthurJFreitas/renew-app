"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function CO2Chart({ data } : { data: { year: number; value: number }[] }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow border border-gray-600 hover:border-gray-400 transition">
      <h3 className="text-lg font-semibold mb-2">CO₂ Sequestration Trend</h3>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="year" />
            <YAxis name="tons" tickFormatter={(v) => `${v} t`} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#0ea5e9"
              strokeWidth={3}
              name="tons"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
