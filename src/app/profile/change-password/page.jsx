"use client";

import React, { useContext, useState } from "react";
import ProfileLayout from "@/components/profile-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "../../../../context/authContext";
import axios from "axios";
import toast from "react-hot-toast";

export default function ChangePasswordPage() {
	const { user } = useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);

	const forgotPassword = async () => {
		try {
			setLoading(true);
			const response = await axios.post("/api/auth/forgot-password", {
				email,
			});
			toast.success(response.data.message);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			toast.error(error.response.data.message);
		}
	};
	return (
		<ProfileLayout isAdmin={user?.role === "admin"}>
			<h1 className='text-2xl font-bold mb-4'>Change Password</h1>
			<form className='space-y-4'>
				<div className='space-y-2'>
					<Label htmlFor='email'>Email</Label>
					<Input
						id='email'
						type='email'
						placeholder='test@example.com'
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<Button type='button' onClick={forgotPassword}>
					{loading ? "Sending..." : "Send Reset Link"}
				</Button>
			</form>
		</ProfileLayout>
	);
}
