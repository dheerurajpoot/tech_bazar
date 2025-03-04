"use client";

import { motion } from "framer-motion";
import { CheckCircle, Search, BarChart2, Globe } from "lucide-react";

export function SEOService() {
	const features = [
		"Comprehensive website audit",
		"Keyword research and optimization",
		"On-page and off-page SEO",
		"Technical SEO improvements",
		"Content strategy and optimization",
		"Local SEO for businesses",
	];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='grid md:grid-cols-2 gap-8 items-center'>
			<div>
				<h3 className='text-2xl font-bold text-white mb-4'>
					Powerful SEO Strategies
				</h3>
				<p className='text-blue-100 mb-6'>
					Our SEO experts use cutting-edge techniques to improve your
					website's visibility and drive organic traffic.
				</p>
				<ul className='space-y-2'>
					{features.map((feature, index) => (
						<motion.li
							key={index}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
							className='flex items-center text-blue-200'>
							<CheckCircle className='h-5 w-5 mr-2 text-blue-400' />
							{feature}
						</motion.li>
					))}
				</ul>
			</div>
			<div className='grid grid-cols-2 gap-4'>
				<div className='bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center'>
					<Search className='h-12 w-12 text-blue-400 mx-auto mb-4' />
					<h4 className='text-xl font-semibold text-white mb-2'>
						Keyword Mastery
					</h4>
					<p className='text-blue-100'>
						Target the right keywords for your business
					</p>
				</div>
				<div className='bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center'>
					<BarChart2 className='h-12 w-12 text-blue-400 mx-auto mb-4' />
					<h4 className='text-xl font-semibold text-white mb-2'>
						Performance Tracking
					</h4>
					<p className='text-blue-100'>
						Monitor and improve your SEO results
					</p>
				</div>
				<div className='bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center'>
					<Globe className='h-12 w-12 text-blue-400 mx-auto mb-4' />
					<h4 className='text-xl font-semibold text-white mb-2'>
						Global Reach
					</h4>
					<p className='text-blue-100'>
						Expand your online presence worldwide
					</p>
				</div>
			</div>
		</motion.div>
	);
}
