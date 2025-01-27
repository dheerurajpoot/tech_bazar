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
		<Card key={index} className='h-full'>
			<CardContent className='pt-6'>
				<Quote className='h-8 w-8 text-primary opacity-20 mb-2' />
				<p className='text-gray-600 mb-4'>{testimonial.content}</p>
				<div className='flex items-center'>
					<Avatar className='h-10 w-10 mr-3'>
						<AvatarImage
							src={testimonial?.avatar}
							alt={testimonial.name}
						/>
						<AvatarFallback>
							{testimonial.name
								.split(" ")
								.map((n) => n[0])
								.join("")}
						</AvatarFallback>
					</Avatar>
					<div>
						<p className='font-semibold'>{testimonial.name}</p>
						<p className='text-sm text-gray-500'>
							{testimonial.role}
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);

	return (
		<section className='py-16 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-12'>
					What Our Users Say
				</h2>
				<div className='relative'>
					{isMobile ? (
						<div className='transition-all duration-300 ease-in-out'>
							{renderTestimonial(
								testimonials[currentIndex],
								currentIndex
							)}
						</div>
					) : (
						<div className='grid md:grid-cols-3 gap-6'>
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
						className='absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2'
						onClick={prevTestimonial}>
						<ChevronLeft className='h-4 w-4' />
					</Button>
					<Button
						variant='outline'
						size='icon'
						className='absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2'
						onClick={nextTestimonial}>
						<ChevronRight className='h-4 w-4' />
					</Button>
				</div>
			</div>
		</section>
	);
}
