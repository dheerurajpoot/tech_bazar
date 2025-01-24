"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

// Mock blog data (replace with actual data fetching in a real application)
const blogPosts = [
	{
		id: "1",
		title: "How to Value a Website for Sale",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		author: "John Doe",
		date: "2023-05-15",
		image: "/placeholder.svg?height=200&width=300&text=Website+Valuation",
		excerpt:
			"Learn the key factors that determine a website's value in the digital marketplace.",
	},
	{
		id: "2",
		title: "Top 5 Monetization Strategies for Instagram",
		content:
			"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		author: "Jane Smith",
		date: "2023-05-20",
		image: "/placeholder.svg?height=200&width=300&text=Instagram+Monetization",
		excerpt:
			"Discover the most effective ways to monetize your Instagram account and maximize your earnings.",
	},
	{
		id: "3",
		title: "The Future of E-commerce: Trends to Watch",
		content:
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		author: "Mike Johnson",
		date: "2023-05-25",
		image: "/placeholder.svg?height=200&width=300&text=E-commerce+Trends",
		excerpt:
			"Stay ahead of the curve with these emerging trends shaping the future of e-commerce.",
	},
];

export default function BlogPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredPosts, setFilteredPosts] = useState(blogPosts);

	const handleSearch = (query) => {
		setSearchQuery(query);
		const filtered = blogPosts.filter(
			(post) =>
				post.title.toLowerCase().includes(query.toLowerCase()) ||
				post.content.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredPosts(filtered);
	};

	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='mb-8'>
				<Input
					type='search'
					placeholder='Search blog posts...'
					value={searchQuery}
					onChange={(e) => handleSearch(e.target.value)}
					className='max-w-md'
				/>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{filteredPosts.map((post) => (
					<Card key={post.id}>
						<CardHeader>
							<img
								src={post.image || "/placeholder.svg"}
								alt={post.title}
								className='w-full h-48 object-cover rounded-t-lg'
							/>
						</CardHeader>
						<CardContent>
							<CardTitle className='mb-2'>{post.title}</CardTitle>
							<p className='text-sm text-gray-600 mb-2'>
								{post.excerpt}
							</p>
							<div className='text-sm text-gray-500'>
								<span>{post.author}</span> •{" "}
								<span>{post.date}</span>
							</div>
						</CardContent>
						<CardFooter>
							<Button asChild className='w-full'>
								<Link href={`/blog/${post.id}`}>Read More</Link>
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}
