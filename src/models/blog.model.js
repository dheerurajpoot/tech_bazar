import mongoose from "mongoose";

const blogModel = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		excerpt: {
			type: Number,
			required: true,
		},
		content: {
			type: String,
		},
		images: [String],
	},
	{ timestamps: true }
);

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogModel);
