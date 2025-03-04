"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileText, Users, TrendingUp } from "lucide-react";

export function ContentWritingService() {
	const features = [
		"SEO-optimized blog posts and articles",
		"Website copy and landing pages",
		"Product descriptions and reviews",
		"Email newsletters and marketing content",
		"Social media content and captions",
		"Whitepapers and eBooks",
	];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='grid md:grid-cols-2 gap-8 items-center'>
			<div>
				<h3 className='text-2xl font-bold text-white mb-4'>
					Expert Content Writing Services
				</h3>
				<p className='text-blue-100 mb-6'>
					Our team of skilled writers creates compelling, SEO-friendly
					content that engages your audience and drives conversions.
				</p>
				<ul className='space-y-2'>
					{features.map((feature, index) => (
						<motion.li
							key={index}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
							className='flex items-center text-teal-200'>
							<CheckCircle className='h-5 w-5 mr-2 text-teal-400' />
							{feature}
						</motion.li>
					))}
				</ul>
			</div>
			<div className='grid grid-cols-2 gap-4'>
				<div className='bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center'>
					<FileText className='h-12 w-12 text-teal-400 mx-auto mb-4' />
					<h4 className='text-xl font-semibold text-white mb-2'>
						Tailored Content
					</h4>
					<p className='text-blue-100'>
						Customized for your brand and audience
					</p>
				</div>
				<div className='bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center'>
					<Users className='h-12 w-12 text-teal-400 mx-auto mb-4' />
					<h4 className='text-xl font-semibold text-white mb-2'>
						Audience Engagement
					</h4>
					<p className='text-blue-100'>
						Content that resonates and converts
					</p>
				</div>
				<div className='bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center'>
					<TrendingUp className='h-12 w-12 text-teal-400 mx-auto mb-4' />
					<h4 className='text-xl font-semibold text-white mb-2'>
						SEO Optimization
					</h4>
					<p className='text-blue-100'>
						Improve search engine rankings
					</p>
				</div>
			</div>
		</motion.div>
	);
}
