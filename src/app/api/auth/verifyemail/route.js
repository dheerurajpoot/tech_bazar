import { connectDb } from "@/dbconfig/db";
import { User } from "@/models/user.model";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function POST(request) {
	try {
		await connectDb();
		const reqBody = await request.json();
		const { token } = reqBody;
		const user = await User.findOne({
			verifyToken: token,
			verifyTokenExpiry: { $gt: Date.now() },
		});

		if (!user) {
			return NextResponse.json(
				{ message: "Invalid Token" },
				{ status: 500 }
			);
		}

		await user.updateOne({
			$set: { isVerified: true },
			$unset: { verifyToken: "", verifyTokenExpiry: "" },
		});

		return NextResponse.json(
			{
				message: "Email Verification Successful",
				success: true,
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
