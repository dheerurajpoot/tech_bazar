"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const fadeIn = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Approach() {
	return (
		<section className='py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={fadeIn}>
					<div className='grid md:grid-cols-2 gap-8 items-center'>
						<div>
							<h3 className='text-2xl font-bold mb-6'>
								Our Digital Marketing Approach
							</h3>
							<ul className='space-y-4'>
								{[
									"Comprehensive strategy tailored to your business goals",
									"Data-driven decision making and continuous optimization",
									"Cross-channel integration for maximum impact",
									"Focus on ROI and measurable results",
									"Transparent reporting and communication",
									"Staying ahead of industry trends and algorithm updates",
								].map((item, index) => (
									<li
										key={index}
										className='flex items-start'>
										<CheckCircle className='h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5' />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
						<div className='text-center'>
							<div className='bg-white/10 backdrop-blur-lg p-8 rounded-xl'>
								<h4 className='text-xl font-semibold mb-4'>
									Ready to boost your online presence?
								</h4>
								<p className='mb-6'>
									Get a customized digital marketing strategy
									tailored to your business needs.
								</p>
								<Button
									asChild
									size='lg'
									className='bg-white text-indigo-700 hover:bg-blue-100'>
									<Link href='/contact'>
										Get a Free Consultation
										<ArrowRight className='ml-2 h-4 w-4' />
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
