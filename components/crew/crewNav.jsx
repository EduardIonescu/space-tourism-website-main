export default function CrewNav({ crewData, selectedCrewId, changeCrewId }) {
	console.log(selectedCrewId);
	return (
		<nav
			className="inline-flex my-8 md:my-0 md:mt-10 xl:mt-0 -order-10
		 gap-4 xl:flex xl:gap-6 xl:absolute xl:bottom-0"
		>
			{crewData.map((crewMember, i) => (
				<button
					key={crewMember.name}
					onClick={() => changeCrewId(i)}
					className={`bg-white w-[10px] h-[10px] z-10 xl:w-4 xl:h-4 rounded-full ${
						i != selectedCrewId &&
						"opacity-[17%] hover:opacity-50 transition duration-300 ease-linear"
					}`}
				>
					<span className="sr-only">
						Change to crew member {crewMember.name}
					</span>
				</button>
			))}
		</nav>
	);
}
