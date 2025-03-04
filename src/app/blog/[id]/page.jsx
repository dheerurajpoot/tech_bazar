"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock function to fetch a blog post (replace with actual data fetching in a real application)
const fetchBlogPost = (id) => {
	const blogPosts = [
		{
			id: "1",
			title: "How to Value a Website for Sale",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			author: "John Doe",
			date: "2023-05-15",
			image: "/placeholder.svg?height=400&width=800&text=Website+Valuation",
			excerpt:
				"Learn the key factors that determine a website's value in the digital marketplace.",
		},
		// Add more blog posts here...
	];
	return blogPosts.find((post) => post.id === id);
};

export default function BlogPostPage({ params }) {
	const router = useRouter();
	const [post, setPost] = useState();

	useEffect(() => {
		const fetchedPost = fetchBlogPost(params.id);
		if (fetchedPost) {
			setPost(fetchedPost);
		} else {
			// Redirect to 404 page if post is not found
			router.push("/404");
		}
	}, [params.id, router]);

	if (!post) {
		return <div>Loading...</div>;
	}

	return (
		<div className='container mx-auto px-4 py-8 mt-16'>
			<Button
				variant='outline'
				onClick={() => router.push("/blog")}
				className='mb-4'>
				Back to Blog
			</Button>

			<Card>
				<CardHeader>
					<img
						src={post.image || "/placeholder.svg"}
						alt={post.title}
						className='w-full h-64 object-cover rounded-t-lg'
					/>
					<CardTitle className='text-3xl font-bold mt-4'>
						{post.title}
					</CardTitle>
					<div className='text-sm text-gray-500 mt-2'>
						<span>{post.author}</span> • <span>{post.date}</span>
					</div>
				</CardHeader>
				<CardContent>
					<div className='prose max-w-none'>
						{post.content.split("\n").map((paragraph, index) => (
							<p key={index} className='mb-4'>
								{paragraph}
							</p>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
