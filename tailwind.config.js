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
			backgroundImage: {
				bgHome: "/public/assets/home/background-home-desktop.jpg",
				bgDestination:
					"/public/assets/destination/background-destination-desktop.jpg",
				bgCrew: "/public/assets/crew/background-crew-desktop.jpg",
				bgTechnology:
					"/public/assets/technology/background-technology-desktop.jpg",
			},
		},
	},
	plugins: [],
};
