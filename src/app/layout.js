import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../../context/authContext";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: {
		default: "EVTN Digital mMrketplace",
		template: "%s - EVTN Digital Marketplace",
	},
	description:
		"A digital marketplace for creators where users can sell and buy websites, social media pages, youtube channels and other digital things.",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<AuthProvider>
					<Header />
					<Toaster position='top-right' reverseOrder={true} />
					{children}
					<Footer />
				</AuthProvider>
			</body>
		</html>
	);
}
