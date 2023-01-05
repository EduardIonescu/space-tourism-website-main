import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Space Tourism </title>
				<meta name="description" content="Space Tourism App" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<main
				className="flex items-center gap-20 mt-6 xl:items-end md:mt-[106px] 
				md:gap-40 flex-col xl:flex-row justify-center xl:justify-start 
				xl:ml-40 xl:mt-64 xl:gap-96"
			>
				<section className="w-[325px] md:w-[450px] text-center xl:text-start">
					<p
						className="font-barlowCondensed text-veryLightBlue
					tracking-[2.7px] leading-[19px]
					md:text-[20px] md:tracking-[3.4px] md:leading-[24px]
					xl:text-[28px] xl:tracking-[4.75px] xl:leading-[34px] "
					>
						SO, YOU WANT TO TRAVEL TO
					</p>
					<h1
						className="text-white font-normal font-bellefair text-[80px]
						max-md:leading-[100px] my-4 md:my-6
						 md:text-[150px] md:max-xl:leading-[150px] uppercase xl:leading-[172px]"
					>
						space
					</h1>
					<p
						className="text-veryLightBlue font-barlow text-[15px] 
						leading-[25px] md:text-base
						md:leading-[28px] xl:text-[18px] xl:leading-[32px]"
					>
						Let’s face it; if you want to go to space, you might as
						well genuinely go to outer space and not hover kind of
						on the edge of it. Well sit back, and relax because
						we’ll give you a truly out of this world experience!
					</p>
				</section>
				<aside>
					<button
						className="font-bellefair text-veryDarkBlue 
						text-[20px] tracking-[1.25px] w-[150px] h-[150px]
						md:text-[32px] md:tracking-[2px] md:w-60 md:h-60 xl:text-[2rem]
          xl:w-[17rem] xl:h-[17rem] bg-white uppercase rounded-full 
          shadow-[0px_0px_0px_0px_rgba(0,0,0,0)] transition duration-700 ease-linear
          hover:shadow-[0px_0px_0px_5.5rem_rgba(255,255,255,0.1)]"
					>
						explore
					</button>
				</aside>
			</main>
		</>
	);
}
