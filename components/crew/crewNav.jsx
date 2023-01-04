export default function CrewNav({ crewData, selectedCrewId, changeCrewId }) {
	console.log(selectedCrewId);
	return (
		<nav className="flex xl:gap-6 absolute bottom-0">
			{crewData.map((crewMember, i) => (
				<button
					key={crewMember.name}
					onClick={() => changeCrewId(i)}
					className={`bg-white w-4 h-4 rounded-full ${
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
