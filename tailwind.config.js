/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  colors: {
    /* -------------------------
       AUT0FLIT TOKENS (namespaced)
       ------------------------- */
    af: {
      surface: {
        app: "#FAFAF9",
        homepage: "#EAF1EA",
        card: "#FFFFFF",
      },
      fill: {
        primary: "#FF6F61",
      },
      stroke: {
        border: "#E2E2DF",
      },
      text: {
        primary: "#2F2F2F",
        secondary: "#6A6A6A",
        muted: "#A0A0A0",
      },
    },

    /* -------------------------
       SHADCN SEMANTIC TOKENS 
       (connected to globals.css)
       ------------------------- */
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",

    card: {
      DEFAULT: "hsl(var(--card))",
      foreground: "hsl(var(--card-foreground))",
    },

    primary: {
      DEFAULT: "hsl(var(--primary))",
      foreground: "hsl(var(--primary-foreground))",
    },

    secondary: {
      DEFAULT: "hsl(var(--secondary))",
      foreground: "hsl(var(--secondary-foreground))",
    },

    muted: {
      DEFAULT: "hsl(var(--muted))",
      foreground: "hsl(var(--muted-foreground))",
    },

    popover: {
      DEFAULT: "hsl(var(--popover))",
      foreground: "hsl(var(--popover-foreground))",
    },

    accent: {
      DEFAULT: "hsl(var(--accent))",
      foreground: "hsl(var(--accent-foreground))",
    },

    destructive: {
      DEFAULT: "hsl(var(--destructive))",
      foreground: "hsl(var(--destructive-foreground))",
    },

    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",

    chart: {
      1: "hsl(var(--chart-1))",
      2: "hsl(var(--chart-2))",
      3: "hsl(var(--chart-3))",
      4: "hsl(var(--chart-4))",
      5: "hsl(var(--chart-5))",
    },
  },

  borderRadius: {
    lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
    sm: "calc(var(--radius) - 4px)",
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
