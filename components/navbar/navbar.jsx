import Image from "next/image";
import Link from "next/link";

const links = [
	{
		address: "/",
		index: "00",
		text: "HOME",
	},
	{
		address: "/destination",
		index: "01",
		text: "DESTINATION",
	},
	{
		address: "/crew",
		index: "02",
		text: "CREW",
	},
	{
		address: "/technology",
		index: "03",
		text: "TECHNOLOGY",
	},
];
export default function Navbar({ router }) {
	return (
		<header className="xl:mt-10 w-full ">
			<nav className="md:pl-10 xl:pl-14 flex justify-between items-center relative">
				<Image
					className="md:w-12 md:h-12 xl:mr-8"
					src="/assets/shared/logo.svg"
					width={40}
					height={40}
					alt=""
					aria-hidden="true"
				/>
				<hr
					className="hidden xl:block border-white/25 w-[34%] z-10 relative
				 -right-8"
				/>
				<ul
					className="flex md:gap-9 xl:gap-12 justify-center items-center md:h-24
					 relative text-white xl:w-[830px] md:max-xl:px-12 xl:pr-10 
				 bg-white/5 backdrop-blur-[12px] "
				>
					{links.map((link) => (
						<li key={link.text}>
							<Link
								className={`font-barlowCondensed text-sm xl:text-base 
							md:tracking-[2.35px] xl:tracking-[2.7px] relative 
              before:content-[''] before:absolute before:block before:w-full
              before:-bottom-10 before:h-[3px] before:left-0 before:bg-white
              before:scale-x-0 before:transition-transform before:duration-300
               ${
					router.pathname == link.address // underline on focus
						? "before:scale-x-100"
						: "before:opacity-50 hover:before:scale-x-100  "
				}`}
								href={link.address}
							>
								<span className="font-bold hidden xl:inline">
									{link.index}
								</span>{" "}
								{link.text}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
