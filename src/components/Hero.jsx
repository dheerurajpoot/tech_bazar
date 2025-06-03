"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Globe, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
	{
		icon: Zap,
		title: "Fast Results",
		description: "See improvements in your digital presence quickly",
		gradient: "from-yellow-50 to-amber-100",
		iconColor: "text-amber-600",
		hoverGradient: "from-amber-500 to-yellow-500",
	},
	{
		icon: Globe,
		title: "Global Reach",
		description: "Expand your audience across borders",
		gradient: "from-blue-50 to-indigo-100",
		iconColor: "text-indigo-600",
		hoverGradient: "from-indigo-500 to-blue-500",
	},
	{
		icon: DollarSign,
		title: "Cost-Effective",
		description: "Maximize your ROI with our strategies",
		gradient: "from-green-50 to-emerald-100",
		iconColor: "text-emerald-600",
		hoverGradient: "from-emerald-500 to-green-500",
	},
	{
		icon: TrendingUp,
		title: "Scalable Growth",
		description: "Solutions that grow with your business",
		gradient: "from-purple-50 to-pink-100",
		iconColor: "text-purple-600",
		hoverGradient: "from-purple-500 to-pink-500",
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
		<div className='relative overflow-hidden bg-white min-h-screen flex items-center'>
			<div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)] animate-pulse'></div>
			<div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(79,70,229,0.15),transparent_50%)] animate-pulse delay-1000'></div>
			<div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.9),rgba(255,255,255,0.4),rgba(255,255,255,0.9))]'></div>
			<div className='container mx-auto px-4 py-24 sm:py-32 lg:py-40 relative z-10'>
				<motion.div
					className='text-center'
					initial='hidden'
					animate='visible'
					variants={containerVariants}>
					<motion.h1
						className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900'
						variants={itemVariants}>
						Transform Your Digital
						<span className='bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text'>
							{" "}
							Presence
						</span>
					</motion.h1>
					<motion.p
						className='text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-600'
						variants={itemVariants}>
						Unlock your business potential with our comprehensive
						digital solutions. From web development to digital
						marketing, we've got you covered.
					</motion.p>
					<motion.div
						className='flex flex-wrap justify-center gap-4 mb-12'
						variants={itemVariants}>
						<Button
							asChild
							size='lg'
							className='bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-xl'>
							<Link
								href='/services'
								className='flex items-center px-8'>
								Explore Services
								<ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300' />
							</Link>
						</Button>
						<Button
							asChild
							size='lg'
							variant='outline'
							className='text-gray-600 hover:text-gray-900 border-gray-300 hover:border-gray-400 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-xl bg-white/80 backdrop-blur-sm'>
							<Link
								href='/contact'
								className='flex items-center px-8'>
								Get a Free Consultation
								<ArrowRight className='ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300' />
							</Link>
						</Button>
					</motion.div>
				</motion.div>

				<motion.div
					className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16'
					variants={containerVariants}
					initial='hidden'
					animate='visible'>
					{services.map((service, index) => (
						<motion.div
							key={index}
							className={`bg-gradient-to-br ${service.gradient} rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden backdrop-blur-sm border border-white/20`}
							variants={itemVariants}>
							<div className='flex items-center mb-6'>
								<div
									className={`p-4 rounded-xl ${service.gradient} shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300 border border-white/20`}>
									<service.icon
										className={`h-7 w-7 ${service.iconColor} group-hover:text-white transition-colors duration-300`}
									/>
								</div>
								<h3 className='text-xl font-bold ml-6 text-gray-900 group-hover:text-white transition-colors duration-300'>
									{service.title}
								</h3>
							</div>
							<p className='text-gray-600 group-hover:text-white/90 transition-colors duration-300 relative z-10 leading-relaxed'>
								{service.description}
							</p>
							<div
								className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`}></div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
}
