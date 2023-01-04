import { useState } from "react";
import Image from "next/image";
import CrewNav from "./crewNav";
export default function CrewSection({ crewData }) {
	const [selectedCrewId, setSelectedCrewId] = useState(0);
	const selectedCrew = crewData[selectedCrewId];
	const crewURL = selectedCrew.images.png.slice(1);

	function changeCrewId(index) {
		setSelectedCrewId(index);
	}
	console.log(selectedCrew);
	return (
		<>
			<section className=" xl:mt-36 xl:max-w-[620px] xl:h-[405px] xl:relative">
				<h4
					className="uppercase text-white opacity-50 font-bellefair font-normal
      xl:text-[2rem] xl:leading-[37px]"
				>
					{selectedCrew.role}
				</h4>
				<h3
					className="uppercase font-bellefair font-normal xl:text-[56px] text-white
      xl:leading-[64px] xl:mt-4 xl:mb-7"
				>
					{selectedCrew.name}
				</h3>
				<p
					className="font-barlow xl:text-[18px] xl:leading-[32px] 
      text-veryLightBlue xl:max-w-[445px]"
				>
					{selectedCrew.bio}
				</p>
				<CrewNav
					crewData={crewData}
					selectedCrewId={selectedCrewId}
					changeCrewId={changeCrewId}
				/>
			</section>
			<aside>
				<Image
					className="absolute bottom-0 right-40 h-auto w-auto"
					src={crewURL}
					alt={`Image of ${selectedCrew.name}`}
					width={600}
					height={700}
				/>
			</aside>
		</>
	);
}
