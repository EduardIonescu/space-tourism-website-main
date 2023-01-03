import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
	return (
		<header className="xl:mt-10 w-full ">
			<nav className="xl:pl-14 flex justify-between items-center relative">
				<Image
					className="xl:w-12 xl:h-12 xl:mr-8"
					src="/assets/shared/logo.svg"
					width={40}
					height={40}
					alt=""
					aria-hidden="true"
				/>
				<hr className="border-white/25 w-[34%] z-10 relative -right-8" />
				<ul
					className="flex xl:gap-12 justify-center items-center xl:h-24 relative
        text-white xl:w-[830px] xl:pr-10 before:content-['*'] bg-white/5
        backdrop-blur-[12px]
         
        "
				>
					<li>
						<Link
							className="font-barlowCondensed tracking-[2.7px] "
							href="/"
						>
							<span className="font-bold ">00</span> HOME
						</Link>
					</li>
					<li>
						<Link
							className="font-barlowCondensed tracking-[2.7px]"
							href="/destination"
						>
							<span className="font-bold ">01</span> DESTINATION
						</Link>
					</li>
					<li>
						<Link
							className="font-barlowCondensed tracking-[2.7px]"
							href="/crew"
						>
							<span className="font-bold ">02</span> CREW
						</Link>
					</li>
					<li>
						<Link
							className="font-barlowCondensed tracking-[2.7px]"
							href="/technology"
						>
							<span className="font-bold ">03</span> TECHNOLOGY
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
