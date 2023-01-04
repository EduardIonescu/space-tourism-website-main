export default function DestinationNav({
	destinationData,
	selectedDestinationId,
	changeDestionationId,
}) {
	function isActive(index) {
		return index == selectedDestinationId;
	}
	return (
		<nav className="flex gap-9">
			{destinationData.map((destinationButton, i) => (
				<button
					key={destinationButton.name}
					onClick={() => changeDestionationId(i)}
					className={`font-barlowCondensed tracking-[2.7px] uppercase relative
              before:content-[''] before:absolute before:block before:w-full
              before:-bottom-3 before:h-[3px] before:left-0 before:bg-white
              before:scale-x-0 before:transition-transform before:duration-300
      ${
			isActive(i)
				? "text-white before:scale-x-100"
				: "text-veryLightBlue before:opacity-50 hover:before:scale-x-100"
		}`}
				>
					{destinationButton.name}
				</button>
			))}
		</nav>
	);
}
