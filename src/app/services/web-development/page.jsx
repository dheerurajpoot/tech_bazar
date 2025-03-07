import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	CheckCircle,
	Code,
	Smartphone,
	Zap,
	Database,
	Shield,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
	title: "Web Development Services",
};

export default function WebDevelopmentPage() {
	return (
		<div className='container mx-auto py-16'>
			<div className='grid md:grid-cols-2 gap-12 items-center mb-16 mt-16'>
				<div>
					<h2 className='text-3xl font-bold mb-4'>
						Web Development Services
					</h2>
					<p className='text-lg mb-6'>
						Our expert team delivers cutting-edge web development
						solutions tailored to your unique business needs. We
						combine creativity with technical expertise to build
						responsive, user-friendly, and scalable websites and web
						applications.
					</p>
					<Link href='/contact'>
						<Button size='lg'>Get a Free Consultation</Button>
					</Link>
				</div>
				<div className='relative h-64 md:h-auto'>
					<Image
						src='/webdev.webp'
						alt='Web Development'
						className='rounded-lg'
						width={400}
						height={300}
					/>
				</div>
			</div>

			<h3 className='text-2xl font-semibold mb-6'>
				Our Web Development Expertise
			</h3>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<Code className='h-5 w-5 mr-2 text-blue-500' />
							Frontend Development
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Creating responsive and interactive user interfaces
							using modern frameworks and libraries.
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<Database className='h-5 w-5 mr-2 text-green-500' />
							Backend Development
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Building robust server-side applications and APIs to
							power your web solutions.
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<Smartphone className='h-5 w-5 mr-2 text-purple-500' />
							Mobile-First Design
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Ensuring your website looks great and functions
							flawlessly on all devices.
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<Zap className='h-5 w-5 mr-2 text-yellow-500' />
							Performance Optimization
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Maximizing your website's speed and efficiency for
							an optimal user experience.
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<Shield className='h-5 w-5 mr-2 text-red-500' />
							Security Implementation
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Protecting your web applications with
							industry-standard security measures.
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<CheckCircle className='h-5 w-5 mr-2 text-indigo-500' />
							Quality Assurance
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Rigorous testing to ensure your web solutions are
							bug-free and reliable.
						</p>
					</CardContent>
				</Card>
			</div>

			<h3 className='text-2xl font-semibold mb-6'>
				Our Development Process
			</h3>
			<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
				{[
					"Requirements Gathering",
					"Design & Prototyping",
					"Development & Testing",
					"Deployment & Maintenance",
				].map((step, index) => (
					<Card key={index}>
						<CardHeader>
							<CardTitle className='text-center'>
								<span className='inline-block w-8 h-8 bg-blue-500 text-white rounded-full text-lg font-bold mb-2'>
									{index + 1}
								</span>
								<br />
								{step}
							</CardTitle>
						</CardHeader>
					</Card>
				))}
			</div>

			<div className='bg-gray-100 p-8 rounded-lg mb-16'>
				<h3 className='text-2xl font-semibold mb-4'>
					Why Choose Us for Web Development?
				</h3>
				<ul className='grid md:grid-cols-2 gap-4'>
					{[
						"Experienced team of developers",
						"Custom solutions tailored to your needs",
						"Cutting-edge technologies and best practices",
						"Ongoing support and maintenance",
						"Transparent communication and project management",
						"Competitive pricing and timely delivery",
					].map((item, index) => (
						<li key={index} className='flex items-center'>
							<CheckCircle className='h-5 w-5 text-green-500 mr-2' />
							{item}
						</li>
					))}
				</ul>
			</div>

			<div className='text-center'>
				<h3 className='text-2xl font-semibold mb-4'>
					Ready to Start Your Web Development Project?
				</h3>
				<p className='mb-6'>
					Contact us today for a free consultation and let's bring
					your web vision to life!
				</p>
				<Link href='https://wa.me/message/6PEUYSHOHEOAB1'>
					<Button size='lg'>Get in Touch</Button>
				</Link>
			</div>
		</div>
	);
}
