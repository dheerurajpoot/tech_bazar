"use client";

import { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AuthContext } from "../../context/authContext";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/shop", label: "Shop" },
	{ href: "/services", label: "Services" },
	{ href: "/pricing", label: "Pricing" },
	{ href: "/contact", label: "Contact" },
	{ href: "/about", label: "About" },
];

export default function Header() {
	const { user } = useContext(AuthContext);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-white/90 backdrop-blur-md shadow-lg"
					: "bg-transparent"
			}`}>
			<div className='container mx-auto px-4 py-3'>
				<div className='flex items-center justify-between'>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						<Link href='/'>
							<Image
								className='w-auto h-auto'
								src='/wdlogo.png'
								alt='webdeelers logo'
								width={140}
								height={140}
							/>
						</Link>
					</motion.div>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex items-center space-x-8'>
						{navItems.map((item, index) => (
							<motion.div
								key={item.href}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}>
								<NavLink href={item.href}>{item.label}</NavLink>
							</motion.div>
						))}
					</nav>

					{/* Mobile Menu Button */}
					<div className='md:hidden'>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
							className={`p-2 rounded-lg text-gray-800`}>
							{isMobileMenuOpen ? (
								<X className='h-6 w-6' />
							) : (
								<Menu className='h-6 w-6' />
							)}
						</motion.button>
					</div>

					{/* User Profile/Login */}
					<div className='hidden md:flex items-center'>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={`px-4 py-2 rounded-full bg-indigo-600 text-white`}>
							{user ? (
								<Link href='/profile'>
									<span>
										Hi,{" "}
										<b>{user?.username?.split(" ")[0]}</b>
									</span>
								</Link>
							) : (
								<Link href='/login'>
									<span className='font-bold'>Login</span>
								</Link>
							)}
						</motion.div>
					</div>
				</div>

				{/* Mobile Menu */}
				<motion.nav
					initial={{ opacity: 0, height: 0 }}
					animate={{
						opacity: isMobileMenuOpen ? 1 : 0,
						height: isMobileMenuOpen ? "auto" : 0,
					}}
					transition={{ duration: 0.3 }}
					className={`md:hidden overflow-hidden ${
						isScrolled ? "bg-white" : "bg-indigo-900"
					}`}>
					<div className='px-4 py-5 space-y-4'>
						{navItems.map((item) => (
							<motion.div
								key={item.href}
								whileHover={{ x: 10 }}
								className='block'>
								<NavLink href={item.href}>{item.label}</NavLink>
							</motion.div>
						))}
						<motion.div
							whileHover={{ x: 10 }}
							className={`block ${
								isScrolled ? "text-gray-800" : "text-white"
							}`}>
							{user ? (
								<Link href='/profile'>
									Hi, <b>{user?.username?.split(" ")[0]}</b>
								</Link>
							) : (
								<Link href='/login'>
									<span className='font-bold'>Login</span>
								</Link>
							)}
						</motion.div>
					</div>
				</motion.nav>
			</div>
		</motion.header>
	);
}

function NavLink({ href, children }) {
	return (
		<Link
			href={href}
			className={`relative font-semibold group transition-colors duration-300`}>
			<span className='relative z-10 text-current'>{children}</span>
			<span className='absolute inset-x-0 -bottom-1 h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out' />
		</Link>
	);
}
