import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-stroke': (value) => ({
						'-webkit-text-stroke-width': value,
						'text-stroke-width': value,
					}),
				},
				{
					type: 'length',
					values: {
						'px': '1px',
					},
				}
			)
			matchUtilities(
				{
					'text-stroke': (value) => ({
						'-webkit-text-stroke-color': value,
						'text-stroke-color': value,
					}),
				},
				{
					type: 'color',
					values: theme('colors'),
				}
			)
		}),
	],
};
export default config;
