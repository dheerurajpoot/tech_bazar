import { NextResponse } from "next/server";
import { connectDb } from "@/dbconfig/db";
import { Order } from "@/models/order.model";
import { sendMail } from "@/lib/orderMail";
import {
	newOrderMail,
	orderEmailTemplate,
	userOrderMail,
} from "@/lib/mail-templates";

export async function POST(request) {
	try {
		await connectDb();
		const reqBody = await request.json();
		const { user, product, amount, status, paymentMethod, paymentId } =
			reqBody;

		// Validate incoming data
		if (!user || !product || !amount || !status) {
			return NextResponse.json({
				message: "Invalid input. All fields are required.",
				status: 400,
			});
		}
		if (!paymentMethod || !paymentId) {
			return NextResponse.json({
				message: "Please choose a payment method!.",
				status: 400,
			});
		}

		const newOrder = new Order({
			user,
			product,
			amount,
			status,
			paymentMethod,
			paymentId,
		});

		const order = await newOrder.save();

		const orderDetails = await Order.findById(order?._id)
			.populate({
				path: "user",
				select: "username email phone",
			})
			.populate({
				path: "product",
				populate: {
					path: "seller",
					select: "username email phone",
				},
			})
			.lean();

		// send order confirmation mail to user
		await sendMail({
			email: orderDetails?.user?.email,
			subject: "Order Confirmation",
			template: orderEmailTemplate(orderDetails),
		});
		// send order confirmation mail to admin
		await sendMail({
			email: process.env.MAIL_USER,
			subject: "You have received a New Order!",
			template: newOrderMail(),
		});
		// send order confirmation mail to admin
		await sendMail({
			email: orderDetails?.product?.seller?.email,
			subject: "Your product is sold!",
			template: userOrderMail(),
		});

		return NextResponse.json({
			message: "Order Placed Successfully",
			success: true,
			order,
		});
	} catch (error) {
		console.log("Error in placing order:", error);
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
