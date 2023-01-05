import Link from "next/link";
import { links } from "../../constants/constants";

export default function Links({ closeMenu, router }) {
	if (router)
		return (
			// Links on md+
			<ul
				className="hidden md:flex md:gap-9 xl:gap-12 justify-center items-center 
      md:h-24 relative text-white xl:w-[830px] md:max-xl:px-12 xl:pr-10 
     bg-white/5 backdrop-blur-[12px]  "
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
		);
	else
		return (
			// Links inside burgerMenu on mobile

			<ul className="flex flex-col gap-8 md:hidden">
				{links.map((link) => (
					<li key={link.text}>
						<Link
							onClick={closeMenu}
							className={`flex gap-3 font-barlowCondensed text-white 
            tracking-[2.7px] leading-[19px]`}
							href={link.address}
						>
							<span className="font-bold">{link.index}</span>{" "}
							{link.text}
						</Link>
					</li>
				))}
			</ul>
		);
}
