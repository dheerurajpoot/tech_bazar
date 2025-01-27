import { NextResponse } from "next/server";
import { sendMail } from "@/lib/orderMail";
import { contactMail } from "@/lib/mail-templates";

export async function POST(request) {
	try {
		const reqBody = await request.json();
		const { name, email, phone, subject, message } = reqBody;

		// Validate incoming data
		if (!name || !email || !phone || !subject || !message) {
			return NextResponse.json({
				message: "Invalid input. All fields are required.",
				status: 400,
			});
		}

		const contact = {
			name,
			email,
			phone,
			subject,
			message,
		};

		// send order confirmation mail to user
		await sendMail({
			email: process.env.MAIL_USER,
			subject: "You have received a new form submission!",
			template: contactMail(contact),
		});

		return NextResponse.json({
			message: "Your query is received Successfully",
			success: true,
			contact,
		});
	} catch (error) {
		console.log("Error in contact submission:", error);
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
