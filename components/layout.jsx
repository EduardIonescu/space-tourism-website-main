import Navbar from "./navbar/navbar";
import { useRouter } from "next/router";
export default function Layout({ children }) {
	const router = useRouter();
	const routeName =
		router.pathname != "/" ? router.pathname.slice(1) : "home";
	const bgURL = `/assets/${routeName}/background-${routeName}-desktop.jpg`;
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
