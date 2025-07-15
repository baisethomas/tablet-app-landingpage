import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  safelist: [
    'bg-clip-text',
    'text-transparent',
    'bg-gradient-to-r',
    'bg-gradient-to-br',
    'from-primary-500',
    'to-info-500',
    'from-primary-50',
    'via-info-50',
    'to-white',
    'from-info-100',
    'via-primary-100',
    'to-bg-secondary',
    'from-primary-400',
    'to-info-400',
    'from-primary-900',
    'via-info-900',
    'from-primary-100',
    'to-info-600',
    'from-primary-600',
    'to-info-600',
    'from-primary-300',
    'to-primary-700',
    'from-info-500',
    'to-primary-500',
    'from-primary-100',
    'to-info-100',
    'from-primary-50',
    'to-info-50',
    'from-primary-200',
    'to-info-200',
    'from-primary-700',
    'to-info-700',
    'from-primary-800',
    'to-info-800',
    'from-primary-900',
    'to-info-900',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#4A6D8C", // calm blue
          foreground: "#FFFFFF",
          50: "#EEF1F4",
          100: "#D5DFE7",
          200: "#ABBFCF",
          300: "#819FB7",
          400: "#5E839F",
          500: "#4A6D8C", // base
          600: "#3B5770",
          700: "#2D4254",
          800: "#1E2C38",
          900: "#0F161C",
        },
        secondary: {
          DEFAULT: "#8A9BA8", // muted blue-gray
          foreground: "#FFFFFF",
          50: "#F4F6F7",
          100: "#E3E8EC",
          200: "#C7D1D9",
          300: "#ABBAC6",
          400: "#8A9BA8", // base
          500: "#6F8394",
          600: "#59697A",
          700: "#434F5B",
          800: "#2D353D",
          900: "#161A1E",
        },
        bg: {
          primary: "#FFFFFF", // background primary
          secondary: "#F5F7F9", // background secondary
        },
        text: {
          primary: "#333333", // text primary
          secondary: "#666666", // text secondary
        },
        success: {
          DEFAULT: "#4A8C6A", // muted green
          foreground: "#FFFFFF",
          50: "#EEF4F1",
          100: "#D5E7DD",
          200: "#ABCFBB",
          300: "#81B799",
          400: "#5E9F7C",
          500: "#4A8C6A", // base
          600: "#3B7055",
          700: "#2D5440",
          800: "#1E382A",
          900: "#0F1C15",
        },
        error: {
          DEFAULT: "#B55A5A", // muted red
          foreground: "#FFFFFF",
          50: "#F8EEEE",
          100: "#EDDADA",
          200: "#DBB5B5",
          300: "#C98F8F",
          400: "#B76A6A",
          500: "#B55A5A", // base
          600: "#914848",
          700: "#6D3636",
          800: "#482424",
          900: "#241212",
        },
        warning: {
          DEFAULT: "#D9A55A", // earth tone amber
          foreground: "#FFFFFF",
          50: "#FBF6EE",
          100: "#F5EAD8",
          200: "#EBD5B1",
          300: "#E1C08A",
          400: "#D9A55A", // base
          500: "#C99339",
          600: "#A1752E",
          700: "#795822",
          800: "#503A17",
          900: "#281D0B",
        },
        info: {
          DEFAULT: "#5A7DB5", // calm blue
          foreground: "#FFFFFF",
          50: "#EEF1F7",
          100: "#D8E0EC",
          200: "#B1C1D9",
          300: "#8AA2C6",
          400: "#5A7DB5", // base
          500: "#456497",
          600: "#375078",
          700: "#293C5A",
          800: "#1C283C",
          900: "#0E141E",
        },
        destructive: {
          DEFAULT: "#B55A5A",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F5F7F9",
          foreground: "#666666",
        },
        accent: {
          DEFAULT: "#5A7DB5",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#333333",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#333333",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        scale: {
          from: { transform: "scale(0.95)" },
          to: { transform: "scale(1)" },
        },
        "beta-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(74, 109, 140, 0.3), 0 0 40px rgba(74, 109, 140, 0.1)"
          },
          "50%": { 
            boxShadow: "0 0 30px rgba(74, 109, 140, 0.5), 0 0 60px rgba(74, 109, 140, 0.2)"
          },
        },
        "progress-fill": {
          "0%": { width: "0%" },
          "100%": { width: "78%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "pulse-soft": "pulse-soft 3s infinite ease-in-out",
        float: "float 3s infinite ease-in-out",
        scale: "scale 0.3s ease-out",
        "beta-glow": "beta-glow 2s infinite ease-in-out",
        "progress-fill": "progress-fill 2s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
