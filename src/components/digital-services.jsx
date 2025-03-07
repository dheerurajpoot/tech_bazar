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
		<section className='py-20 bg-gradient-to-b from-blue-900 to-indigo-900 text-white overflow-hidden'>
			<div className='container mx-auto px-4'>
				<motion.div
					className='text-center mb-16'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={containerVariants}>
					<motion.h2
						className='text-4xl md:text-5xl font-bold mb-4'
						variants={itemVariants}>
						Comprehensive Marketing Services
					</motion.h2>
					<motion.p
						className='text-xl text-blue-200 max-w-3xl mx-auto'
						variants={itemVariants}>
						Elevate your online presence with our cutting-edge
						digital marketing solutions tailored to your business
						needs.
					</motion.p>
				</motion.div>

				<motion.div
					className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={containerVariants}>
					{services.map((service, index) => (
						<motion.div
							key={index}
							className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300'
							variants={itemVariants}>
							<div
								className={`${service.color} rounded-full p-3 inline-block mb-4`}>
								<service.icon className='h-6 w-6 text-white' />
							</div>
							<h3 className='text-xl font-bold mb-2'>
								{service.title}
							</h3>
							<p className='text-blue-200 mb-4'>
								{service.description}
							</p>
							<Button
								asChild
								variant='outline'
								className='text-white border-white hover:bg-white hover:text-blue-900'>
								<Link
									className='bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white border-none'
									href='/contact'>
									Learn More
								</Link>
							</Button>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className='text-center mt-16'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={containerVariants}>
					<motion.p
						className='text-xl text-blue-200 mb-6'
						variants={itemVariants}>
						Ready to take your digital marketing to the next level?
					</motion.p>
					<motion.div variants={itemVariants}>
						<Button
							asChild
							size='lg'
							className='bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white'>
							<Link href='/contact'>Get a Custom Strategy</Link>
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
