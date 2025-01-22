import mongoose from "mongoose";
import { User } from "./user.model";
import { Product } from "./product.model";

const orderModel = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Product",
			required: true,
		},
		amount: {
			type: Number,
			required: true,
		},
		paymentMethod: {
			type: String,
			required: true,
		},
		paymentId: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			required: true,
			enum: ["Processing", "Completed", "Failed", "Cancelled"],
			default: "Processing",
		},
	},
	{ timestamps: true }
);

export const Order =
	mongoose.models.Order || mongoose.model("Order", orderModel);
