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
		default: "EVTN | Buy & Sell Digital Assets",
		template: "%s - EVTN",
	},
	description:
		"EVTN is the premier marketplace for buying and selling websites, social media accounts, and YouTube channels. Find your next digital investment or sell your online business today.",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8783459202982334'
					crossorigin='anonymous'></script>
			</head>
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
