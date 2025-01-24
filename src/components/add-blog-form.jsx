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
export default function AddBlogPostPage() {
	const router = useRouter();
	const editorRef = useRef;
	const [formData, setFormData] = useState({
		title: "",
		author: "",
		excerpt: "",
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
		const content = editorRef.current ? editorRef.current.getContent() : "";

		// Here you would typically send the form data to your backend
		console.log("Submitting blog post:", {
			...formData,
			content,
			thumbnail,
		});

		// Simulating an API call
		await new Promise((resolve) => setTimeout(resolve, 1000));

		toast.success("blog posted");

		// Redirect to the blog page or a success page
		router.push("/blog");
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
							{/* <Editor
                apiKey="your-tinymce-api-key" // Replace with your actual TinyMCE API key
                onInit={(evt, editor) => (editorRef.current = editor)}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              /> */}
						</div>
						<Button type='submit'>Create Blog Post</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
