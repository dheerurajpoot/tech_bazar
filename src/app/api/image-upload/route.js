import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
	try {
		const formData = await request.formData();
		const files = formData.getAll("files");

		if (!files || files.length === 0) {
			return NextResponse.json(
				{ message: "No files found" },
				{ status: 400 }
			);
		}

		// Upload each file to Cloudinary
		const uploadPromises = files.map(async (file) => {
			// Convert the file to a buffer
			const bytes = await file.arrayBuffer();
			const buffer = Buffer.from(bytes);

			// Upload the file
			return new Promise((resolve, reject) => {
				const uploadStream = cloudinary.uploader.upload_stream(
					{ folder: "product-images" },
					(error, result) => {
						if (error) reject(error);
						else resolve(result);
					}
				);
				uploadStream.end(buffer);
			});
		});

		// Wait for all uploads to complete
		const results = await Promise.all(uploadPromises);

		// Collect the URLs of uploaded images
		const imageUrls = results.map((result) => result.secure_url);

		return NextResponse.json({ images: imageUrls }, { status: 200 });
	} catch (error) {
		console.error("Error during upload:", error);
		return NextResponse.json(
			{ message: "File upload failed" },
			{ status: 500 }
		);
	}
}
