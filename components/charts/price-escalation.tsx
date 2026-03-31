"use client";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from "recharts";
import { pricing } from "@/lib/data";

const data = pricing.phases.map((p) => ({
  name: p.fase,
  precio: p.precio,
  label: p.label,
  status: p.status,
}));

const colors = ["#D4C5B2", "#A67C00", "#8B6914"];

export function PriceEscalation() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} margin={{ top: 30, right: 10, left: 10, bottom: 10 }}>
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#5A5A5A", fontSize: 12 }}
        />
        <YAxis hide domain={[4.5, 6]} />
        <Bar dataKey="precio" radius={[8, 8, 0, 0]} animationDuration={1500} animationBegin={300}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
          <LabelList
            dataKey="label"
            position="top"
            style={{ fill: "#2A2A2A", fontSize: 14, fontWeight: 600, fontFamily: "var(--font-dm-mono)" }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
