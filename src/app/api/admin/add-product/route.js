import { NextResponse } from "next/server";
import { connectDb } from "@/dbconfig/db";
import { Product } from "@/models/product.model";
import { sendMail } from "@/lib/orderMail";
import { newProductMail } from "@/lib/mail-templates";

export async function POST(request) {
	try {
		await connectDb();
		const reqBody = await request.json();
		const {
			name,
			type,
			price,
			description,
			age,
			url,
			seller,
			inReview,
			monetization,
			country,
			earningsPerMonth,
			traffic,
			images,
		} = reqBody;

		// Validate incoming data
		if (
			!name ||
			!type ||
			!price ||
			!description ||
			!age ||
			!url ||
			!seller ||
			!monetization ||
			!country ||
			!inReview ||
			!earningsPerMonth ||
			!traffic ||
			!images ||
			!Array.isArray(images) ||
			images.length === 0
		) {
			return NextResponse.json({
				message: "Invalid input. All fields are required.",
				status: 400,
			});
		}

		const newProduct = new Product({
			title: name,
			type,
			price,
			description,
			age,
			url,
			seller,
			inReview,
			monetization,
			country,
			earningsPerMonth,
			traffic,
			images,
		});

		const savedProduct = await newProduct.save();
		// send order confirmation mail to admin
		await sendMail({
			email: process.env.MAIL_USER,
			subject: "New Product Added on EVTN!",
			template: newProductMail(savedProduct),
		});

		return NextResponse.json({
			message: "Product Added Successfully",
			success: true,
			product: savedProduct,
		});
	} catch (error) {
		console.error("Error saving product:", error);
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
