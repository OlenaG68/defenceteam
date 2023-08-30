import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "firs-block": "url('/images/first-block.jpg')",
            },
            colors: {
                black: "#000000",
                white: "#ffffff",
                blue: "#1E47FF",
                border: "rgba(30, 71, 255, 0.37)",
                gray: "#666",
            },
            container: {
                center: true,
            },
        },
    },
    plugins: [],
};
export default config;
