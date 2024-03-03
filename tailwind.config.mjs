import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "1.5rem",
      },
      screens: {
        "2xl": "70.5rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          focus: "var(--color-primary-lighter)",
          active: "var(--color-primary-darker)",
          content: "var(--color-primary-content)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          focus: "var(--color-accent-lighter)",
          active: "var(--color-accent-darker)",
          content: "var(--color-accent-content)",
        },
        basis: {
          DEFAULT: "var(--color-text)",
          background: "var(--color-background)",
          foreground: "var(--color-foreground)",
          boundary: "var(--color-boundary)",
        },
        error: {
          DEFAULT: "var(--color-error)",
          focus: "var(--color-error-lighter)",
          active: "var(--color-error-darker)",
          content: "var(--color-error-content)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
          focus: "var(--color-warning-lighter)",
          active: "var(--color-warning-darker)",
          content: "var(--color-warning-content)",
        },
        info: {
          DEFAULT: "var(--color-info)",
          focus: "var(--color-info-lighter)",
          active: "var(--color-info-darker)",
          content: "var(--color-info-content)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          focus: "var(--color-success-lighter)",
          active: "var(--color-success-darker)",
          content: "var(--color-success-content)",
        },
      },
    },
  },
  plugins: [],
};
