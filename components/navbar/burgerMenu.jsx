import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
const styles = {
	bmCrossButton: {
		right: 22,
		top: 26,
	},
	bmCross: {
		height: 24,
		right: 0,
	},
	// Couldn't find the className for menuWrap
	bmMenuWrap: {
		position: "fixed",
		right: 0,
		top: 0,
		height: "100%",
	},

	// bg doesnt get changed inside className for some reason
	bmOverlay: {
		background: "rgba(0, 0, 0, 0)",
	},
};

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
export default function BurgerMenu({ children }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	function closeMenu() {
		setIsMenuOpen(false);
	}
	return (
		<Menu
			burgerButtonClassName="relative "
			crossButtonClassName="right-0 top-0"
			crossClassName="bg-veryLightBlue"
			menuClassName="bg-black/20 backdrop-blur-[0.75rem] pt-32 px-8"
			overlayClassName="left-0 top-0"
			customBurgerIcon={<HamburgerIcon />}
			width={255}
			styles={styles}
			isOpen={isMenuOpen}
			onOpen={() => setIsMenuOpen(true)}
			onClose={closeMenu}
			right
		>
			<Links closeMenu={closeMenu} />
		</Menu>
	);
}

const HamburgerIcon = () => (
	<svg
		className="w-8 h-8 text-veryLightBlue"
		fill="none"
		strokeWidth="2.5"
		viewBox="0 0 24 18"
		stroke="currentColor"
	>
		<path d="M4 2h20M4 9h20M4 16h20"></path>
	</svg>
);

export function Links({ closeMenu, router }) {
	return (
		// Links inside burgerMenu on mobile
		<>
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
			{router && ( // Links on md+
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
			)}
		</>
	);
}
