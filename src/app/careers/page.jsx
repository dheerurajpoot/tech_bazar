"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Filter, Briefcase, Clock, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

// Mock job data
const jobs = [
	{
		id: "content-writer-intern",
		title: "Content Writer Intern",
		department: "Marketing",
		location: "Remote",
		type: "Internship",
		experience: "0-1 years",
		postedDate: "2025-03-01",
		description:
			"Join our content team and help create engaging, SEO-optimized content for our clients.",
		featured: true,
	},
	{
		id: "seo-specialist-intern",
		title: "SEO Specialist Intern",
		department: "Marketing",
		location: "Remote",
		type: "Internship",
		experience: "0-1 years",
		postedDate: "2025-03-05",
		description:
			"Help improve our clients' search engine rankings with cutting-edge SEO strategies.",
		featured: true,
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export default function CareersPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [departmentFilter, setDepartmentFilter] = useState("all");
	const [typeFilter, setTypeFilter] = useState("all");

	// Filter jobs based on search term and filters
	const filteredJobs = jobs.filter((job) => {
		const matchesSearch =
			job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			job.description.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesDepartment =
			departmentFilter === "all" || job.department === departmentFilter;
		const matchesType = typeFilter === "all" || job.type === typeFilter;

		return matchesSearch && matchesDepartment && matchesType;
	});

	// Sort jobs to show featured ones first
	const sortedJobs = [...filteredJobs].sort((a, b) => {
		if (a.featured && !b.featured) return -1;
		if (!a.featured && b.featured) return 1;
		return (
			new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
		);
	});

	return (
		<div className='flex flex-col'>
			<main className='flex-grow'>
				{/* Hero Section */}
				<section className='py-20 mt-12 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800 text-white'>
					<div className='container mx-auto px-4'>
						<motion.div
							className='text-center max-w-3xl mx-auto'
							initial='hidden'
							animate='visible'
							variants={containerVariants}>
							<motion.h1
								className='text-4xl md:text-5xl font-bold mb-6'
								variants={itemVariants}>
								Join Our Team
							</motion.h1>
							<motion.p
								className='text-xl text-blue-200 mb-8'
								variants={itemVariants}>
								Discover exciting career opportunities at
								WebDeelers and be part of our mission to
								revolutionize the digital marketplace.
							</motion.p>
							<motion.div variants={itemVariants}>
								<Input
									type='text'
									placeholder='Search for jobs...'
									value={searchTerm}
									onChange={(e) =>
										setSearchTerm(e.target.value)
									}
									className='max-w-md mx-auto bg-white/10 text-white placeholder-blue-200 border-blue-300'
								/>
							</motion.div>
						</motion.div>
					</div>
				</section>

				{/* Job Listings Section */}
				<section className='py-16 bg-gray-50'>
					<div className='container mx-auto px-4'>
						<div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8'>
							<h2 className='text-3xl font-bold mb-4 md:mb-0'>
								Open Positions
							</h2>
							<div className='flex flex-col sm:flex-row gap-4'>
								<div className='flex items-center'>
									<Filter className='mr-2 h-5 w-5 text-gray-500' />
									<Select
										value={departmentFilter}
										onValueChange={setDepartmentFilter}>
										<SelectTrigger className='w-[180px]'>
											<SelectValue placeholder='Department' />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='all'>
												All Departments
											</SelectItem>
											<SelectItem value='Marketing'>
												Marketing
											</SelectItem>
											<SelectItem value='Engineering'>
												Engineering
											</SelectItem>
											<SelectItem value='Design'>
												Design
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className='flex items-center'>
									<Clock className='mr-2 h-5 w-5 text-gray-500' />
									<Select
										value={typeFilter}
										onValueChange={setTypeFilter}>
										<SelectTrigger className='w-[180px]'>
											<SelectValue placeholder='Job Type' />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='all'>
												All Types
											</SelectItem>
											<SelectItem value='Full-time'>
												Full-time
											</SelectItem>
											<SelectItem value='Part-time'>
												Part-time
											</SelectItem>
											<SelectItem value='Internship'>
												Internship
											</SelectItem>
											<SelectItem value='Contract'>
												Contract
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>
						</div>

						{sortedJobs.length > 0 ? (
							<div className='grid gap-6'>
								{sortedJobs.map((job) => (
									<Card
										key={job.id}
										className={`transition-all hover:shadow-md ${
											job.featured
												? "border-blue-500 border-2"
												: ""
										}`}>
										<CardHeader className='pb-2'>
											<div className='flex justify-between items-start'>
												<div>
													<CardTitle className='text-xl font-bold'>
														{job.title}
													</CardTitle>
													<div className='flex flex-wrap gap-2 mt-2'>
														<Badge
															variant='outline'
															className='flex items-center'>
															<Briefcase className='mr-1 h-3 w-3' />
															{job.department}
														</Badge>
														<Badge
															variant='outline'
															className='flex items-center'>
															<MapPin className='mr-1 h-3 w-3' />
															{job.location}
														</Badge>
														<Badge
															variant='outline'
															className='flex items-center'>
															<Clock className='mr-1 h-3 w-3' />
															{job.type}
														</Badge>
													</div>
												</div>
												{job.featured && (
													<Badge className='bg-blue-500 hover:bg-blue-600'>
														Featured
													</Badge>
												)}
											</div>
										</CardHeader>
										<CardContent>
											<p className='text-gray-600'>
												{job.description}
											</p>
											<p className='text-sm text-gray-500 mt-2'>
												Experience: {job.experience} •
												Posted:{" "}
												{/* {new Date(
													
												).toLocaleDateString()} */}
												{job.postedDate}
											</p>
										</CardContent>
										<CardFooter>
											<Button
												asChild
												className='w-full sm:w-auto'>
												<Link
													href={`/careers/${job.id}`}>
													View Details
													<ChevronRight className='ml-2 h-4 w-4' />
												</Link>
											</Button>
										</CardFooter>
									</Card>
								))}
							</div>
						) : (
							<div className='text-center py-12'>
								<h3 className='text-xl font-semibold mb-2'>
									No jobs found
								</h3>
								<p className='text-gray-600'>
									Try adjusting your search or filters to find
									what you're looking for.
								</p>
							</div>
						)}
					</div>
				</section>

				{/* Why Join Us Section */}
				<section className='py-16 bg-white'>
					<div className='container mx-auto px-4'>
						<h2 className='text-3xl font-bold text-center mb-12'>
							Why Join WebDeelers?
						</h2>
						<div className='grid md:grid-cols-3 gap-8'>
							{[
								{
									title: "Growth Opportunities",
									description:
										"We invest in our team's professional development with training, mentorship, and advancement opportunities.",
								},
								{
									title: "Innovative Environment",
									description:
										"Work on cutting-edge projects and contribute to shaping the future of digital commerce.",
								},
								{
									title: "Work-Life Balance",
									description:
										"Flexible work arrangements, competitive time off, and a culture that respects your personal time.",
								},
								{
									title: "Competitive Compensation",
									description:
										"We offer competitive salaries, performance bonuses, and comprehensive benefits packages.",
								},
								{
									title: "Diverse & Inclusive",
									description:
										"We celebrate diversity and are committed to creating an inclusive workplace for everyone.",
								},
								{
									title: "Make an Impact",
									description:
										"Your work directly contributes to helping entrepreneurs and businesses succeed in the digital economy.",
								},
							].map((benefit, index) => (
								<Card
									key={index}
									className='transition-all hover:shadow-md'>
									<CardHeader>
										<CardTitle>{benefit.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<p className='text-gray-600'>
											{benefit.description}
										</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className='py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white'>
					<div className='container mx-auto px-4 text-center'>
						<h2 className='text-3xl font-bold mb-6'>
							Don't See the Right Fit?
						</h2>
						<p className='text-xl mb-8 max-w-2xl mx-auto'>
							We're always looking for talented individuals to
							join our team. Send us your resume and we'll keep
							you in mind for future opportunities.
						</p>
						<Button
							asChild
							size='lg'
							className='bg-white text-blue-600 hover:bg-blue-100'>
							<Link href='/contact'>
								Submit General Application
							</Link>
						</Button>
					</div>
				</section>
			</main>
		</div>
	);
}
