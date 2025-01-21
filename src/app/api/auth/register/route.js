import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connectDb } from "@/dbconfig/db";
import { User } from "@/models/user.model";
import { sendMail } from "@/lib/mailer";

export async function POST(request) {
	try {
		await connectDb();
		const reqBody = await request.json();
		const { username, email, phone, password } = reqBody;

		const user = await User.findOne({ email });

		if (user) {
			return NextResponse.json(
				{ message: "Account already exist with this Email!" },
				{ status: 301 }
			);
		}
		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);
		const newUser = new User({
			username,
			email,
			phone,
			password: hashedPassword,
		});
		const savedUser = await newUser.save();
		// send verification mail
		await sendMail({
			email,
			emailType: "VERIFY",
			userId: savedUser._id,
		});

		return NextResponse.json({
			message: "Account Created Successfully",
			success: true,
			savedUser,
		});
	} catch (error) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
