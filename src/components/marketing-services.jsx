"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Pencil, Search, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEOService } from "./seo-service";
import { PPCService } from "./ppc-service";
import { ContentWritingService } from "./writing-service";

const services = [
	{
		icon: Pencil,
		title: "Content Writing",
		description:
			"Engaging, SEO-optimized content that resonates with your audience and drives conversions.",
		color: "text-teal-400",
	},
	{
		icon: Search,
		title: "SEO",
		description:
			"Boost your online visibility and climb search engine rankings with our expert SEO strategies.",
		color: "text-blue-400",
	},
	{
		icon: BarChart,
		title: "PPC Ads",
		description:
			"Targeted, high-performing ad campaigns that maximize your ROI and drive quality traffic.",
		color: "text-purple-400",
	},
];

export function MarketingServices() {
	const [activeTab, setActiveTab] = useState("content-writing");

	return (
		<section className='py-16 bg-gradient-to-b from-indigo-900 to-blue-800'>
			<div className='container mx-auto px-4'>
				<motion.h2
					className='text-4xl font-bold text-center text-white mb-12'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					Our Digital Marketing Services
				</motion.h2>
				<Tabs
					value={activeTab}
					onValueChange={setActiveTab}
					className='w-full'>
					<TabsList className='grid w-full grid-cols-3 bg-blue-900/50 rounded-xl p-1'>
						{services.map((service) => (
							<TabsTrigger
								key={service.title}
								value={service.title
									.toLowerCase()
									.replace(" ", "-")}
								className='data-[state=active]:bg-white data-[state=active]:text-blue-900'>
								<service.icon
									className={`h-5 w-5 mr-2 ${service.color}`}
								/>
								{service.title}
							</TabsTrigger>
						))}
					</TabsList>
					<div className='mt-8'>
						<TabsContent value='content-writing'>
							<ContentWritingService />
						</TabsContent>
						<TabsContent value='seo'>
							<SEOService />
						</TabsContent>
						<TabsContent value='ppc-ads'>
							<PPCService />
						</TabsContent>
					</div>
				</Tabs>
				<motion.div
					className='text-center mt-12'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}>
					<Button
						asChild
						size='lg'
						className='bg-teal-500 hover:bg-teal-600 text-white'>
						<Link href='/contact'>Get a Free Consultation</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
