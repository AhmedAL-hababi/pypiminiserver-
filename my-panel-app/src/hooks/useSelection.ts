import { useState } from "react";

export function useSelection(initial: string | null) {
  const [selectedId, select] = useState<string | null>(initial);
  return { selectedId, select };
}