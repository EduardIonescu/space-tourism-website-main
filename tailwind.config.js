/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			barlow: ["Barlow, sans-serif"],
			barlowCondensed: ["Barlow Condensed, sans-serif"],
			bellefair: ["Bellefair, sans"],
		},
		extend: {},
	},
	plugins: [],
};
