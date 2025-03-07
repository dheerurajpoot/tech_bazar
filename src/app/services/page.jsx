"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
	Search,
	Megaphone,
	BarChart2,
	Mail,
	PenTool,
	Share2,
	Code,
	Smartphone,
	Zap,
	Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const allServices = [
	{
		icon: Search,
		title: "SEO Optimization",
		description:
			"Boost your website's visibility and rank higher in search results.",
		category: "Digital Marketing",
		color: "bg-blue-500",
	},
	{
		icon: Megaphone,
		title: "Social Media Marketing",
		description:
			"Engage your audience and build brand awareness across social platforms.",
		category: "Digital Marketing",
		color: "bg-pink-500",
	},
	{
		icon: BarChart2,
		title: "Analytics & Reporting",
		description:
			"Gain insights into your digital performance and make data-driven decisions.",
		category: "Digital Marketing",
		color: "bg-green-500",
	},
	{
		icon: Mail,
		title: "Email Marketing",
		description:
			"Create targeted campaigns that convert leads into customers.",
		category: "Digital Marketing",
		color: "bg-purple-500",
	},
	{
		icon: PenTool,
		title: "Content Marketing",
		description:
			"Develop compelling content that resonates with your target audience.",
		category: "Digital Marketing",
		color: "bg-yellow-500",
	},
	{
		icon: Share2,
		title: "Influencer Marketing",
		description:
			"Leverage industry influencers to expand your reach and credibility.",
		category: "Digital Marketing",
		color: "bg-red-500",
	},
	{
		icon: Code,
		title: "Custom Web Development",
		description: "Tailored solutions to meet your unique business needs.",
		category: "Web Development",
		color: "bg-indigo-500",
	},
	{
		icon: Smartphone,
		title: "Responsive Design",
		description:
			"Create websites that look great on all devices and screen sizes.",
		category: "Web Development",
		color: "bg-teal-500",
	},
	{
		icon: Zap,
		title: "Performance Optimization",
		description:
			"Improve your website's speed and efficiency for better user experience.",
		category: "Web Development",
		color: "bg-orange-500",
	},
	{
		icon: Shield,
		title: "Web Security",
		description:
			"Implement robust security measures to protect your website and users.",
		category: "Web Development",
		color: "bg-cyan-500",
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

export default function ServicesPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All");

	const filteredServices = allServices.filter(
		(service) =>
			(selectedCategory === "All" ||
				service.category === selectedCategory) &&
			service.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className='pt-12 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800 text-white'>
			<section className='py-20 px-4'>
				<div className='container mx-auto'>
					<motion.div
						className='text-center mb-16'
						initial='hidden'
						animate='visible'
						variants={containerVariants}>
						<motion.h1
							className='text-5xl md:text-6xl font-bold mb-6'
							variants={itemVariants}>
							Our Services
						</motion.h1>
						<motion.p
							className='text-xl text-blue-200 max-w-3xl mx-auto mb-8'
							variants={itemVariants}>
							Discover our comprehensive range of digital
							solutions designed to elevate your online presence
							and drive business growth.
						</motion.p>
						<motion.div
							className='flex flex-col md:flex-row justify-center items-center gap-4'
							variants={itemVariants}>
							<Input
								type='text'
								placeholder='Search services...'
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className='max-w-xs bg-white/10 text-white placeholder-blue-200 border-blue-300'
							/>
							<select
								value={selectedCategory}
								onChange={(e) =>
									setSelectedCategory(e.target.value)
								}
								className='bg-white/10 text-white border-blue-300 rounded-md p-2'>
								<option value='All'>All Categories</option>
								<option value='Digital Marketing'>
									Digital Marketing
								</option>
								<option value='Web Development'>
									Web Development
								</option>
							</select>
						</motion.div>
					</motion.div>

					<motion.div
						className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
						initial='hidden'
						animate='visible'
						variants={containerVariants}>
						{filteredServices.map((service, index) => (
							<motion.div
								key={index}
								className='bg-white/10 backdrop-filter backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300'
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
									className='bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white border-none'>
									<Link href='/contact'>Learn More</Link>
								</Button>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			<section className='py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600'>
				<div className='container mx-auto text-center'>
					<h2 className='text-3xl md:text-4xl font-bold mb-6'>
						Ready to Transform Your Digital Presence?
					</h2>
					<p className='text-xl text-blue-200 max-w-3xl mx-auto mb-8'>
						Let's discuss how our services can help you achieve your
						business goals and stand out in the digital landscape.
					</p>
					<Button
						asChild
						size='lg'
						className='bg-white text-blue-600 hover:bg-blue-100'>
						<Link href='/contact'>Get a Free Consultation</Link>
					</Button>
				</div>
			</section>
		</div>
	);
}
