import { useState } from "react";
import { ZOOM } from "../config/constants";

export function useZoom() {
  const [scale, setScale] = useState(ZOOM.initial);
  const clamp = (v: number) => Math.min(ZOOM.max, Math.max(ZOOM.min, v));
  return {
    scale,
    zoomIn: () => setScale((s) => clamp(s + ZOOM.step)),
    zoomOut: () => setScale((s) => clamp(s - ZOOM.step)),
  };
}