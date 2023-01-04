import Navbar from "./navbar/navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function Layout({ children }) {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		function handleWindowResize() {
			setWindowWidth(window.innerWidth);
		}
		handleWindowResize();

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);
	const router = useRouter();
	const routeName =
		router.pathname != "/" ? router.pathname.slice(1) : "home";
	let viewport = "mobile";
	if (windowWidth >= 1280) {
		viewport = "desktop";
	} else if (windowWidth >= 768) {
		viewport = "tablet";
	}
	const bgURL = `/assets/${routeName}/background-${routeName}-${viewport}.jpg`;
	return (
		<>
			<Navbar router={router} />
			<>{children}</>

			<style jsx global>{`
				body {
					background: url("${bgURL}");
					background-repeat: no-repeat;
					background-size: cover;
				}
			`}</style>
		</>
	);
}
