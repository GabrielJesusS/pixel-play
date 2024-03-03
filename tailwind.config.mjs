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
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          focus: "rgb(var(--color-primary-lighter) / <alpha-value>)",
          active: "rgb(var(--color-primary-darker) / <alpha-value>)",
          content: "rgb(var(--color-primary-content) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          focus: "rgb(var(--color-accent-lighter) / <alpha-value>)",
          active: "rgb(var(--color-accent-darker) / <alpha-value>)",
          content: "rgb(var(--color-accent-content) / <alpha-value>)",
        },
        basis: {
          DEFAULT: "rgb(var(--color-text) / <alpha-value>)",
          background: "rgb(var(--color-background) / <alpha-value>)",
          foreground: "rgb(var(--color-foreground) / <alpha-value>)",
          boundary: "rgb(var(--color-boundary) / <alpha-value>)",
        },
        error: {
          DEFAULT: "rgb(var(--color-state-error) / <alpha-value>)",
          focus: "rgb(var(--color-state-error-lighter) / <alpha-value>)",
          active: "rgb(var(--color-state-error-darker) / <alpha-value>)",
          content: "rgb(var(--color-state-error-content) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "rgb(var(--color-state-warning) / <alpha-value>)",
          focus: "rgb(var(--color-state-warning-lighter) / <alpha-value>)",
          active: "rgb(var(--color-state-warning-darker) / <alpha-value>)",
          content: "rgb(var(--color-state-warning-content) / <alpha-value>)",
        },
        info: {
          DEFAULT: "rgb(var(--color-state-info) / <alpha-value>)",
          focus: "rgb(var(--color-state-info-lighter) / <alpha-value>)",
          active: "rgb(var(--color-state-info-darker) / <alpha-value>)",
          content: "rgb(var(--color-state-info-content) / <alpha-value>)",
        },
        success: {
          DEFAULT: "rgb(var(--color-state-success) / <alpha-value>)",
          focus: "rgb(var(--color-state-success-lighter) / <alpha-value>)",
          active: "rgb(var(--color-state-success-darker) / <alpha-value>)",
          content: "rgb(var(--color-state-success-content) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
