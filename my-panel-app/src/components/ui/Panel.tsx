import { type HTMLAttributes } from "react";

export function Panel({ className = "", ...p }: HTMLAttributes<HTMLElement>) {
  return <aside {...p} className={`flex flex-col gap-4 rounded-xl border border-border bg-surface/90 p-4 ${className}`} />;
}