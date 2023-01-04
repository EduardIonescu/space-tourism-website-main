import Image from "next/image";
import DestinationNav from "./destinationNav";
import { useState } from "react";
export default function DestinationSection({ destinationData }) {
	const [selectedDestinationId, setSelectedDestinationId] = useState(0);
	const selectedDestination = destinationData[selectedDestinationId];
	const planetURL = selectedDestination.images.png.slice(1);

	function changeDestionationId(index) {
		setSelectedDestinationId(index);
	}

	return (
		<section
			className="flex flex-col xl:flex-row items-center xl:items-end md:mt-[60px]
		xl:mt-16 md:gap-14 xl:gap-40"
		>
			<aside>
				<Image
					className="md:w-[300px] xl:w-[445px] h-auto"
					src={planetURL}
					width={170}
					height={170}
					alt="moon image"
				/>
			</aside>
			<section className="md:w-[575px] md:max-xl:text-center xl:w-[445px]">
				<DestinationNav
					destinationData={destinationData}
					selectedDestinationId={selectedDestinationId}
					changeDestionationId={changeDestionationId}
				/>
				<h2
					className="font-bellefair text-[5rem] xl:text-[100px] text-white 
				font-normal uppercase md:mt-8 md:max-xl:leading-[92px] md:max-xl:mb-2"
				>
					{selectedDestination.name}
				</h2>
				<p
					className="text-veryLightBlue font-barlow xl:text-[18px] leading-[28px]
     xl:leading-[32px]"
				>
					{selectedDestination.description}
				</p>
				<hr className="w-full h-[1px] border-grayBlue md:mt-12 md:mb-7" />
				<div className="flex justify-center xl:justify-start md:gap-24 xl:gap-20">
					<div>
						<p
							className="text-[14px] font-barlowCondensed tracking-[2.35px]
      uppercase text-veryLightBlue"
						>
							avg. distance
						</p>
						<p
							className="text-white text-[28px] leading-[32px] uppercase
        font-bellefair md:mt-3"
						>
							{selectedDestination.distance}
						</p>
					</div>
					<div>
						<p
							className="text-[14px] font-barlowCondensed tracking-[2.35px]
      uppercase text-veryLightBlue"
						>
							est. travel time
						</p>
						<p
							className="text-white text-[28px] leading-[32px] uppercase
        font-bellefair md:mt-3"
						>
							{selectedDestination.travel}
						</p>
					</div>
				</div>
			</section>
		</section>
	);
}
