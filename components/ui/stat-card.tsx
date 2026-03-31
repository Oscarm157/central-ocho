"use client";

import { AnimatedCounter } from "./animated-counter";

interface StatCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  dark?: boolean;
  animate?: boolean;
  decimals?: number;
}

export function StatCard({ value, label, prefix = "", suffix = "", dark = false, animate = true, decimals = 0 }: StatCardProps) {
  return (
    <div className={`rounded-xl px-6 py-6 sm:py-8 text-center ${
      dark ? "bg-charcoal text-white" : "bg-card"
    }`}>
      <div className={`font-mono text-3xl sm:text-4xl md:text-5xl font-medium ${
        dark ? "text-primary-light" : "text-primary"
      }`}>
        {animate ? (
          <AnimatedCounter target={value} prefix={prefix} suffix={suffix} decimals={decimals} />
        ) : (
          <span>{prefix}{value}{suffix}</span>
        )}
      </div>
      <p className={`mt-2 text-sm sm:text-base ${dark ? "text-white/60" : "text-muted"}`}>{label}</p>
    </div>
  );
}
