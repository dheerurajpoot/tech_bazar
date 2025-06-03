"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
	{
		name: "Anuj Kumar",
		role: "Website Flipper",
		content:
			"EVTN made selling my e-commerce site a breeze. The platform's user-friendly interface and secure transaction process gave me peace of mind throughout the sale.",
	},
	{
		name: "Nitya Sharma",
		role: "Digital Entrepreneur",
		content:
			"I've bought and sold multiple digital assets on EVTN. The variety of listings and the detailed analytics provided for each asset are unmatched. It's my go-to platform for online business transactions.",
	},
	{
		name: "Amit Kumar",
		role: "YouTube Content Creator",
		content:
			"When I decided to sell my YouTube channel, EVTN connected me with serious buyers quickly. The bidding system helped me get the best value for my years of hard work.",
	},
	{
		name: "Tanu Rajpoot",
		role: "Social Media Influencer",
		content:
			"EVTN's valuation tools helped me understand the true worth of my Instagram account. The seamless transaction process made selling my account a smooth experience.",
	},
	{
		name: "Sandeep Kumar",
		role: "App Developer",
		content:
			"As a developer, I appreciate the technical due diligence EVTN facilitates. It's the perfect place to showcase and sell my apps to a targeted audience of tech-savvy buyers.",
	},
];

export function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			if (isMobile) {
				setCurrentIndex(
					(prevIndex) => (prevIndex + 1) % testimonials.length
				);
			}
		}, 5000);
		return () => clearInterval(timer);
	}, [isMobile]);

	const nextTestimonial = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + testimonials.length) % testimonials.length
		);
	};

	const renderTestimonial = (testimonial, index) => (
		<Card
			key={index}
			className='bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 transform hover:scale-105 transition-all duration-300 border border-gray-100 shadow-xl hover:shadow-2xl group relative overflow-hidden'>
			<CardContent className='pt-6 relative z-10'>
				<div className='absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500'></div>
				<Quote className='h-10 w-10 text-blue-600/20 mb-4' />
				<p className='text-gray-600 mb-6 leading-relaxed relative z-10'>
					{testimonial.content}
				</p>
				<div className='flex items-center'>
					<Avatar className='h-12 w-12 mr-4 ring-2 ring-blue-100 ring-offset-2'>
						<AvatarImage
							src={testimonial?.avatar}
							alt={testimonial.name}
						/>
						<AvatarFallback className='bg-gradient-to-br from-blue-600 to-indigo-600 text-white'>
							{testimonial.name
								.split(" ")
								.map((n) => n[0])
								.join("")}
						</AvatarFallback>
					</Avatar>
					<div>
						<p className='text-gray-900 font-semibold'>
							{testimonial.name}
						</p>
						<p className='text-sm text-gray-500'>
							{testimonial.role}
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);

	return (
		<section className='py-32 relative overflow-hidden'>
			<div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none'></div>
			<div className='container mx-auto px-4 relative z-10'>
				<div className='max-w-2xl mx-auto text-center mb-16'>
					<h2 className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text mb-4'>
						What Our Users Say
					</h2>
					<p className='text-gray-600 text-lg'>
						Discover why our users trust us with their digital
						assets
					</p>
				</div>
				<div className='relative px-8'>
					{isMobile ? (
						<div className='transition-all duration-500 ease-in-out'>
							{renderTestimonial(
								testimonials[currentIndex],
								currentIndex
							)}
						</div>
					) : (
						<div className='grid md:grid-cols-3 gap-8'>
							{testimonials
								.slice(currentIndex, currentIndex + 3)
								.map((testimonial, index) =>
									renderTestimonial(testimonial, index)
								)}
						</div>
					)}
					<Button
						variant='outline'
						size='icon'
						className='absolute text-gray-900 top-1/2 -left-4 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300'
						onClick={prevTestimonial}>
						<ChevronLeft className='h-5 w-5' />
					</Button>
					<Button
						variant='outline'
						size='icon'
						className='absolute text-gray-900 top-1/2 -right-4 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300'
						onClick={nextTestimonial}>
						<ChevronRight className='h-5 w-5' />
					</Button>
				</div>
			</div>
		</section>
	);
}
