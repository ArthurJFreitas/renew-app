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

export default function VegetationChart({
  data,
}: {
  data: { month: string; value: number }[];
}) {
  const newData = data.map((item) => ({
    month: item.month,
    value: Math.round(item.value * 10000) / 100,
  }));

  return (
    <div className="bg-white p-4 rounded-xl shadow border border-gray-600 hover:border-gray-400 transition">
      <h3 className="text-lg font-semibold mb-2">Vegetation Health (%)</h3>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={newData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(v) => `${v}%`} />
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
            <Line
            name="health"
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
