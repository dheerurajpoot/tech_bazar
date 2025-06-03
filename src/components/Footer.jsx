import Link from "next/link";
import {
	Facebook,
	Instagram,
	Youtube,
	Twitter,
	Linkedin,
	Mail,
	Phone,
	MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
	return (
		<footer className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
					<div className='space-y-6'>
						<h2 className='text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent'>
							EVTN
						</h2>
						<p className='text-gray-400 leading-relaxed'>
							Your go-to marketplace for buying and selling
							websites, social media pages, and YouTube channels.
						</p>
						<div className='flex space-x-4'>
							{[
								{
									icon: Facebook,
									href: "https://facebook.com",
									label: "Facebook",
								},
								{
									icon: Instagram,
									href: "https://instagram.com",
									label: "Instagram",
								},
								{
									icon: Youtube,
									href: "https://youtube.com",
									label: "YouTube",
								},
								{
									icon: Twitter,
									href: "https://twitter.com",
									label: "Twitter",
								},
								{
									icon: Linkedin,
									href: "https://linkedin.com",
									label: "LinkedIn",
								},
							].map((social) => (
								<a
									key={social.label}
									href={social.href}
									target='_blank'
									rel='noopener noreferrer'
									aria-label={social.label}
									className='p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 transition-all duration-300 group'>
									<social.icon className='h-5 w-5 text-gray-400 group-hover:text-white transition-colors' />
								</a>
							))}
						</div>
					</div>
					<div className='space-y-6'>
						<h3 className='text-xl font-semibold text-white'>
							Quick Links
						</h3>
						<ul className='space-y-3'>
							{[
								{ href: "/about", label: "About Us" },
								{ href: "/services", label: "Services" },
								{ href: "/careers", label: "Careers" },
								{ href: "/pricing", label: "Pricing" },
								{ href: "/blog", label: "Blog" },
								{ href: "/contact", label: "Contact Us" },
							].map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className='text-gray-400 hover:text-white transition-colors flex items-center group'>
										<span className='w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className='space-y-6'>
						<h3 className='text-xl font-semibold text-white'>
							Our Services
						</h3>
						<ul className='space-y-3'>
							{[
								{
									href: "/services/web-development",
									label: "Web Development",
								},
								{
									href: "/services/content-writing-seo",
									label: "Content Writing & SEO",
								},
								{
									href: "/services/ppc-ads",
									label: "PPC & Ads",
								},
								{ href: "/shop", label: "Buy Digital Assets" },
								{
									href: "/add-product",
									label: "Sell Digital Assets",
								},
								{ href: "/cookies", label: "Cookies Policy" },
							].map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className='text-gray-400 hover:text-white transition-colors flex items-center group'>
										<span className='w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className='space-y-6'>
						<h3 className='text-xl font-semibold text-white'>
							Newsletter
						</h3>
						<p className='text-gray-400'>
							Stay updated with our latest news and offers.
						</p>
						<form className='space-y-4'>
							<div className='relative'>
								<Input
									type='email'
									placeholder='Your email address'
									className='bg-gray-800/50 text-white border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300'
								/>
							</div>
							<Button
								type='submit'
								className='w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white border-none shadow-lg hover:shadow-blue-500/20 transition-all duration-300'>
								Subscribe
							</Button>
						</form>
					</div>
				</div>
				<div className='border-t border-gray-800 pt-8 mt-8'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						<div className='flex items-center space-x-3 bg-gray-800/50 p-3 rounded-lg'>
							<Mail className='h-5 w-5 text-blue-400' />
							<a
								href='mailto:contact@evtn.org'
								className='text-gray-300 hover:text-white transition-colors'>
								contact@evtn.org
							</a>
						</div>
						<div className='flex items-center space-x-3 bg-gray-800/50 p-3 rounded-lg'>
							<Phone className='h-5 w-5 text-teal-400' />
							<a
								href='tel:7755089819'
								className='text-gray-300 hover:text-white transition-colors'>
								+91 7755089819
							</a>
						</div>
						<div className='flex items-center space-x-3 bg-gray-800/50 p-3 rounded-lg'>
							<MapPin className='h-5 w-5 text-purple-400' />
							<span className='text-gray-300'>
								Bamba Road, Kalyanpur, Kanpur Nagar (208017)
							</span>
						</div>
					</div>
				</div>
				<div className='text-center mt-12 space-y-4'>
					<p className='text-gray-400'>
						&copy; {new Date().getFullYear()} EVTN. All rights
						reserved.
					</p>
					<div className='flex justify-center space-x-6'>
						<Link
							href='/terms'
							className='text-gray-400 hover:text-white transition-colors'>
							Terms of Service
						</Link>
						<Link
							href='/privacy'
							className='text-gray-400 hover:text-white transition-colors'>
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
