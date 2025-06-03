"use client";

import { motion } from "framer-motion";
import {
	Search,
	Megaphone,
	BarChart2,
	Mail,
	PenTool,
	Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
	{
		icon: Search,
		title: "SEO Optimization",
		description:
			"Boost your website's visibility and rank higher in search results.",
		color: "bg-blue-500",
	},
	{
		icon: Megaphone,
		title: "Social Media Marketing",
		description:
			"Engage your audience and build brand awareness across social platforms.",
		color: "bg-pink-500",
	},
	{
		icon: BarChart2,
		title: "Analytics & Reporting",
		description:
			"Gain insights into your digital performance and make data-driven decisions.",
		color: "bg-green-500",
	},
	{
		icon: Mail,
		title: "Email Marketing",
		description:
			"Create targeted campaigns that convert leads into customers.",
		color: "bg-purple-500",
	},
	{
		icon: PenTool,
		title: "Content Marketing",
		description:
			"Develop compelling content that resonates with your target audience.",
		color: "bg-yellow-500",
	},
	{
		icon: Share2,
		title: "Influencer Marketing",
		description:
			"Leverage industry influencers to expand your reach and credibility.",
		color: "bg-red-500",
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

export function DigitalMarketingServices() {
	return (
		<section className='py-16 bg-white overflow-hidden'>
			<div className='container mx-auto px-4'>
				<motion.div
					className='text-center mb-16'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={containerVariants}>
					<motion.h2
						className='text-4xl md:text-5xl font-bold mb-4 text-gray-900'
						variants={itemVariants}>
						Comprehensive Marketing Services
					</motion.h2>
					<motion.p
						className='text-xl text-gray-600 max-w-3xl mx-auto'
						variants={itemVariants}>
						Elevate your online presence with our cutting-edge
						digital marketing solutions tailored to your business
						needs.
					</motion.p>
				</motion.div>

				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={containerVariants}>
					{services.map((service, index) => {
						const gradients = [
							"from-yellow-50 to-amber-100",
							"from-purple-50 to-pink-100",
							"from-blue-50 to-indigo-100",
							"from-green-50 to-teal-100",
							"from-red-50 to-orange-100",
							"from-gray-50 to-blue-100",
						];
						const iconColors = [
							"text-amber-600",
							"text-purple-600",
							"text-indigo-600",
							"text-teal-600",
							"text-orange-600",
							"text-blue-600",
						];
						return (
							<motion.div
								key={index}
								variants={itemVariants}
								className={`bg-gradient-to-br ${
									gradients[index % gradients.length]
								} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}>
								<div className='flex items-center mb-6'>
									<div
										className={`p-3 rounded-full ${
											gradients[index % gradients.length]
										} shadow-inner relative z-10`}>
										<service.icon
											className={`h-8 w-8 ${
												iconColors[
													index % iconColors.length
												]
											}`}
										/>
									</div>
									<h3 className='text-xl font-semibold text-gray-900 ml-4 relative z-10'>
										{service.title}
									</h3>
								</div>
								<p className='text-gray-600 mb-6 relative z-10'>
									{service.description}
								</p>
								<Button
									asChild
									variant='outline'
									className='relative z-10'>
									<Link
										className={`bg-gradient-to-r ${
											gradients[index % gradients.length]
										} text-gray-900 border-none hover:shadow-md`}
										href='/contact'>
										Learn More
									</Link>
								</Button>
								<div className='absolute inset-0 bg-gradient-to-br from-white/5 to-white/30 opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
