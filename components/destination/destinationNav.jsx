export default function DestinationNav({
	destinationData,
	selectedDestinationId,
	changeDestionationId,
}) {
	function isActive(index) {
		return index == selectedDestinationId;
	}
	return (
		<nav
			className="flex justify-center xl:justify-start gap-7 md:gap-9 
		md:max-xl:pb-2"
		>
			{destinationData.map((destinationButton, i) => (
				<button
					key={destinationButton.name}
					onClick={() => changeDestionationId(i)}
					className={`font-barlowCondensed  uppercase relative
							text-[14px] md:text-base tracking-[2.35px] md:tracking-[2.7px]
              before:content-[''] before:absolute before:block before:w-full
              before:-bottom-2 md:before:-bottom-3 before:h-[3px] before:left-0
              before:scale-x-0 before:transition-transform before:duration-300
							before:bg-white
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
