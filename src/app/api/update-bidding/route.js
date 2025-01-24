import { connectDb } from "@/dbconfig/db";
import { Product } from "@/models/product.model";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function PUT(request) {
	try {
		await connectDb();
		const reqBody = await request.json();

		const { productId, bidAmount, user } = reqBody;

		if (!productId || !bidAmount) {
			return NextResponse.json(
				{ message: "Missing required fields" },
				{ status: 400 }
			);
		}
		if (!user) {
			return NextResponse.json(
				{ message: "Please login for bidding!" },
				{ status: 400 }
			);
		}

		const updatedProduct = await Product.findByIdAndUpdate(
			productId,
			{
				$push: {
					bids: {
						user,
						amount: bidAmount,
					},
				},
			},
			{ new: true }
		);

		if (!updatedProduct) {
			return NextResponse.json(
				{ message: "Product not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json({
			message: "Bid Submitted Successfully",
			success: true,
			product: updatedProduct,
		});
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
