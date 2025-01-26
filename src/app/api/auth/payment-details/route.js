import { connectDb } from "@/dbconfig/db";
import { User } from "@/models/user.model";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const revalidate = 0;

export async function PUT(request) {
	try {
		// Connect to the database
		await connectDb();

		// Parse the request body
		const reqBody = await request.json();
		const { userId, accountNumber, ifscCode, bankName, upiId } = reqBody;

		// Validate required fields
		if (!userId || !accountNumber || !ifscCode || !bankName || !upiId) {
			return NextResponse.json(
				{ message: "All fields are required" },
				{ status: 400 }
			);
		}

		// Update the user's payment details
		const updatedUser = await User.findByIdAndUpdate(
			userId,
			{
				paymentDetails: {
					bankName,
					accountNumber,
					ifscCode,
					upiId,
				},
			},
			{ new: true } 
		);

		// If user not found
		if (!updatedUser) {
			return NextResponse.json(
				{ message: "User not found" },
				{ status: 404 }
			);
		}

		// Create token data
		const tokenData = {
			id: updatedUser._id,
			username: updatedUser.username,
		};

		// Sign JWT token
		const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, {
			expiresIn: "30d",
		});

		// Respond with success
		return NextResponse.json({
			message: "Payment Details Added Successfully",
			success: true,
			user: {
				_id: updatedUser._id,
				username: updatedUser.username,
				email: updatedUser.email,
				phone: updatedUser.phone,
				role: updatedUser.role,
				token,
				createdAt: updatedUser.createdAt,
				paymentDetails: updatedUser.paymentDetails,
			},
		});
	} catch (error) {
		// Handle errors
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
