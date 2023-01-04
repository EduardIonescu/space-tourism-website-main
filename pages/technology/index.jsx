import data from "../../data.json";
import TechnologySection from "../../components/technology/technologySection";

export default function Technology() {
	const technologyData = data.technology;
	return (
		<main className="xl:mt-20 xl:ml-40">
			<h5
				className="font-normal text-[28px] tracking-[4.75px] text-white
	font-barlowCondensed uppercase"
			>
				<span className="font-bold opacity-25">03</span> space launch
				101
			</h5>
			<TechnologySection technologyData={technologyData} />
		</main>
	);
}
