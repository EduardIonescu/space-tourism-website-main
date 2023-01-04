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
				className="flex items-center xl:items-end md:mt-[106px] md:gap-40
				md:max-xl:flex-col md:max-xl:justify-center xl:ml-40 xl:mt-64 xl:gap-96"
			>
				<section className="md:w-[450px] text-center">
					<p
						className="font-barlowCondensed text-veryLightBlue
					md:text-[20px] md:tracking-[3.4px] md:max-xl:leading-[24px]
					xl:text-[28px] xl:tracking-[4.75px]"
					>
						SO, YOU WANT TO TRAVEL TO
					</p>
					<h1
						className="text-white font-normal font-bellefair md:text-[150px]
					md:max-xl:leading-[150px] uppercase md:max-xl:my-6"
					>
						space
					</h1>
					<p
						className="text-veryLightBlue font-barlow md:text-base
						md:max-xl:leading-[28px] xl:text-[18px]"
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
						md:text-[32px] tracking-[2px] md:w-60 md:h-60 xl:text-[2rem]
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
