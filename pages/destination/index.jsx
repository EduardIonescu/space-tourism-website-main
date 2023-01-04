import data from "../../data.json";
import DestinationSection from "../../components/destination/destinationSection";

export default function Destination() {
	const destinationData = data.destinations;
	return (
		<main className="md:mt-10 xl:mt-20 xl:ml-40">
			<h5
				className="font-normal md:text-[20px] md:tracking-[3.4px]
			xl:text-[28px] tracking-[4.75px] text-white
      font-barlowCondensed uppercase md:max-xl:ml-10"
			>
				<span className="font-bold opacity-25">01</span> pick your
				destination
			</h5>
			<DestinationSection destinationData={destinationData} />
		</main>
	);
}
