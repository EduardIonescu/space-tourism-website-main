import { useState } from "react";
import Image from "next/image";
import TechnologyNav from "./technologyNav";

export default function TechnologySection({ technologyData }) {
	const [selectedTechnologyId, setSelectedTechnologyId] = useState(0);
	const selectedTechnology = technologyData[selectedTechnologyId];
	console.log(selectedTechnology);
	const technologyURL = selectedTechnology.images.portrait.slice(1);
	const technologyLandscapeURL = selectedTechnology.images.landscape.slice(1);

	function changeTechnologyId(index) {
		setSelectedTechnologyId(index);
	}
	return (
		<>
			<aside className="xl:hidden">
				<Image
					className="w-full max-h-96 object-cover my-14"
					src={technologyLandscapeURL}
					alt={`Image of ${selectedTechnology.name}`}
					height={768}
					width={310}
				/>
			</aside>
			<section
				className="flex flex-col text-center xl:text-left
			 xl:flex-row xl:gap-20 xl:mt-32"
			>
				<TechnologyNav
					technologyData={technologyData}
					selectedTechnologyId={selectedTechnologyId}
					changeTechnologyId={changeTechnologyId}
				/>

				<section>
					<p
						className="uppercase tracking-[2.7px] leading-[19px]
        font-barlowCondensed text-veryLightBlue mt-10 mb-4 xl:mx-0"
					>
						the terminology...
					</p>
					<h3
						className="font-bellefair font-normal text-white text-[40px]
						leading-[46px] 
						xl:text-[56px] xl:leading-[64px] uppercase xl:mt-3 mb-4"
					>
						{selectedTechnology.name}
					</h3>
					<p
						className="text-veryLightBlue xl:text-[18px] font-barlow 
						md:leading-[28px] xl:leading-[32px] md:max-xl:mx-auto
        md:max-w-[445px]"
					>
						{selectedTechnology.description}
					</p>
				</section>
			</section>
			<aside className="hidden xl:block">
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
