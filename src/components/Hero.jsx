"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Globe, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
	{
		icon: Zap,
		title: "Fast Results",
		description: "See improvements in your digital presence quickly",
		color: "bg-yellow-500",
	},
	{
		icon: Globe,
		title: "Global Reach",
		description: "Expand your audience across borders",
		color: "bg-blue-500",
	},
	{
		icon: DollarSign,
		title: "Cost-Effective",
		description: "Maximize your ROI with our strategies",
		color: "bg-green-500",
	},
	{
		icon: TrendingUp,
		title: "Scalable Growth",
		description: "Solutions that grow with your business",
		color: "bg-purple-500",
	},
];

export default function Hero() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className='relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white min-h-screen flex items-center justify-center'>
			{/* Mouse Follower */}
			<motion.div
				className='absolute w-16 h-16 bg-blue-500 bg-opacity-30 blur-2xl rounded-full pointer-events-none'
				style={{
					left: mousePosition.x - 32,
					top: mousePosition.y - 32,
				}}
				animate={{ x: mousePosition.x, y: mousePosition.y }}
				transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
			/>

			<div className='container mx-auto px-4 py-24 sm:py-32 lg:py-40 relative z-10 text-center'>
				<motion.h1
					className='text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl mb-6'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					<span className='inline-block bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text'>
						Revolutionize
					</span>{" "}
					<span className='inline-block'>Your Digital Presence</span>
				</motion.h1>
				<motion.p
					className='mt-6 max-w-2xl mx-auto text-xl sm:text-2xl text-blue-100 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					Elevate your online business with our comprehensive digital
					marketing solutions.
				</motion.p>

				<motion.div
					className='flex flex-wrap justify-center gap-4 mb-12'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}>
					<Button
						asChild
						size='lg'
						className='bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white'>
						<Link href='/services/web-development'>
							Explore Services
							<ArrowRight className='ml-2 h-5 w-5' />
						</Link>
					</Button>
					<Button
						asChild
						size='lg'
						variant='outline'
						className='text-white border-white hover:bg-white hover:text-blue-900'>
						<Link href='/contact'>Get a Free Consultation</Link>
					</Button>
				</motion.div>

				<motion.div
					className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16'
					initial='hidden'
					animate='visible'
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: { staggerChildren: 0.2 },
						},
					}}>
					{services.map((service, index) => (
						<motion.div
							key={index}
							className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300'
							variants={{
								hidden: { y: 20, opacity: 0 },
								visible: { y: 0, opacity: 1 },
							}}>
							<div
								className={`${service.color} rounded-full p-3 inline-block mb-4`}>
								<service.icon className='h-6 w-6 text-white' />
							</div>
							<h3 className='text-xl font-bold mb-2'>
								{service.title}
							</h3>
							<p className='text-blue-100'>
								{service.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
}
