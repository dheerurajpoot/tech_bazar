import { NextResponse } from "next/server";
import { connectDb } from "@/dbconfig/db";
import { Blog } from "@/models/blog.model";

export async function POST(request) {
	try {
		await connectDb();
		const reqBody = await request.json();
		const { title, author, excerpt, content, images } = reqBody;

		// Validate incoming data
		if (
			!title ||
			!author ||
			!excerpt ||
			!content ||
			!images ||
			!Array.isArray(images) ||
			images.length === 0
		) {
			return NextResponse.json({
				message: "Invalid input. All fields are required.",
				status: 400,
			});
		}

		const newBlog = new Blog({
			title,
			author,
			excerpt,
			content,
			images,
		});

		const savedBlog = await newBlog.save();

		return NextResponse.json({
			message: "Blog Added Successfully",
			success: true,
			product: savedBlog,
		});
	} catch (error) {
		console.error("Error saving blog:", error);
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
