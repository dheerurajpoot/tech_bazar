import { connectDb } from "@/dbconfig/db";
import { Order } from "@/models/order.model";
import { Product } from "@/models/product.model";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function PUT(request) {
	try {
		await connectDb();

		const reqBody = await request.json();
		const { status, orderId } = reqBody;

		if (!status || !orderId) {
			return NextResponse.json(
				{ message: "Status and Order ID are required" },
				{ status: 400 }
			);
		}

		const order = await Order.findById(orderId);
		if (!order) {
			return NextResponse.json(
				{ message: "Order not found" },
				{ status: 404 }
			);
		}

		order.status = status;
		await order.save();

		if (status === "Completed") {
			const product = await Product.findById(order.product);

			product.isSold = true;
			await product.save();

			if (!product) {
				return NextResponse.json(
					{ message: "Product not found" },
					{ status: 404 }
				);
			}
		}

		return NextResponse.json({
			message: "Order Updated Successfully",
			success: true,
		});
	} catch (error) {
		console.log("Error updating order:", error);
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
