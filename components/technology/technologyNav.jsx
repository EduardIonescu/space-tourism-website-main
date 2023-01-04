export default function TechnologyNav({
	technologyData,
	selectedTechnologyId,
	changeTechnologyId,
}) {
	return (
		<nav className="flex flex-col xl:gap-8">
			{technologyData.map((technology, i) => (
				<button
					key={technology.name}
					onClick={() => changeTechnologyId(i)}
					className={`rounded-full xl:w-20 xl:h-20 font-bellefair tracking-[2px]
          text-[32px] leading-[36px] border-[1px] border-white/25 transition
          duration-300 ease-linear hover:border-white pl-1
          ${
				i == selectedTechnologyId
					? "border-white bg-white text-veryDarkBlue"
					: "border-white/25 text-white"
			}`}
				>
					{i + 1}
				</button>
			))}
		</nav>
	);
}
