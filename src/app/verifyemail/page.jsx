"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
	const [token, setToken] = useState("");
	const [verified, setVerified] = useState(false);
	const [error, setError] = useState(false);

	const verifyUserMail = async () => {
		try {
			await axios.post("/api/auth/verifyemail", { token });
			setVerified(true);
		} catch (error) {
			setError(true);
			throw new Error(error);
		}
	};
	useEffect(() => {
		const tokenUrl = window.location.search.split("=")[1];
		setToken(tokenUrl);
	}, []);
	return (
		<div className='container mx-auto px-4 py-8 flex flex-col relative items-center justify-center'>
			{!verified && (
				<div>
					<h2 className='text-2xl mb-4 font-semibold'>
						Verify your email
					</h2>
					<Button onClick={verifyUserMail}>
						Click to verify email
					</Button>
				</div>
			)}
			{verified && (
				<div className='text-center'>
					<h3 className='text-2xl font-semibold text-green-700'>
						Verification Successfull
					</h3>
					<Link
						href={"/login"}
						className='text-blue-600 font-semibold underline '>
						Login to Account
					</Link>
				</div>
			)}
			{error && (
				<div>
					<h3 className='text-2xl font-semibold text-red-600'>
						Mail verification failed
					</h3>
				</div>
			)}
		</div>
	);
}
