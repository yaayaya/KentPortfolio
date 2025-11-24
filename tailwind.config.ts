import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./tina/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                border: "hsl(var(--border))",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            fontSize: {
                hero: "var(--text-hero)",
                h1: "var(--text-h1)",
                h2: "var(--text-h2)",
                h3: "var(--text-h3)",
                "body-lg": "var(--text-body-lg)",
            },
            spacing: {
                section: "var(--spacing-section)",
                element: "var(--spacing-element)",
                gap: "var(--spacing-gap)",
            },
            maxWidth: {
                container: "var(--container-max)",
                content: "var(--content-max)",
            },
            animation: {
                "fade-in-up": "fadeInUp 0.6s ease-out",
                "fade-in": "fadeIn 0.6s ease-out",
                "scale-in": "scaleIn 0.5s ease-out",
                "slide-in-right": "slideInRight 0.4s ease-out",
            },
            keyframes: {
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                scaleIn: {
                    "0%": { opacity: "0", transform: "scale(0.95)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                slideInRight: {
                    "0%": { opacity: "0", transform: "translateX(20px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
            },
            transitionTimingFunction: {
                smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
            },
        },
    },
    plugins: [],
};
export default config;
