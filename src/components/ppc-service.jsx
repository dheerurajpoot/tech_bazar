"use client";

import { motion } from "framer-motion";
import { CheckCircle, Target, DollarSign, Zap } from "lucide-react";

export function PPCService() {
	const features = [
		"Google Ads and Microsoft Advertising",
		"Social media advertising (Facebook, Instagram, LinkedIn)",
		"Display and retargeting campaigns",
		"Shopping ads for e-commerce",
		"Video advertising on YouTube",
		"Conversion rate optimization",
	];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='grid md:grid-cols-2 gap-8 items-center'>
			<div>
				<h3 className='text-2xl font-bold text-white mb-4'>
					Results-Driven PPC Campaigns
				</h3>
				<p className='text-blue-100 mb-6'>
					Our PPC experts create and manage high-performing campaigns
					that maximize your ROI and drive quality traffic.
				</p>
				<ul className='space-y-2'>
					{features.map((feature, index) => (
						<motion.li
							key={index}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
							className='flex items-center text-purple-200'>
							<CheckCircle className='h-5 w-5 mr-2 text-purple-400' />
							{feature}
						</motion.li>
					))}
				</ul>
			</div>
			<div className='grid grid-cols-2 gap-4'>
				<div className='bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center'>
					<Target className='h-12 w-12 text-purple-400 mx-auto mb-4' />
					<h4 className='text-xl font-semibold text-white mb-2'>
						Precise Targeting
					</h4>
					<p className='text-blue-100'>
						Reach your ideal audience effectively
					</p>
				</div>
				<div className='bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center'>
					<DollarSign className='h-12 w-12 text-purple-400 mx-auto mb-4' />
					<h4 className='text-xl font-semibold text-white mb-2'>
						Cost-Effective
					</h4>
					<p className='text-blue-100'>
						Maximize your ad spend and ROI
					</p>
				</div>
				<div className='bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center'>
					<Zap className='h-12 w-12 text-purple-400 mx-auto mb-4' />
					<h4 className='text-xl font-semibold text-white mb-2'>
						Quick Results
					</h4>
					<p className='text-blue-100'>
						Drive immediate traffic and conversions
					</p>
				</div>
			</div>
		</motion.div>
	);
}
