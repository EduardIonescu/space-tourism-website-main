import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { styles } from "../../constants/constants";
import BurgerIcon from "./burgerIcon";
import Links from "./links";

export default function BurgerMenu() {
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
			customBurgerIcon={<BurgerIcon />}
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
