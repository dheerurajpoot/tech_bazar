"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Pencil, Search, BarChart } from "lucide-react";
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
		gradient: "from-green-50 to-teal-100",
		color: "text-green-600",
	},
	{
		icon: Search,
		title: "SEO",
		description:
			"Boost your online visibility and climb search engine rankings with our expert SEO strategies.",
		gradient: "from-blue-50 to-indigo-100",
		color: "text-indigo-600",
	},
	{
		icon: BarChart,
		title: "PPC Ads",
		description:
			"Targeted, high-performing ad campaigns that maximize your ROI and drive quality traffic.",
		gradient: "from-purple-50 to-pink-100",
		color: "text-purple-600",
	},
];

export function MarketingServices() {
	const [activeTab, setActiveTab] = useState("content-writing");

	return (
		<section className='py-16 bg-white'>
			<div className='container mx-auto px-4'>
				<motion.h2
					className='text-4xl font-bold text-center text-gray-900 mb-12'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					Our Digital Marketing Services
				</motion.h2>
				<Tabs
					value={activeTab}
					onValueChange={setActiveTab}
					className='w-full'>
					<TabsList className='grid w-full grid-cols-3 bg-white rounded-xl p-1 border border-gray-200'>
						{services.map((service) => (
							<TabsTrigger
								key={service.title}
								value={service.title
									.toLowerCase()
									.replace(" ", "-")}
								className='font-sans text-gray-700 data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-50 data-[state=active]:to-indigo-100'>
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
			</div>
		</section>
	);
}
