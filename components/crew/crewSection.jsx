import { useState, useEffect } from "react";
import Image from "next/image";
import CrewNav from "./crewNav";
import { useSwipeable } from "react-swipeable";
import {
	handleSwipeTemplate,
	keyHandlerTemplate,
} from "../../utils/controlFunctions";

export default function CrewSection({ crewData }) {
	const [selectedCrewId, setSelectedCrewId] = useState(0);
	const selectedCrew = crewData[selectedCrewId];
	const crewURL = selectedCrew.images.png.slice(1);

	useEffect(() => {
		// Key control
		function nextHandler({ key }) {
			keyHandlerTemplate(
				key,
				selectedCrewId,
				setSelectedCrewId,
				crewData
			);
		}

		window.addEventListener("keydown", nextHandler);

		return () => {
			window.removeEventListener("keydown", nextHandler);
		};
	}, [selectedCrewId]);

	function handleSwipe(direction) {
		// Swipe control
		handleSwipeTemplate(
			direction,
			selectedCrewId,
			setSelectedCrewId,
			crewData
		);
	}

	const handlers = useSwipeable({
		onSwipedLeft: () => handleSwipe("left"),
		onSwipedRight: () => handleSwipe("right"),
		delta: 50,
		swipeDuration: 1000,
		preventScrollOnSwipe: true,
		trackMouse: true,
	});

	function changeCrewId(index) {
		setSelectedCrewId(index);
	}
	return (
		<section {...handlers} className="flex flex-col md:block">
			<section
				className="flex md:block flex-col items-center
				order-2 md:mt-[52px] text-center xl:text-left
			xl:mt-36 xl:max-w-[620px] xl:h-[405px] xl:relative"
			>
				<h4
					className="uppercase text-white opacity-50 font-bellefair font-normal
				leading-[18px] md:text-[24px] md:leading-[28x] 
      	xl:text-[2rem] xl:leading-[37px]"
				>
					{selectedCrew.role}
				</h4>
				<h3
					className="uppercase font-bellefair font-normal 
					text-[24px] leading-[28px] mt-2 mb-4
					md:text-[40px] md:leading-[46px] md:mt-1 md:mb-4
					xl:text-[56px] text-white xl:leading-[64px] xl:mt-4 xl:mb-7"
				>
					{selectedCrew.name}
				</h3>
				<p
					className="font-barlow text-[15px] md:text-base leading-[25px]
					 md:leading-[28px] max-w-[327px] md:max-w-[600px] 
					md:max-xl:mx-auto xl:text-[18px] xl:leading-[32px]  
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
			<aside
				className="order-1 w-[327px] mx-auto md:w-auto border-b-[1px]
			border-grayBlue md:border-none"
			>
				<Image
					className="md:hidden h-[223px] w-auto mx-auto mt-8"
					src={crewURL}
					alt={`Image of ${selectedCrew.name}`}
					height={223}
					width={600}
				/>
				<Image
					className="hidden md:block md:absolute md:bottom-0 md:h-[515px]
					 md:max-xl:left-0 md:max-xl:right-0 md:max-xl:mx-auto
					xl:right-40 xl:h-auto w-auto"
					src={crewURL}
					alt={`Image of ${selectedCrew.name}`}
					width={600}
					height={700}
				/>
			</aside>
		</section>
	);
}
