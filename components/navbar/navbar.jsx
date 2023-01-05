import Image from "next/image";
import BurgerMenu from "./burgerMenu";
import Links from "./links";

export default function Navbar({ router }) {
	return (
		<header className="xl:mt-10 w-full ">
			<nav className="max-md:p-6 md:pl-10 xl:pl-14 flex justify-between items-center relative">
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
				<div className="md:hidden">
					<BurgerMenu />
				</div>
				<div className="hidden md:block">
					<Links router={router} />
				</div>
			</nav>
		</header>
	);
}
