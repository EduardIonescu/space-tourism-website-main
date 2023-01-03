import Image from "next/image";

export default function Destination() {
	return (
		<main className="xl:mt-20 xl:ml-40">
			<h5
				className="font-normal text-[28px] tracking-[4.75px] text-white
      font-barlowCondensed uppercase"
			>
				<span className="font-bold opacity-25">01</span> pick your
				destination
			</h5>
			<section className="flex items-end xl:mt-16 gap-40">
				<aside>
					<Image
						className="xl:w-[445px] h-auto"
						src="/assets/destination/image-moon.png"
						width={170}
						height={170}
						alt="moon image"
					/>
				</aside>
				<section className="xl:w-[445px]">
					<nav className="flex gap-9">
						<button
							className="font-barlowCondensed tracking-[2.7px]
            text-veryLightBlue uppercase"
						>
							moon
						</button>
						<button
							className="font-barlowCondensed tracking-[2.7px]
            text-veryLightBlue uppercase"
						>
							mars
						</button>
						<button
							className="font-barlowCondensed tracking-[2.7px]
            text-veryLightBlue uppercase"
						>
							europa
						</button>
						<button
							className="font-barlowCondensed tracking-[2.7px]
            text-veryLightBlue uppercase"
						>
							titan
						</button>
					</nav>
					<h2
						className="font-bellefair text-[100px] text-white font-normal
          uppercase xl:mt-8"
					>
						moon
					</h2>
					<p
						className="text-veryLightBlue font-barlow text-[18px]
           leading-[32px]"
					>
						See our planet as you’ve never seen it before. A perfect
						relaxing trip away to help regain perspective and come
						back refreshed. While you’re there, take in some history
						by visiting the Luna 2 and Apollo 11 landing sites.
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
								384,400 km
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
								3 days
							</p>
						</div>
					</div>
				</section>
			</section>
		</main>
	);
}
