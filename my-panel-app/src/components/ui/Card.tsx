import { type HTMLAttributes } from "react";

export function Card({ className = "", ...p }: HTMLAttributes<HTMLDivElement>) {
  return <div {...p} className={`rounded-lg border border-border bg-surface ${className}`} />;
}