"use client";

import { motion } from "framer-motion";
import { CheckCircle, Target, DollarSign, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
				<h3 className='text-2xl font-bold text-gray-900 mb-4'>
					Pay-Per-Click Advertising
				</h3>
				<p className='text-gray-600 mb-6'>
					Drive immediate results with our targeted PPC campaigns that
					maximize your ROI and drive quality traffic.
				</p>
				<ul className='space-y-2'>
					{features.map((feature, index) => (
						<motion.li
							key={index}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
							className='flex items-center text-gray-600'>
							<CheckCircle className='h-5 w-5 mr-2 text-purple-600' />
							{feature}
						</motion.li>
					))}
				</ul>
				<motion.div
					className='mt-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}>
					<Button
						asChild
						size='lg'
						className='bg-gradient-to-br from-blue-50 to-indigo-100 text-indigo-600 hover:from-blue-100 hover:to-indigo-200'>
						<Link href='/contact'>Get a Free Consultation</Link>
					</Button>
				</motion.div>
			</div>
			<div className='grid grid-cols-2 gap-4'>
				<div className='bg-gradient-to-br from-yellow-50 to-amber-100 p-6 rounded-lg text-center'>
					<Target className='h-12 w-12 text-yellow-600 mx-auto mb-4' />
					<h4 className='text-xl font-semibold text-gray-900 mb-2'>
						Precise Targeting
					</h4>
					<p className='text-gray-600'>
						Reach your ideal audience effectively
					</p>
				</div>
				<div className='bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg text-center'>
					<DollarSign className='h-12 w-12 text-indigo-600 mx-auto mb-4' />
					<h4 className='text-xl font-semibold text-gray-900 mb-2'>
						Cost-Effective
					</h4>
					<p className='text-gray-600'>
						Maximize your ad spend and ROI
					</p>
				</div>
				<div className='bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-lg text-center'>
					<Zap className='h-12 w-12 text-purple-600 mx-auto mb-4' />
					<h4 className='text-xl font-semibold text-gray-900 mb-2'>
						Quick Results
					</h4>
					<p className='text-gray-600'>
						Drive immediate traffic and conversions
					</p>
				</div>
			</div>
		</motion.div>
	);
}
