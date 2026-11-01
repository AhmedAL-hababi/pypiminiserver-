import { useRef, useState, useEffect, useMemo } from "react";
import { GraphNode } from "../types/node";
import { calculateLayout } from "../utils/calculateLayout";

export function useGraphLayout(nodes: GraphNode[]) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(900);
  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([e]) => setWidth(Math.max(600, e.contentRect.width)));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  const layout = useMemo(() => calculateLayout(nodes, width), [nodes, width]);
  return { ref, width, layout };
}