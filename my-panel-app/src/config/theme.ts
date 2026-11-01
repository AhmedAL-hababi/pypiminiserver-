export type ThemeName = "dark" | "light";
export const setTheme = (t: ThemeName) => {
  if (t === "light") document.documentElement.setAttribute("data-theme", "light");
  else document.documentElement.removeAttribute("data-theme");
};