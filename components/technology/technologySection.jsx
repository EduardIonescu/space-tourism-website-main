import { useState } from "react";
import Image from "next/image";
import TechnologyNav from "./technologyNav";

export default function TechnologySection({ technologyData }) {
	const [selectedTechnologyId, setSelectedTechnologyId] = useState(0);
	const selectedTechnology = technologyData[selectedTechnologyId];
	console.log(selectedTechnology);
	const technologyURL = selectedTechnology.images.portrait.slice(1);

	function changeTechnologyId(index) {
		setSelectedTechnologyId(index);
	}
	return (
		<>
			<section className="flex xl:gap-20 xl:mt-32">
				<TechnologyNav
					technologyData={technologyData}
					selectedTechnologyId={selectedTechnologyId}
					changeTechnologyId={changeTechnologyId}
				/>

				<section>
					<p
						className="uppercase tracking-[2.7px] leading-[19px]
        font-barlowCondensed text-veryLightBlue"
					>
						the terminology...
					</p>
					<h3
						className="font-bellefair font-normal text-white text-[56px] 
        leading-[64px] uppercase xl:mt-3 xl:mb-4"
					>
						{selectedTechnology.name}
					</h3>
					<p
						className="text-veryLightBlue text-[18px] font-barlow leading-[32px]
        xl:max-w-[445px]"
					>
						{selectedTechnology.description}
					</p>
				</section>
			</section>
			<aside>
				<Image
					className="absolute right-0 top-72"
					src={technologyURL}
					alt={`Image of ${selectedTechnology.name}`}
					height={527}
					width={515}
				/>
			</aside>
		</>
	);
}
