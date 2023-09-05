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
                "ads-block": "url('/images/justice.jpg')",
            },
            colors: {
                black: "#000000",
                white: "#ffffff",
                blue: "#65dbb4",
                border: "#64bda0",
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
