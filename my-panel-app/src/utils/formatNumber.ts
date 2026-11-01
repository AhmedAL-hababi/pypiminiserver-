export const formatNumber = (n: number) =>
  new Intl.NumberFormat("en", { notation: "compact" }).format(n);