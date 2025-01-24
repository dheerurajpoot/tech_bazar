"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageUpload } from "@/components/image-upload";
import toast from "react-hot-toast";
import { Textarea } from "./ui/textarea";
import axios from "axios";

export default function AddBlogPostPage() {
	const router = useRouter();
	const [formData, setFormData] = useState({
		title: "",
		author: "",
		excerpt: "",
		content: "",
	});
	const [thumbnail, setThumbnail] = useState(null);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleImageUpload = (file) => {
		setThumbnail(file);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			console.log("Submitting blog post:", {
				...formData,
				thumbnail,
			});
			// const response = await axios.post(
			// 	"/api/admin/add-blog-post",
			// 	formData
			// );
			// console.log(response);
			// if (response.data.success) {
			// 	toast.success(response?.data?.message);
			// 	router.push("/blog");
			// }
		} catch (error) {
			console.error("Error creating blog:", error);
			toast.error(error?.data?.message);
		}
	};

	return (
		<div className='container mx-auto px-4 py-8'>
			<Card>
				<CardHeader>
					<CardTitle className='text-2xl font-bold'>
						Add New Blog Post
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div>
							<Label htmlFor='title'>Title</Label>
							<Input
								id='title'
								name='title'
								value={formData.title}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div>
							<Label htmlFor='author'>Author</Label>
							<Input
								id='author'
								name='author'
								value={formData.author}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div>
							<Label htmlFor='excerpt'>Featured Image</Label>
							<ImageUpload onImageUpload={handleImageUpload} />
						</div>
						<div>
							<Label htmlFor='excerpt'>Excerpt</Label>
							<Textarea
								id='excerpt'
								name='excerpt'
								value={formData.excerpt}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div>
							<Label htmlFor='content'>Content</Label>
							{/* editor */}
						</div>
						<Button type='submit'>Create Blog Post</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
