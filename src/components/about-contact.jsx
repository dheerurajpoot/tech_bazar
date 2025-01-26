"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function AboutContact() {
	return (
		<section className='py-16 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<div className='grid md:grid-cols-2 gap-8 items-center'>
					<div>
						<h2 className='text-3xl font-bold mb-4'>
							About Tech Bazar
						</h2>
						<p className='text-lg mb-6'>
							Tech Bazar is the premier marketplace for buying and
							selling digital assets. We connect entrepreneurs,
							investors, and digital creators in a secure and
							efficient platform. Whether you're looking to
							acquire a thriving online business or sell your
							digital property, Tech Bazar provides the tools and
							support you need to succeed.
						</p>
						<Button asChild>
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
								<span>support@techbazar.com</span>
							</div>
							<div className='flex items-center'>
								<Phone className='h-5 w-5 mr-2 text-primary' />
								<span>+1 (555) 123-4567</span>
							</div>
							<div className='flex items-center'>
								<MapPin className='h-5 w-5 mr-2 text-primary' />
								<span>
									123 Tech Street, San Francisco, CA 94105
								</span>
							</div>
							<Button asChild className='w-full'>
								<Link href='/contact'>Get in Touch</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
