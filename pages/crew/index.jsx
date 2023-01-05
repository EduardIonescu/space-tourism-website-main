import Head from "next/head";
import data from "../../data.json";
import CrewSection from "../../components/crew/crewSection";

export default function Crew() {
	const crewData = data.crew;
	return (
		<>
			<Head>
				<title>Crew</title>
				<meta name="description" content="Space Tourism App" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<main className="md:mt-10 xl:mt-20 xl:ml-40">
				<h5
					className="text-center md:text-left font-normal tracking-[2.7px]
				md:text-[20px]
				 md:tracking-[3.4px] xl:text-[28px] xl:tracking-[4.75px] text-white
      font-barlowCondensed uppercase md:max-xl:ml-10"
				>
					<span className="font-bold opacity-25 mr-2 xl:mr-4">
						02
					</span>{" "}
					meet your crew
				</h5>
				<CrewSection crewData={crewData} />
			</main>
		</>
	);
}
