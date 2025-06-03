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
		<section ref={ref} className='py-16 bg-white overflow-hidden'>
			<div className='container mx-auto px-4'>
				<motion.div
					variants={{
						hidden: { opacity: 0, y: 75 },
						visible: { opacity: 1, y: 0 },
					}}
					initial='hidden'
					animate={mainControls}
					transition={{ duration: 0.5, delay: 0.25 }}>
					<h2 className='text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900'>
						Cutting-Edge Web Development
					</h2>
					<p className='text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto'>
						Transform your online presence with our expert web
						development services. We create stunning, functional
						websites that drive results.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{features.map((feature, index) => {
						const gradients = [
							"from-blue-50 to-indigo-100",
							"from-purple-50 to-pink-100",
							"from-green-50 to-teal-100",
							"from-yellow-50 to-orange-100",
						];
						const iconColors = [
							"text-indigo-600",
							"text-purple-600",
							"text-green-600",
							"text-orange-600",
						];
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								className={`bg-gradient-to-br ${
									gradients[index % gradients.length]
								} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
								<div className='flex items-center mb-6'>
									<div
										className={`p-3 rounded-full ${
											gradients[index % gradients.length]
										} shadow-inner`}>
										<feature.icon
											className={`h-8 w-8 ${
												iconColors[
													index % iconColors.length
												]
											}`}
										/>
									</div>
									<h3 className='text-xl font-semibold text-gray-900 ml-4'>
										{feature.title}
									</h3>
								</div>
								<p className='text-gray-600 mb-6'>
									{feature.description}
								</p>
								<ul className='space-y-3'>
									{feature?.features?.map(
										(featureItem, featureIndex) => (
											<li
												key={featureIndex}
												className='flex items-center text-gray-600 hover:text-gray-900 transition-colors'>
												<CheckCircle
													className={`h-5 w-5 ${
														iconColors[
															index %
																iconColors.length
														]
													} mr-3`}
												/>
												{featureItem}
											</li>
										)
									)}
								</ul>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
