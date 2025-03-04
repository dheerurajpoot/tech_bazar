"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Zap,
	Globe,
	DollarSign,
	TrendingUp,
	Pencil,
	Search,
	BarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
	{
		icon: Pencil,
		title: "Content Writing",
		description: "Engaging, SEO-optimized content",
		color: "bg-teal-500",
	},
	{
		icon: Search,
		title: "SEO",
		description: "Boost your online visibility",
		color: "bg-blue-500",
	},
	{
		icon: BarChart,
		title: "PPC Ads",
		description: "Targeted, high-performing campaigns",
		color: "bg-purple-500",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export default function Hero() {
	return (
		<div className='relative overflow-hidden bg-gray-900 text-white'>
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
								className='text-gray-700'
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
								className='text-gray-700'
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
				<motion.div
					className='text-center'
					initial='hidden'
					animate='visible'
					variants={containerVariants}>
					<motion.h1
						className='text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl mb-6'
						variants={itemVariants}>
						<span className='block text-blue-500'>
							Revolutionize
						</span>
						<span className='block'>Your Digital Presence</span>
					</motion.h1>
					<motion.p
						className='mt-6 max-w-2xl mx-auto text-xl sm:text-2xl text-gray-300 mb-8'
						variants={itemVariants}>
						Elevate your online business with our comprehensive
						digital marketing solutions
					</motion.p>
					<motion.div
						className='flex flex-wrap justify-center gap-4 mb-12'
						variants={itemVariants}>
						<Button
							asChild
							size='lg'
							className='bg-blue-500 hover:bg-blue-600 text-white'>
							<Link href='/services'>
								Explore Services
								<ArrowRight className='ml-2 h-5 w-5' />
							</Link>
						</Button>
						<Button
							asChild
							size='lg'
							variant='outline'
							className='text-black border-white hover:bg-gray-200 hover:text-gray-900'>
							<Link href='/contact'>Get a Free Consultation</Link>
						</Button>
					</motion.div>
				</motion.div>

				<motion.div
					className='grid md:grid-cols-3 gap-8 mt-16'
					variants={containerVariants}
					initial='hidden'
					animate='visible'>
					{services.map((service, index) => (
						<motion.div
							key={index}
							className='bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300'
							variants={itemVariants}>
							<div
								className={`${service.color} rounded-full p-3 inline-block mb-4`}>
								<service.icon className='h-6 w-6 text-white' />
							</div>
							<h3 className='text-xl font-bold mb-2'>
								{service.title}
							</h3>
							<p className='text-gray-400'>
								{service.description}
							</p>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className='mt-20 text-center'
					variants={itemVariants}>
					<h2 className='text-3xl font-bold mb-6'>
						Why Choose EVTN?
					</h2>
					<div className='grid md:grid-cols-4 gap-8'>
						{[
							{ icon: Globe, title: "Global Reach" },
							{ icon: Zap, title: "Fast Results" },
							{ icon: DollarSign, title: "Cost-Effective" },
							{ icon: TrendingUp, title: "Measurable Growth" },
						].map((item, index) => (
							<motion.div
								key={index}
								className='flex flex-col items-center'
								variants={itemVariants}>
								<div className='bg-blue-500 rounded-full p-3 mb-4'>
									<item.icon className='h-6 w-6 text-white' />
								</div>
								<h3 className='text-lg font-semibold'>
									{item.title}
								</h3>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
