import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	CheckCircle,
	Edit,
	Search,
	BarChart,
	FileText,
	Globe,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
	title: "Content Writing & SEO",
};

export default function ContentWritingSEOPage() {
	return (
		<div>
			<div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
				<div>
					<h2 className='text-3xl font-bold mb-4'>
						Content Writing & SEO Services
					</h2>
					<p className='text-lg mb-6'>
						Our content writing and SEO services are designed to
						boost your online presence and engage your target
						audience. We create compelling, SEO-optimized content
						that drives traffic and improves your search engine
						rankings.
					</p>
					<Link href='/contact'>
						<Button size='lg'>Request a Content Strategy</Button>
					</Link>
				</div>
				<div className='relative h-64 md:h-auto'>
					<Image
						src='/seo.webp'
						alt='Web Development'
						className='rounded-lg'
						width={400}
						height={300}
					/>
				</div>
			</div>

			<h3 className='text-2xl font-semibold mb-6'>
				Our Content & SEO Services
			</h3>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<Edit className='h-5 w-5 mr-2 text-blue-500' />
							Content Creation
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Crafting engaging and informative content tailored
							to your audience and brand voice.
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<Search className='h-5 w-5 mr-2 text-green-500' />
							SEO Optimization
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Implementing on-page and off-page SEO strategies to
							improve your search engine rankings.
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<BarChart className='h-5 w-5 mr-2 text-purple-500' />
							Keyword Research
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Identifying high-value keywords to target and
							improve your organic search visibility.
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<FileText className='h-5 w-5 mr-2 text-yellow-500' />
							Content Strategy
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Developing comprehensive content plans aligned with
							your business goals and target audience.
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<Globe className='h-5 w-5 mr-2 text-red-500' />
							Link Building
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Creating high-quality backlinks to boost your
							website's authority and search rankings.
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<CheckCircle className='h-5 w-5 mr-2 text-indigo-500' />
							Content Audit
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Analyzing your existing content and providing
							recommendations for improvement and optimization.
						</p>
					</CardContent>
				</Card>
			</div>

			<h3 className='text-2xl font-semibold mb-6'>
				Our Content & SEO Process
			</h3>
			<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
				{[
					"Research & Analysis",
					"Strategy Development",
					"Content Creation & Optimization",
					"Measurement & Refinement",
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
					Why Choose Our Content & SEO Services?
				</h3>
				<ul className='grid md:grid-cols-2 gap-4'>
					{[
						"Expert content writers and SEO specialists",
						"Data-driven strategies for measurable results",
						"Customized approach for your industry and target audience",
						"Consistent, high-quality content creation",
						"Comprehensive SEO audits and recommendations",
						"Transparent reporting and communication",
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
					Ready to Boost Your Online Presence?
				</h3>
				<p className='mb-6'>
					Contact us today to discuss your content and SEO needs!
				</p>
				<Link href='https://wa.me/message/6PEUYSHOHEOAB1'>
					<Button size='lg'>Get Started</Button>
				</Link>
			</div>
		</div>
	);
}
