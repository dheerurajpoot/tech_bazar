"use client";

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AuthContext } from "../../context/authContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { User } from "lucide-react";

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
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
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
					<div className='flex items-center space-x-4'>
						<UserMenu
							isOpen={isUserMenuOpen}
							setIsOpen={setIsUserMenuOpen}
							isScrolled={isScrolled}
						/>
					</div>
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

function UserMenu({ isOpen, setIsOpen, isScrolled }) {
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
		<DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
			<DropdownMenuTrigger asChild>
				<div>
					<Button
						variant='ghost'
						aria-label='User menu'
						className={`transition-colors ${
							isScrolled ? "text-gray-700" : "text-white"
						}`}>
						<User className='h-6 w-6' />
						<p>{user?.username.split(" ")[0]}</p>
					</Button>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='w-56'>
				<DropdownMenuItem>
					<Link href='/add-product' className='w-full'>
						Sell
					</Link>
				</DropdownMenuItem>
				{user && user ? (
					<>
						<DropdownMenuItem>
							<Link href='/profile' className='w-full'>
								Profile
							</Link>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem onClick={logOut}>
							Logout
						</DropdownMenuItem>
					</>
				) : (
					<>
						<DropdownMenuItem>
							<Link href='/register' className='w-full'>
								Register
							</Link>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Link href='/login' className='w-full'>
								Login
							</Link>
						</DropdownMenuItem>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
