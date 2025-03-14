import { connectDb } from "@/dbconfig/db";
import { User } from "@/models/user.model";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const revalidate = 0;
export async function PUT(request) {
	try {
		await connectDb();
		const reqBody = await request.json();

		const { userId, username, email, phone } = reqBody;
		const updatedUser = await User.findByIdAndUpdate(
			userId,
			{
				username: username,
				email: email,
				phone: phone,
			},
			{ new: true }
		);
		if (!updatedUser) {
			return NextResponse.json(
				{ message: "User not found" },
				{ status: 400 }
			);
		}

		const tokenData = {
			id: updatedUser._id,
			username: updatedUser.username,
		};

		const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, {
			expiresIn: "30d",
		});

		return NextResponse.json({
			message: "Profile Updated Successfully",
			success: true,
			user: {
				_id: updatedUser._id,
				username: updatedUser.username,
				email: updatedUser.email,
				phone: updatedUser.phone,
				role: updatedUser?.role,
				token: token,
				createdAt: updatedUser?.createdAt,
			},
		});
	} catch (error) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
