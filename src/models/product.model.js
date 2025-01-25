import mongoose from "mongoose";
import { User } from "./user.model";

const productModel = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		price: {
			type: Number,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		monetization: {
			type: String,
			required: true,
		},
		country: {
			type: String,
			required: true,
		},
		isSold: {
			type: Boolean,
			default: false,
		},
		inReview: {
			type: Boolean,
			default: true,
		},
		earningsPerMonth: {
			type: Number,
			default: 0,
		},
		traffic: {
			type: Number,
			default: 0,
		},
		images: [String],
		bids: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "User",
					required: true,
				},
				amount: {
					type: Number,
					required: true,
				},
			},
		],
		seller: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{ timestamps: true }
);

export const Product =
	mongoose.models.Product || mongoose.model("Product", productModel);
