import { connectDb } from "@/dbconfig/db";
import { sendMail } from "@/lib/mailer";
import { User } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;
export async function POST(request) {
	try {
		await connectDb();
		const reqBody = await request.json();
		const { email } = reqBody;

		const user = await User.findOne({ email });
		if (!user) {
			return NextResponse.json(
				{ message: "User Not Found" },
				{ status: 409 }
			);
		}
		// send Reset password mail
		await sendMail({
			email,
			emailType: "RESET",
			userId: user?._id,
		});
		return NextResponse.json({
			message: "Link Sended Successfully",
			success: true,
		});
	} catch (error) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
