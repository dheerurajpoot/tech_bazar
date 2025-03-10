"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Search,
	PenTool,
	BarChart2,
	Mail,
	Share2,
	Megaphone,
	ArrowRight,
	CheckCircle,
} from "lucide-react";

// Animation variants
const fadeIn = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

const scaleIn = {
	hidden: { scale: 0.8, opacity: 0 },
	visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
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

// Digital Marketing services data
const marketingServices = [
	{
		icon: Search,
		title: "SEO Optimization",
		description:
			"We boost your website's visibility in search results through comprehensive keyword research, on-page optimization, technical SEO, and quality link building strategies.",
		color: "bg-blue-500",
	},
	{
		icon: PenTool,
		title: "Content Marketing",
		description:
			"Our expert content team creates engaging, SEO-optimized content that resonates with your audience and drives conversions, from blog posts to whitepapers.",
		color: "bg-purple-500",
	},
	{
		icon: Megaphone,
		title: "Social Media Marketing",
		description:
			"We develop and execute social media strategies that build your brand, engage your audience, and drive meaningful interactions across all platforms.",
		color: "bg-pink-500",
	},
	{
		icon: BarChart2,
		title: "PPC Advertising",
		description:
			"Our data-driven PPC campaigns maximize your ROI through strategic keyword targeting, compelling ad copy, and continuous optimization.",
		color: "bg-yellow-500",
	},
	{
		icon: Mail,
		title: "Email Marketing",
		description:
			"We design and implement email campaigns that nurture leads, retain customers, and drive conversions with personalized, targeted content.",
		color: "bg-green-500",
	},
	{
		icon: Share2,
		title: "Analytics & Reporting",
		description:
			"We provide comprehensive analytics and clear reporting to track performance, measure ROI, and continuously improve your digital marketing strategy.",
		color: "bg-red-500",
	},
];

// Team members data
const teamMembers = [
	{
		name: "Dheeru Rajpoot",
		role: "CEO & Founder",
		bio: "With over 5 years of experience in digital marketing and e-commerce, Sarah founded EVTN to help entrepreneurs navigate the digital marketplace.",
		image: "/placeholder.svg?height=300&width=300&text=SJ",
	},
	{
		name: "Shikha Rajani",
		role: "CTO",
		bio: "Shikha brings 12+ years of software development expertise, leading our engineering team in building secure and scalable marketplace solutions.",
		image: "/placeholder.svg?height=300&width=300&text=MC",
	},
	{
		name: "Priya Patel",
		role: "Head of Digital Marketing",
		bio: "Priya has helped hundreds of businesses improve their online presence through innovative digital marketing strategies and data-driven campaigns.",
		image: "/placeholder.svg?height=300&width=300&text=PP",
	},
	{
		name: "David Rodriguez",
		role: "Head of Customer Success",
		bio: "David ensures that every client receives exceptional support throughout their journey with EVTN, from onboarding to successful transactions.",
		image: "/placeholder.svg?height=300&width=300&text=DR",
	},
];

// Testimonials data
const testimonials = [
	{
		quote: "EVTN transformed our online presence with their comprehensive digital marketing services. Our organic traffic increased by 150% in just six months!",
		author: "Emma Thompson",
		company: "GreenLeaf Organics",
		image: "/placeholder.svg?height=60&width=60&text=ET",
	},
	{
		quote: "The SEO and content marketing strategies implemented by EVTN helped us rank #1 for our main keywords. Their team is knowledgeable, responsive, and results-driven.",
		author: "James Wilson",
		company: "TechSolutions Inc.",
		image: "/placeholder.svg?height=60&width=60&text=JW",
	},
	{
		quote: "Working with EVTN's digital marketing team has been a game-changer for our business. Their data-driven approach and creative strategies have significantly improved our ROI.",
		author: "Sophia Garcia",
		company: "Innovate Design Studio",
		image: "/placeholder.svg?height=60&width=60&text=SG",
	},
];

export default function AboutPage() {
	const [activeTestimonial, setActiveTestimonial] = useState(0);

	// Counter animations
	const usersCounter = useCounter(10000);
	const salesCounter = useCounter(10);
	const countriesCounter = useCounter(50);
	const satisfactionCounter = useCounter(98);

	// Parallax effect for hero section
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className='min-h-screen flex flex-col'>
			<main className='flex-grow'>
				{/* Hero Section with Parallax */}
				<section className='relative h-[50vh] overflow-hidden flex items-center'>
					<div
						className='absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 opacity-90'
						style={{ transform: `translateY(${scrollY * 0.5}px)` }}
					/>
					<div
						className='absolute inset-0 bg-center'
						style={{ transform: `translateY(${scrollY * 0.2}px)` }}
					/>
					<div className='container mx-auto px-4 relative z-10 text-white'>
						<motion.div
							initial='hidden'
							animate='visible'
							variants={fadeIn}
							className='max-w-3xl'>
							<h1 className='text-5xl md:text-6xl font-bold mb-6'>
								About EVTN
							</h1>
							<p className='text-xl md:text-2xl mb-8'>
								Revolutionizing the digital marketplace with
								innovative solutions and expert services.
							</p>
							<div className='flex flex-wrap gap-4'>
								<Button
									asChild
									size='lg'
									className='bg-white text-indigo-900 hover:bg-blue-100'>
									<Link href='#our-story'>Our Story</Link>
								</Button>
								<Button
									asChild
									size='lg'
									variant='outline'
									className='text-blue-400 border-white hover:bg-white/10'>
									<Link href='#services'>Our Services</Link>
								</Button>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Stats Section */}
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
								<p className='text-gray-700'>
									Countries Served
								</p>
							</motion.div>
							<motion.div
								variants={scaleIn}
								className='bg-gradient-to-br from-yellow-50 to-amber-100 p-6 rounded-lg'>
								<h3
									className='text-4xl font-bold text-yellow-600'
									ref={satisfactionCounter.ref}>
									{satisfactionCounter.count}%
								</h3>
								<p className='text-gray-700'>
									Client Satisfaction
								</p>
							</motion.div>
						</motion.div>
					</div>
				</section>

				{/* Our Story Section */}
				<section id='our-story' className='py-16 bg-gray-50'>
					<div className='container mx-auto px-4'>
						<div className='grid md:grid-cols-2 gap-12 items-center'>
							<motion.div
								initial='hidden'
								whileInView='visible'
								viewport={{ once: true }}
								variants={fadeIn}>
								<h2 className='text-3xl font-semibold mb-6'>
									Our Story
								</h2>
								<p className='text-lg mb-6'>
									Founded in 20211, EVTN emerged from a simple
									idea: to create a secure and efficient
									marketplace for digital assets. Our
									founders, seasoned entrepreneurs and tech
									enthusiasts, recognized the need for a
									platform where creators, investors, and
									businesses could connect to buy and sell
									online properties with confidence.
								</p>
								<p className='text-lg'>
									Today, EVTN stands as the premier
									destination for trading websites, social
									media accounts, and YouTube channels. We've
									facilitated thousands of transactions,
									helping digital entrepreneurs realize their
									dreams and investors discover exciting
									opportunities in the digital space.
								</p>
							</motion.div>
							<motion.div
								initial='hidden'
								whileInView='visible'
								viewport={{ once: true }}
								variants={scaleIn}
								className='relative h-80 md:h-full rounded-lg overflow-hidden'>
								<Image
									src='/webdev.webp?height=600&width=600&text=Our+Story'
									alt='Tech Bazar Story'
									fill
									className='object-cover'
								/>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Our Mission Section */}
				<section className='py-16 bg-white'>
					<div className='container mx-auto px-4'>
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeIn}
							className='text-center max-w-3xl mx-auto'>
							<h2 className='text-3xl font-semibold mb-6'>
								Our Mission
							</h2>
							<p className='text-xl mb-12'>
								At EVTN, our mission is to empower digital
								entrepreneurs and investors by providing a
								transparent, secure, and dynamic marketplace for
								online assets. We strive to foster innovation,
								facilitate growth, and create opportunities in
								the ever-evolving digital economy.
							</p>
						</motion.div>

						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={staggerContainer}
							className='grid md:grid-cols-3 gap-8'>
							<motion.div
								variants={scaleIn}
								className='bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg shadow-md'>
								<h3 className='text-xl font-semibold mb-4 text-indigo-700'>
									Transparency
								</h3>
								<p>
									We believe in open communication and clear
									processes, ensuring all parties have the
									information they need to make informed
									decisions.
								</p>
							</motion.div>
							<motion.div
								variants={scaleIn}
								className='bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-lg shadow-md'>
								<h3 className='text-xl font-semibold mb-4 text-purple-700'>
									Security
								</h3>
								<p>
									Protecting our users' data and assets is
									paramount. We employ state-of-the-art
									security measures to ensure safe
									transactions.
								</p>
							</motion.div>
							<motion.div
								variants={scaleIn}
								className='bg-gradient-to-br from-green-50 to-teal-100 p-8 rounded-lg shadow-md'>
								<h3 className='text-xl font-semibold mb-4 text-green-700'>
									Innovation
								</h3>
								<p>
									We continuously evolve our platform to meet
									the changing needs of the digital
									marketplace and stay ahead of industry
									trends.
								</p>
							</motion.div>
						</motion.div>
					</div>
				</section>

				{/* Digital Marketing Services Section */}
				<section id='services' className='py-16 bg-gray-50'>
					<div className='container mx-auto px-4'>
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeIn}
							className='text-center max-w-3xl mx-auto'>
							<h2 className='text-3xl font-semibold mb-6'>
								Our Digital Marketing Services
							</h2>
							<p className='text-lg mb-12'>
								At EVTN, we offer comprehensive digital
								marketing solutions designed to elevate your
								online presence, drive targeted traffic, and
								increase conversions. Our data-driven approach
								ensures measurable results and maximum ROI.
							</p>
						</motion.div>

						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={staggerContainer}
							className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{marketingServices.map((service, index) => (
								<motion.div
									key={index}
									variants={scaleIn}
									className='bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2'>
									<div
										className={`${service.color} h-2`}></div>
									<div className='p-6'>
										<div
											className={`${service.color} rounded-full p-3 inline-block mb-4`}>
											<service.icon className='h-6 w-6 text-white' />
										</div>
										<h3 className='text-xl font-semibold mb-3'>
											{service.title}
										</h3>
										<p className='text-gray-600'>
											{service.description}
										</p>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>
				</section>

				{/* Our Approach Section */}
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
											Get a customized digital marketing
											strategy tailored to your business
											needs.
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

				{/* Team Section */}
				<section className='py-16 bg-white'>
					<div className='container mx-auto px-4'>
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeIn}
							className='text-center max-w-3xl mx-auto'>
							<h2 className='text-3xl font-semibold mb-6'>
								Meet Our Leadership Team
							</h2>
							<p className='text-lg mb-12'>
								Our diverse team of experts brings together
								decades of experience in digital marketing,
								technology, and business development to deliver
								exceptional results for our clients.
							</p>
						</motion.div>

						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={staggerContainer}
							className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
							{teamMembers.map((member, index) => (
								<motion.div
									key={index}
									variants={scaleIn}
									className='bg-white rounded-lg shadow-md overflow-hidden text-center'>
									<div className='relative h-64'>
										<Image
											src={
												member.image ||
												"/placeholder.svg"
											}
											alt={member.name}
											fill
											className='object-cover'
										/>
									</div>
									<div className='p-6'>
										<h3 className='text-xl font-semibold'>
											{member.name}
										</h3>
										<p className='text-indigo-600 mb-3'>
											{member.role}
										</p>
										<p className='text-gray-600'>
											{member.bio}
										</p>
									</div>
								</motion.div>
							))}
						</motion.div>

						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeIn}
							className='text-center mt-12'>
							<Button asChild size='lg'>
								<Link href='/careers'>View Open Positions</Link>
							</Button>
						</motion.div>
					</div>
				</section>

				{/* Testimonials Section */}
				<section className='py-16 bg-gradient-to-b from-indigo-900 to-purple-900 text-white'>
					<div className='container mx-auto px-4'>
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeIn}
							className='text-center mb-12'>
							<h2 className='text-3xl font-semibold mb-4'>
								What Our Clients Say
							</h2>
							<p className='text-lg text-blue-200 max-w-2xl mx-auto'>
								Don't just take our word for it. Here's what our
								clients have to say about our digital marketing
								services.
							</p>
						</motion.div>

						<div className='relative max-w-4xl mx-auto'>
							<AnimatePresence mode='wait'>
								<motion.div
									key={activeTestimonial}
									initial={{ opacity: 0, x: 100 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -100 }}
									transition={{ duration: 0.5 }}
									className='bg-white/10 backdrop-blur-lg rounded-lg p-8'>
									<div className='flex flex-col md:flex-row items-center gap-6'>
										<div className='relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0'>
											<Image
												src={
													testimonials[
														activeTestimonial
													].image ||
													"/placeholder.svg"
												}
												alt={
													testimonials[
														activeTestimonial
													].author
												}
												fill
												className='object-cover'
											/>
										</div>
										<div>
											<p className='text-lg mb-4'>
												"
												{
													testimonials[
														activeTestimonial
													].quote
												}
												"
											</p>
											<p className='font-semibold'>
												{
													testimonials[
														activeTestimonial
													].author
												}
											</p>
											<p className='text-blue-300'>
												{
													testimonials[
														activeTestimonial
													].company
												}
											</p>
										</div>
									</div>
								</motion.div>
							</AnimatePresence>

							<div className='flex justify-center mt-8 space-x-2'>
								{testimonials.map((_, index) => (
									<button
										key={index}
										onClick={() =>
											setActiveTestimonial(index)
										}
										className={`w-3 h-3 rounded-full ${
											activeTestimonial === index
												? "bg-white"
												: "bg-white/30"
										}`}
										aria-label={`View testimonial ${
											index + 1
										}`}
									/>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className='py-16 bg-white'>
					<div className='container mx-auto px-4'>
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeIn}
							className='max-w-3xl mx-auto text-center'>
							<h2 className='text-3xl font-semibold mb-6'>
								Ready to Transform Your Digital Presence?
							</h2>
							<p className='text-lg mb-8'>
								Whether you're looking to buy or sell digital
								assets, or need expert digital marketing
								services, EVTN is here to help you succeed in
								the online world.
							</p>
							<div className='flex flex-wrap justify-center gap-4'>
								<Button asChild size='lg'>
									<Link href='/contact'>Contact Us</Link>
								</Button>
								<Button asChild size='lg' variant='outline'>
									<Link href='/services'>
										Explore Our Services
									</Link>
								</Button>
							</div>
						</motion.div>
					</div>
				</section>
			</main>
		</div>
	);
}
