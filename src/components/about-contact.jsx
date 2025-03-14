"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { Testimonials } from "./testimonials";

export function AboutContact() {
	return (
		<section className='py-32 bg-gradient-to-b from-gray-900 to-blue-900 text-white overflow-hidden'>
			<div className='container mx-auto px-4'>
				<div className='grid md:grid-cols-2 gap-8 items-center'>
					<div>
						<h2 className='text-3xl font-bold mb-4'>About EVTN</h2>
						<p className='text-lg mb-6'>
							EVTN is the premier marketplace for buying and
							selling digital assets. We connect entrepreneurs,
							investors, and digital creators in a secure and
							efficient platform. Whether you're looking to
							acquire a thriving online business or sell your
							digital property, EVTN provides the tools and
							support you need to succeed.
						</p>
						<Button
							asChild
							className='bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white border-none'>
							<Link href='/about'>Learn More About Us</Link>
						</Button>
					</div>
					<Card>
						<CardHeader>
							<CardTitle>Contact Us</CardTitle>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div className='flex items-center'>
								<Mail className='h-5 w-5 mr-2 text-primary' />
								<span>contact@evtn.org</span>
							</div>
							<div className='flex items-center'>
								<Phone className='h-5 w-5 mr-2 text-primary' />
								<span>+91 7755089819</span>
							</div>
							<div className='flex items-center'>
								<MapPin className='h-5 w-5 mr-2 text-primary' />
								<span>
									Bamba Road, Kalyanpur, Kanpur Nagar (208017)
								</span>
							</div>
							<Button
								asChild
								className='bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white border-none'>
								<Link href='/contact'>Get in Touch</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
				<Testimonials />
			</div>
		</section>
	);
}
