import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	CheckCircle,
	Target,
	BarChart2,
	DollarSign,
	Users,
	Zap,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
	title: "PPC Ads Campaigns",
};

export default function PPCAdsPage() {
	return (
		<div className='container mx-auto py-16'>
			<div className='grid md:grid-cols-2 gap-12 items-center mb-16 mt-16'>
				<div>
					<h2 className='text-3xl font-bold mb-4'>
						PPC & Ads Services
					</h2>
					<p className='text-lg mb-6'>
						Our PPC and advertising services help you reach your
						target audience effectively and maximize your ROI. We
						create and manage data-driven campaigns across various
						platforms to boost your online visibility and drive
						conversions.
					</p>
					<Link href='/contact'>
						<Button size='lg'>Get a Free PPC Audit</Button>
					</Link>
				</div>
				<div className='relative h-64 md:h-auto'>
					<Image
						src='/ppcads.webp'
						alt='Web Development'
						className='rounded-lg'
						width={400}
						height={300}
					/>
				</div>
			</div>

			<h3 className='text-2xl font-semibold mb-6'>
				Our PPC & Ads Services
			</h3>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<Target className='h-5 w-5 mr-2 text-blue-500' />
							Campaign Strategy
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Developing targeted PPC campaigns tailored to your
							business goals and target audience.
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<BarChart2 className='h-5 w-5 mr-2 text-green-500' />
							Performance Tracking
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Monitoring and analyzing campaign performance to
							optimize for better results.
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<DollarSign className='h-5 w-5 mr-2 text-purple-500' />
							Budget Management
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Efficiently allocating your ad spend to maximize ROI
							across different platforms.
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<Users className='h-5 w-5 mr-2 text-yellow-500' />
							Audience Targeting
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Identifying and reaching your ideal customers
							through precise audience segmentation.
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<Zap className='h-5 w-5 mr-2 text-red-500' />
							Ad Creation
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Crafting compelling ad copy and visuals that drive
							clicks and conversions.
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<CheckCircle className='h-5 w-5 mr-2 text-indigo-500' />
							Conversion Optimization
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Improving landing pages and user experience to
							increase conversion rates.
						</p>
					</CardContent>
				</Card>
			</div>

			<h3 className='text-2xl font-semibold mb-6'>
				Our PPC & Ads Process
			</h3>
			<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
				{[
					"Research & Planning",
					"Campaign Setup",
					"Monitoring & Optimization",
					"Reporting & Analysis",
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
					Why Choose Our PPC & Ads Services?
				</h3>
				<ul className='grid md:grid-cols-2 gap-4'>
					{[
						"Experienced PPC specialists",
						"Data-driven campaign strategies",
						"Transparent reporting and communication",
						"Continuous optimization for better ROI",
						"Multi-platform expertise (Google Ads, Facebook, LinkedIn, etc.)",
						"Integration with your overall digital marketing strategy",
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
					Ready to Boost Your Online Advertising?
				</h3>
				<p className='mb-6'>
					Contact us today for a comprehensive PPC strategy tailored
					to your business!
				</p>
				<Link href='https://wa.me/message/6PEUYSHOHEOAB1'>
					<Button size='lg'>Start Your Campaign</Button>
				</Link>
			</div>
		</div>
	);
}
