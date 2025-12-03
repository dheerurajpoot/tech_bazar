import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
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
		default: "WebDeelers | Buy & Sell Digital Assets",
		template: "%s - WebDeelers",
	},
	description:
		"WebDeelers is the premier marketplace for buying and selling websites, social media accounts, and YouTube channels. Find your next digital investment or sell your online business today.",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning={true}>
			<head>
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxxxxxxx'
					crossorigin='anonymous'></script>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				suppressHydrationWarning={true}>
				<AuthProvider>
					<ClientLayoutWrapper>{children}</ClientLayoutWrapper>
				</AuthProvider>
			</body>
		</html>
	);
}
