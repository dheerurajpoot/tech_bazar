"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const hiddenChromeRoutes = ["/offers"];

export default function ClientLayoutWrapper({ children }) {
	const pathname = usePathname();
	const hideChrome = hiddenChromeRoutes.some((route) =>
		pathname?.startsWith(route)
	);

	return (
		<>
			{!hideChrome && <Header />}
			<Toaster position='top-right' reverseOrder={true} />
			{children}
			{!hideChrome && <Footer />}
		</>
	);
}
