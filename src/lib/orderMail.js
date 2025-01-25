import nodemailer from "nodemailer";

export const sendMail = async ({ email, subject, template }) => {
	try {
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS,
			},
		});

		const mailOptions = {
			from: '"Tech Bazar" <evtnofficial@gmail.com>',
			to: email,
			subject: subject,
			text: "",
			html: template,
		};

		const mailResponse = await transporter.sendMail(mailOptions);
		return mailResponse;
	} catch (error) {
		throw new Error(`Error sending email: ${error.message}`);
	}
};
