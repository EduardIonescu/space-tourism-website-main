import data from "../../data.json";
import CrewSection from "../../components/crew/crewSection";
export default function Crew() {
	const crewData = data.crew;
	return (
		<main className="md:mt-10 xl:mt-20 xl:ml-40">
			<h5
				className="font-normal md:text-[20px] md:tracking-[3.4px]
			xl:text-[28px] tracking-[4.75px] text-white
      font-barlowCondensed uppercase md:max-xl:ml-10"
			>
				<span className="font-bold opacity-25">02</span> meet your crew
			</h5>
			<CrewSection crewData={crewData} />
		</main>
	);
}
