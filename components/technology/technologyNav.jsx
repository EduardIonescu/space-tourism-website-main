export default function TechnologyNav({
	technologyData,
	selectedTechnologyId,
	changeTechnologyId,
}) {
	return (
		<nav className="flex max-xl:mx-auto xl:flex-col gap-4 xl:gap-8">
			{technologyData.map((technology, i) => (
				<button
					key={technology.name}
					onClick={() => changeTechnologyId(i)}
					className={`rounded-full w-10 h-10 md:w-[60px] md:h-[60px] 
					xl:w-20 xl:h-20 font-bellefair first-of-type:pl-[2px]
					leading-[18px] tracking-[1px]
					md:text-[24px] md:leading-[28px] md:tracking-[1.5px]
					xl:text-[32px] xl:tracking-[2px] xl:leading-[36px]
					border-[1px] border-white/25 transition
          duration-300 ease-linear hover:border-white md:pl-1
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
