export default function TechnologyNav({
	technologyData,
	selectedTechnologyId,
	changeTechnologyId,
}) {
	return (
		<nav className="flex md:max-xl:mx-auto xl:flex-col gap-4 xl:gap-8">
			{technologyData.map((technology, i) => (
				<button
					key={technology.name}
					onClick={() => changeTechnologyId(i)}
					className={`rounded-full w-[60px] h-[60px] xl:w-20 xl:h-20 
					font-bellefair text-[24px] leading-[28px] tracking-[1.5px]
					xl:text-[32px] xl:tracking-[2px] xl:leading-[36px]
					border-[1px] border-white/25 transition
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
