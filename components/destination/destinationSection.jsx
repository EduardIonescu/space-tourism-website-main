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
		<section className="flex items-end xl:mt-16 gap-40">
			<aside>
				<Image
					className="xl:w-[445px] h-auto"
					src={planetURL}
					width={170}
					height={170}
					alt="moon image"
				/>
			</aside>
			<section className="xl:w-[445px]">
				<DestinationNav
					destinationData={destinationData}
					selectedDestinationId={selectedDestinationId}
					changeDestionationId={changeDestionationId}
				/>
				<h2
					className="font-bellefair text-[100px] text-white font-normal
    uppercase xl:mt-8"
				>
					{selectedDestination.name}
				</h2>
				<p
					className="text-veryLightBlue font-barlow text-[18px]
     leading-[32px]"
				>
					{selectedDestination.description}
				</p>
				<hr className="w-full h-[1px] border-grayBlue xl:mt-12 xl:mb-7" />
				<div className="flex xl:gap-20">
					<div>
						<p
							className="text-[14px] font-barlowCondensed tracking-[2.35px]
      uppercase text-veryLightBlue"
						>
							avg. distance
						</p>
						<p
							className="text-white text-[28px] leading-[32px] uppercase
        font-bellefair xl:mt-3"
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
        font-bellefair xl:mt-3"
						>
							{selectedDestination.travel}
						</p>
					</div>
				</div>
			</section>
		</section>
	);
}
