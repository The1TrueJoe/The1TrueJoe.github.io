/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark:    "#030303",
        light:   "#e8e8e8",
        surface: "#0a0a0a",
        "surface-2": "#111111",
        "border-dim": "#1c1c1c",
        cyan:    "#33d2ff",
        green:   "#00ff41",
        red:     "#ff3366",
        amber:   "#ffaa00",
        blue:    "#33d2ff",
        purple:  "#9845e8",
        pink:    "#dd5789",
        gray:    "#444444",
        "mid-gray": "#666666",
        "light-gray": "#999999",
        "dark-gray":  "#1A1A1A",
      },
      fontFamily: {
        inter:  ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        mono:   ["ui-monospace", "'Cascadia Code'", "'Source Code Pro'", "Menlo", "Consolas", "monospace"],
      },
      boxShadow: {
        "brutal":    "3px 3px 0px #1c1c1c",
        "brutal-sm": "2px 2px 0px #1c1c1c",
        "brutal-cyan": "3px 3px 0px #33d2ff",
        "brutal-green": "3px 3px 0px #00ff41",
      },
    },
  },
  plugins: [],
};
