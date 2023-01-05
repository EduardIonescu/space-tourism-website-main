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
		extend: {
			colors: {
				veryLightBlue: "#D0D6F9",
				veryDarkBlue: "#0B0D17",
				grayBlue: "#383B4B",
			},
		},
	},
	plugins: [],
};
