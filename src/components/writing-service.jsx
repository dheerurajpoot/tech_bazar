"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileText, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
				<h3 className='text-2xl font-bold text-gray-900 mb-4'>
					Expert Content Writing Services
				</h3>
				<p className='text-gray-600 mb-6'>
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
							className='flex items-center text-gray-600'>
							<CheckCircle className='h-5 w-5 mr-2 text-green-600' />
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
				<div className='bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg text-center'>
					<FileText className='h-12 w-12 text-indigo-600 mx-auto mb-4' />
					<h4 className='text-xl font-semibold text-gray-900 mb-2'>
						Tailored Content
					</h4>
					<p className='text-gray-600'>
						Customized for your brand and audience
					</p>
				</div>
				<div className='bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-lg text-center'>
					<Users className='h-12 w-12 text-purple-600 mx-auto mb-4' />
					<h4 className='text-xl font-semibold text-gray-900 mb-2'>
						Audience Engagement
					</h4>
					<p className='text-gray-600'>
						Content that resonates and converts
					</p>
				</div>
				<div className='bg-gradient-to-br from-green-50 to-teal-100 p-6 rounded-lg text-center'>
					<TrendingUp className='h-12 w-12 text-green-600 mx-auto mb-4' />
					<h4 className='text-xl font-semibold text-gray-900 mb-2'>
						SEO Optimization
					</h4>
					<p className='text-gray-600'>
						Improve search engine rankings
					</p>
				</div>
			</div>
		</motion.div>
	);
}
