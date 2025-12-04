"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function SoilMoistureChart({ data } : { data: { month: string; moisture: number }[] }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow border border-gray-600 hover:border-gray-400 transition">
      <h3 className="text-lg font-semibold mb-2">Soil Moisture (%)</h3>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="moisture" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor="#3b82f6" stopOpacity={0.7} />
                <stop offset="90%" stopColor="#3b82f6" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="moisture"
              stroke="#3b82f6"
              fill="url(#moisture)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
