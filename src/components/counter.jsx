"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const scaleIn = {
	hidden: { scale: 0.8, opacity: 0 },
	visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

// Counter animation hook
const useCounter = (end, start = 0, duration = 2000) => {
	const [count, setCount] = useState(start);
	const countRef = useRef(null);
	const isInView = useInView(countRef, { once: true, amount: 0.5 });

	useEffect(() => {
		if (isInView) {
			let startTime;
			let animationFrame;

			const animate = (timestamp) => {
				if (!startTime) startTime = timestamp;
				const progress = Math.min(
					(timestamp - startTime) / duration,
					1
				);
				setCount(Math.floor(progress * (end - start) + start));

				if (progress < 1) {
					animationFrame = requestAnimationFrame(animate);
				}
			};

			animationFrame = requestAnimationFrame(animate);

			return () => cancelAnimationFrame(animationFrame);
		}
	}, [isInView, start, end, duration]);

	return { count, ref: countRef };
};

export function StateCounter() {
	// Counter animations
	const usersCounter = useCounter(10000);
	const salesCounter = useCounter(10);
	const countriesCounter = useCounter(50);
	const satisfactionCounter = useCounter(98);
	return (
		<section className='py-16 bg-white'>
			<div className='container mx-auto px-4'>
				<motion.div
					className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={staggerContainer}>
					<motion.div
						variants={scaleIn}
						className='bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg'>
						<h3
							className='text-4xl font-bold text-indigo-600'
							ref={usersCounter.ref}>
							{usersCounter.count.toLocaleString()}+
						</h3>
						<p className='text-gray-700'>Active Users</p>
					</motion.div>
					<motion.div
						variants={scaleIn}
						className='bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-lg'>
						<h3
							className='text-4xl font-bold text-purple-600'
							ref={salesCounter.ref}>
							${salesCounter.count}M+
						</h3>
						<p className='text-gray-700'>In Total Sales</p>
					</motion.div>
					<motion.div
						variants={scaleIn}
						className='bg-gradient-to-br from-green-50 to-teal-100 p-6 rounded-lg'>
						<h3
							className='text-4xl font-bold text-green-600'
							ref={countriesCounter.ref}>
							{countriesCounter.count}+
						</h3>
						<p className='text-gray-700'>Countries Served</p>
					</motion.div>
					<motion.div
						variants={scaleIn}
						className='bg-gradient-to-br from-yellow-50 to-amber-100 p-6 rounded-lg'>
						<h3
							className='text-4xl font-bold text-yellow-600'
							ref={satisfactionCounter.ref}>
							{satisfactionCounter.count}%
						</h3>
						<p className='text-gray-700'>Client Satisfaction</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
