"use client";
import Link from "next/link";
import { ArrowRight, Zap, Globe, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<div className='relative overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500'>
			<div className='absolute inset-0'>
				<svg
					className='absolute left-full transform -translate-x-1/2 -translate-y-1/4'
					width='404'
					height='404'
					fill='none'
					viewBox='0 0 404 404'
					aria-hidden='true'>
					<defs>
						<pattern
							id='85737c0e-0916-41d7-917f-596dc7edfa27'
							x='0'
							y='0'
							width='20'
							height='20'
							patternUnits='userSpaceOnUse'>
							<rect
								x='0'
								y='0'
								width='4'
								height='4'
								className='text-indigo-200 opacity-20'
								fill='currentColor'
							/>
						</pattern>
					</defs>
					<rect
						width='404'
						height='404'
						fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)'
					/>
				</svg>
				<svg
					className='absolute right-full bottom-0 transform translate-x-1/2 translate-y-1/4'
					width='404'
					height='404'
					fill='none'
					viewBox='0 0 404 404'
					aria-hidden='true'>
					<defs>
						<pattern
							id='85737c0e-0916-41d7-917f-596dc7edfa28'
							x='0'
							y='0'
							width='20'
							height='20'
							patternUnits='userSpaceOnUse'>
							<rect
								x='0'
								y='0'
								width='4'
								height='4'
								className='text-blue-200 opacity-20'
								fill='currentColor'
							/>
						</pattern>
					</defs>
					<rect
						width='404'
						height='404'
						fill='url(#85737c0e-0916-41d7-917f-596dc7edfa28)'
					/>
				</svg>
			</div>
			<div className='container mx-auto px-4 py-24 sm:py-32 lg:py-40 relative z-10'>
				<div className='text-center'>
					<motion.h1
						className='text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl'
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}>
						<span className='block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500'>
							Revolutionize
						</span>
						<span className='block mt-2'>Your Digital Assets</span>
					</motion.h1>
					<motion.p
						className='mt-6 max-w-2xl mx-auto text-xl sm:text-2xl text-indigo-100'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						EVTN: The Ultimate Marketplace for Websites, Social
						Media, Google Play Console, and YouTube Channels
					</motion.p>
					<motion.div
						className='mt-10 flex justify-center gap-6 flex-wrap'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						<Button
							asChild
							size='lg'
							className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:from-pink-600 hover:to-yellow-600 shadow-lg hover:shadow-xl transition-all duration-300'>
							<Link href='/shop'>
								Start Buying
								<ArrowRight className='ml-2 h-5 w-5' />
							</Link>
						</Button>
						<Button
							asChild
							size='lg'
							variant='outline'
							className='bg-transparent text-white border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300'>
							<Link href='/add-product'>
								Start Selling
								<ArrowRight className='ml-2 h-5 w-5' />
							</Link>
						</Button>
					</motion.div>
				</div>
				<motion.div
					className='mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4'
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}>
					{[
						{
							icon: Globe,
							title: "Websites",
							description: "High-traffic domains",
						},
						{
							icon: Zap,
							title: "Social Media",
							description: "Engaged followers",
						},
						{
							icon: DollarSign,
							title: "E-commerce",
							description: "Profitable stores",
						},
						{
							icon: TrendingUp,
							title: "YouTube",
							description: "Monetized channels",
						},
					].map((item, index) => (
						<div
							key={index}
							className='bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300'>
							<item.icon className='h-12 w-12 text-yellow-400 mx-auto mb-4' />
							<h3 className='text-xl font-bold text-white mb-2'>
								{item.title}
							</h3>
							<p className='text-indigo-200'>
								{item.description}
							</p>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
}
