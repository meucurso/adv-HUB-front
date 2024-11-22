import type { Config } from "tailwindcss"

export default {
	darkMode: ["class"],
	content: [
		"./src/components/**/*.{html,ts,tsx}",
		"./src/app/**/*.{html,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config
