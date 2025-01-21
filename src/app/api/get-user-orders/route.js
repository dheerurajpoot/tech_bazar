import { connectDb } from "@/dbconfig/db";
import { Order } from "@/models/order.model";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request) {
	try {
		await connectDb();
		const reqBody = await request.json();
		const { userId } = reqBody;
		const orders = await Order.find({ user: userId })
			.populate({
				path: "user",
				select: "username email phone role createdAt",
			})
			.populate({
				path: "product",
			})
			.lean();

		return NextResponse.json({
			message: "Orders Found",
			success: true,
			orders,
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
