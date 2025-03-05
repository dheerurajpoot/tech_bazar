"use client";

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuthContext } from "../../context/authContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/#", label: "Services" },
	{ href: "/pricing", label: "Pricing" },
	{ href: "/blog", label: "Blog" },
	{ href: "/shop", label: "Shop" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-white shadow-md" : "bg-[#111827]"
			}`}>
			<div className='container mx-auto px-4 py-4'>
				<div className='flex items-center justify-between'>
					<Link
						href='/'
						className={`text-3xl font-black transition-colors ${
							isScrolled ? "text-blue-600" : "text-white"
						}`}>
						EVTN
					</Link>
					<nav className='hidden md:flex items-center space-x-6'>
						{navItems.map((item) => (
							<NavLink
								key={item.href}
								href={item.href}
								isScrolled={isScrolled}>
								{item.label}
							</NavLink>
						))}
					</nav>
					<ProfileDrawer isScrolled={isScrolled} />
				</div>
			</div>
		</header>
	);
}

function NavLink({ href, children, isScrolled }) {
	return (
		<Link
			href={href}
			className={`
        ${
			isScrolled
				? "text-black hover:text-blue-600"
				: "text-white hover:text-blue-200"
		}
      `}>
			{children}
		</Link>
	);
}

function ProfileDrawer({ isAdmin, isScrolled }) {
	const router = useRouter();
	const { user, setUser } = useContext(AuthContext);

	const logOut = async () => {
		try {
			const response = await axios.get("/api/auth/logout");
			if (response.status === 200) {
				localStorage.removeItem("user");
				toast.success("Logout Successfully");
				setUser(null);
				router.push("/login");
			} else {
				toast.error("Failed to logout");
			}
		} catch (error) {
			toast.error("An error occurred during logout");
			console.log(error);
		}
	};

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
					className={`rounded-full transition-colors ${
						isScrolled
							? "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
							: "text-white hover:text-blue-200 hover:bg-white/10"
					}`}>
					<Menu className='h-6 w-6' />
					<span className='sr-only'>Open profile menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Profile Menu</SheetTitle>
					<SheetDescription>
						Manage your account and settings
					</SheetDescription>
				</SheetHeader>
				<div className='py-4 space-y-4'>
					{user && user ? (
						<>
							<Link
								href='/profile'
								className='block text-blue-600 hover:underline'>
								Profile
							</Link>
						</>
					) : (
						<>
							<Link
								href='/register'
								className='block text-blue-600 hover:underline'>
								Register
							</Link>
							<Link
								href='/login'
								className='block text-blue-600 hover:underline'>
								Login
							</Link>
						</>
					)}
					<Link
						href='/add-product'
						className='block text-blue-600 hover:underline'>
						Sell
					</Link>
					<Link
						href='/shop'
						className='block text-blue-600 hover:underline'>
						Shop
					</Link>
					<Link
						href='/contact'
						className='block text-blue-600 hover:underline'>
						Contact
					</Link>
					<Link
						href='/about'
						className='block text-blue-600 hover:underline'>
						About
					</Link>
					<Link
						href='/blog'
						className='block text-blue-600 hover:underline'>
						Blog
					</Link>
					<Link
						href='/pricing'
						className='block text-blue-600 hover:underline'>
						Pricing
					</Link>
					<Link
						href='/services/web-development'
						className='block text-blue-600 hover:underline'>
						Services
					</Link>

					<div className='border-t border-gray-200 pt-4'>
						<Link
							onClick={logOut}
							href='/'
							className='block text-red-600 hover:underline'>
							Logout
						</Link>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
