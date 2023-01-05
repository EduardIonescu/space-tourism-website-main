export const styles = {
	bmCrossButton: {
		right: 22,
		top: 26,
	},
	bmCross: {
		height: 24,
		right: 0,
	},
	// Couldn't find the className for menuWrap
	bmMenuWrap: {
		position: "fixed",
		right: 0,
		top: 0,
		height: "100%",
	},

	// bg doesnt get changed inside className for some reason
	bmOverlay: {
		background: "rgba(0, 0, 0, 0)",
	},
};

export const links = [
	{
		address: "/",
		index: "00",
		text: "HOME",
	},
	{
		address: "/destination",
		index: "01",
		text: "DESTINATION",
	},
	{
		address: "/crew",
		index: "02",
		text: "CREW",
	},
	{
		address: "/technology",
		index: "03",
		text: "TECHNOLOGY",
	},
];
