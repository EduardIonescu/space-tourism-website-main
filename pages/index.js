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
			<main className="flex items-end xl:ml-40 xl:mt-64 xl:gap-96">
				<section className="xl:w-[450px]">
					<p
						className="font-barlowCondensed text-veryLightBlue xl:text-[28px]
          xl:tracking-[4.75px]"
					>
						SO, YOU WANT TO TRAVEL TO
					</p>
					<h1
						className="text-white font-normal font-bellefair xl:text-[150px]
          uppercase"
					>
						space
					</h1>
					<p className="text-veryLightBlue font-barlow text-[18px]">
						Let’s face it; if you want to go to space, you might as
						well genuinely go to outer space and not hover kind of
						on the edge of it. Well sit back, and relax because
						we’ll give you a truly out of this world experience!
					</p>
				</section>
				<aside>
					<button
						className="font-bellefair text-veryDarkBlue xl:text-[2rem]
          xl:w-[17rem] xl:h-[17rem] bg-white uppercase rounded-full tracking-[2px]
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
