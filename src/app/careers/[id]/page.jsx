"use client";

import { CardFooter } from "@/components/ui/card";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	ArrowLeft,
	Briefcase,
	Clock,
	MapPin,
	Calendar,
	User,
	Award,
	CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";

// Mock job data - in a real app, this would come from an API or database
const jobs = [
	{
		id: "content-writer-intern",
		title: "Content Writer Intern",
		department: "Marketing",
		location: "Remote",
		type: "Internship",
		experience: "0-1 years",
		postedDate: "2025-03-01",
		salary: "Unpaid",
		description:
			"Join our content team and help create engaging, SEO-optimized content for our clients.",
		aboutRole:
			"As a Content Writer Intern at EVTN, you will work closely with our marketing team to create high-quality, engaging content for our website, blog, and social media channels. This is an excellent opportunity for aspiring writers to gain hands-on experience in digital marketing and content creation while working with a dynamic team of professionals.",
		responsibilities: [
			"Research and write SEO-optimized blog posts, articles, and website content",
			"Assist in creating compelling social media content",
			"Help develop content strategies for different client industries",
			"Proofread and edit content for grammar, spelling, and clarity",
			"Collaborate with the marketing team to ensure content aligns with brand voice and marketing goals",
			"Research industry trends and competitor content",
			"Assist in content performance analysis and reporting",
		],
		requirements: [
			"Currently pursuing or recently completed a degree in English, Journalism, Marketing, Communications, or related field",
			"Strong writing and editing skills with excellent grammar and attention to detail",
			"Basic understanding of SEO principles",
			"Ability to research and write about various topics",
			"Creative mindset with a passion for storytelling",
			"Good time management and organizational skills",
			"Proficiency in Google Docs, Microsoft Word, and other content creation tools",
			"Portfolio of writing samples (academic or personal)",
		],
		benefits: [
			"Training and work Experience",
			"Flexible remote work schedule",
			"Mentorship from experienced content marketers",
			"Opportunity for full-time employment based on performance",
			"Professional development opportunities",
			"Exposure to various industries and content types",
			"Collaborative and supportive work environment",
		],
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
		salary: "Unpaid",
		description:
			"Help improve our clients' search engine rankings with cutting-edge SEO strategies.",
		aboutRole:
			"As an SEO Specialist Intern at EVTN, you will assist our digital marketing team in implementing and optimizing SEO strategies for our clients. This internship offers hands-on experience in various aspects of search engine optimization, providing you with valuable skills in this high-demand field.",
		responsibilities: [
			"Conduct keyword research and analysis using industry tools",
			"Assist in on-page and off-page SEO optimization",
			"Help monitor website performance and search engine rankings",
			"Contribute to content optimization for SEO",
			"Assist in link building strategies and outreach",
			"Support technical SEO audits and implementations",
			"Help prepare SEO reports and presentations for clients",
		],
		requirements: [
			"Currently pursuing or recently completed a degree in Marketing, Digital Media, Computer Science, or related field",
			"Basic understanding of SEO principles and best practices",
			"Familiarity with SEO tools like Google Analytics, Search Console, Ahrefs, or SEMrush",
			"Strong analytical skills and attention to detail",
			"Good communication and writing abilities",
			"Eagerness to learn and stay updated with SEO trends",
			"Basic HTML knowledge is a plus",
			"Problem-solving mindset and ability to work in a team",
		],
		benefits: [
			"Training and work Experience",
			"Flexible remote work schedule",
			"Training and mentorship from experienced SEO professionals",
			"Opportunity for full-time employment based on performance",
			"Access to premium SEO tools and resources",
			"Exposure to diverse client projects across various industries",
			"Collaborative and innovative work environment",
		],
		featured: true,
	},
];

export default function JobDetailsPage() {
	const router = useRouter();
	const params = useParams();

	// Find the job based on the ID from the URL
	const job = jobs.find((j) => j?.id === params?.id);

	// If job not found, show error or redirect
	if (!job) {
		return (
			<div className='min-h-screen flex flex-col'>
				<Header />
				<main className='flex-grow container mx-auto px-4 py-16'>
					<div className='text-center'>
						<h1 className='text-3xl font-bold mb-4'>
							Job Not Found
						</h1>
						<p className='mb-8'>
							The job you're looking for doesn't exist or has been
							removed.
						</p>
						<Button asChild>
							<Link href='/careers'>View All Jobs</Link>
						</Button>
					</div>
				</main>
				<Footer />
			</div>
		);
	}

	return (
		<div className='flex flex-col'>
			<main className='flex-grow'>
				{/* Job Header */}
				<section className='py-16 mt-12 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800 text-white'>
					<div className='container mx-auto px-4'>
						<Button
							variant='ghost'
							className='text-white mb-6 hover:bg-white/10'
							onClick={() => router.push("/careers")}>
							<ArrowLeft className='mr-2 h-4 w-4' />
							Back to Jobs
						</Button>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}>
							<h1 className='text-3xl md:text-4xl font-bold mb-4'>
								{job.title}
							</h1>
							<div className='flex flex-wrap gap-3 mb-6'>
								<Badge
									variant='secondary'
									className='flex items-center'>
									<Briefcase className='mr-1 h-4 w-4' />
									{job.department}
								</Badge>
								<Badge
									variant='secondary'
									className='flex items-center'>
									<MapPin className='mr-1 h-4 w-4' />
									{job.location}
								</Badge>
								<Badge
									variant='secondary'
									className='flex items-center'>
									<Clock className='mr-1 h-4 w-4' />
									{job.type}
								</Badge>
								<Badge
									variant='secondary'
									className='flex items-center'>
									<User className='mr-1 h-4 w-4' />
									{job.salary}
								</Badge>
								<Badge
									variant='secondary'
									className='flex items-center'>
									<User className='mr-1 h-4 w-4' />
									{job.experience}
								</Badge>
								<Badge
									variant='secondary'
									className='flex items-center'>
									<Calendar className='mr-1 h-4 w-4' />
									Posted:{" "}
									{/* {new Date(
										job.postedDate
									).toLocaleDateString()} */}
									{job.postedDate}
								</Badge>
							</div>
							<p className='text-xl text-blue-200 mb-8'>
								{job.description}
							</p>
							<Link href='https://forms.gle/jZekZLjE7QWUZV9P6'>
								<Button
									size='lg'
									className='bg-white text-indigo-900 hover:bg-blue-100'>
									Apply Now
								</Button>
							</Link>
						</motion.div>
					</div>
				</section>

				{/* Job Details Tabs */}
				<section className='py-12 bg-gray-50'>
					<div className='container flex flex-col gap-6 mx-auto px-4'>
						<Card>
							<CardHeader>
								<CardTitle>About the Role</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-gray-700'>{job.aboutRole}</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Responsibilities</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='space-y-2'>
									{job.responsibilities.map((item, index) => (
										<li
											key={index}
											className='flex items-start'>
											<CheckCircle className='h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5' />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Requirements</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='space-y-2'>
									{job.requirements.map((item, index) => (
										<li
											key={index}
											className='flex items-start'>
											<CheckCircle className='h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5' />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Benefits</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='space-y-2'>
									{job.benefits.map((item, index) => (
										<li
											key={index}
											className='flex items-start'>
											<Award className='h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5' />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>

						<div className='text-center pt-4'>
							<Link href='https://forms.gle/jZekZLjE7QWUZV9P6'>
								<Button size='lg'>
									Apply for this Position
								</Button>
							</Link>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
