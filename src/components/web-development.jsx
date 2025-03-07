"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Code, Smartphone, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
	{
		icon: Code,
		title: "Custom Development",
		description: "Tailored solutions to meet your unique business needs",
	},
	{
		icon: Smartphone,
		title: "Responsive Design",
		description: "Seamless experience across all devices and screen sizes",
	},
	{
		icon: Zap,
		title: "Performance Optimization",
		description: "Lightning-fast load times and smooth user interactions",
	},
	{
		icon: Shield,
		title: "Security First",
		description: "Robust security measures to protect your data and users",
	},
];

export default function WebDevelopment() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });
	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView, mainControls]);

	return (
		<section
			ref={ref}
			className='py-20 bg-gradient-to-b from-gray-900 to-blue-900 text-white overflow-hidden'>
			<div className='container mx-auto px-4'>
				<motion.div
					variants={{
						hidden: { opacity: 0, y: 75 },
						visible: { opacity: 1, y: 0 },
					}}
					initial='hidden'
					animate={mainControls}
					transition={{ duration: 0.5, delay: 0.25 }}>
					<h2 className='text-4xl md:text-5xl font-bold text-center mb-8'>
						Cutting-Edge Web Development
					</h2>
					<p className='text-xl text-center text-blue-200 mb-12 max-w-3xl mx-auto'>
						Transform your online presence with our expert web
						development services. We create stunning, functional
						websites that drive results.
					</p>
				</motion.div>

				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							className='bg-blue-800 bg-opacity-50 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300'
							variants={{
								hidden: { opacity: 0, y: 50 },
								visible: { opacity: 1, y: 0 },
							}}
							initial='hidden'
							animate={mainControls}
							transition={{
								duration: 0.5,
								delay: 0.5 + index * 0.1,
							}}>
							<feature.icon className='h-12 w-12 text-blue-400 mb-4' />
							<h3 className='text-xl font-semibold mb-2'>
								{feature.title}
							</h3>
							<p className='text-blue-200'>
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>

				<motion.div
					className='text-center'
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
					initial='hidden'
					animate={mainControls}
					transition={{ duration: 0.5, delay: 0.75 }}>
					<Link href='/contact'>
						<Button
							size='lg'
							className='bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white'>
							Start Your Web Project
						</Button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
