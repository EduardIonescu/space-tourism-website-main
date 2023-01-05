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
					className="w-full min-h-[170px] md:max-h-96 object-cover my-8 md:my-14"
					src={technologyLandscapeURL}
					alt={`Image of ${selectedTechnology.name}`}
					height={375}
					width={170}
				/>
			</aside>
			<section
				className="flex flex-col text-center xl:text-left
			 xl:flex-row xl:gap-20 xl:mt-32 mb-14 md:mb-0"
			>
				<TechnologyNav
					technologyData={technologyData}
					selectedTechnologyId={selectedTechnologyId}
					changeTechnologyId={changeTechnologyId}
				/>

				<section>
					<p
						className="uppercase text-[14px] tracking-[2.35px] leading-[17px]
						md:text-base md:tracking-[2.7px] md:leading-[19px] mb-2
        font-barlowCondensed text-veryLightBlue mt-7 md:mt-10 md:mb-4 xl:mx-0"
					>
						the terminology...
					</p>
					<h3
						className="font-bellefair font-normal text-white 
						text-[24px] leading-[28px] md:text-[40px] md:leading-[46px] 
						xl:text-[56px] xl:leading-[64px] uppercase xl:mt-3 mb-4"
					>
						{selectedTechnology.name}
					</h3>
					<p
						className="text-veryLightBlue text-[15px] md:text-base
						xl:text-[18px] font-barlow max-w-[327px] md:max-w-[445px]
					 leading-[25px]	md:leading-[28px] xl:leading-[32px] max-xl:mx-auto
					"
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
