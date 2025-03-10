"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
	const [token, setToken] = useState("");
	const [passwords, setPasswords] = useState({
		newPassword: "",
		confirmPassword: "",
	});
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const tokenUrl = window.location.search.split("=")[1];
		setToken(tokenUrl);
	}, []);

	const onResetPassword = async () => {
		try {
			if (passwords.newPassword !== passwords.confirmPassword) {
				toast.error("Passwords do not match");
				return;
			}
			setLoading(true);
			const response = await axios.put("/api/auth/newpassword", {
				newPassword: passwords.newPassword,
				token,
			});
			toast.success(response.data.message);
			setLoading(false);
			router.push("/login");
		} catch (error) {
			setLoading(false);
			toast.error(error.response.data.message);
		}
	};
	return (
		<div className='container mx-auto px-4 py-8 mt-20'>
			<div className='max-w-md mx-auto'>
				<div className='w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800'>
					<div className='space-y-2 text-center'>
						<h1 className='text-3xl font-bold'>Reset Password</h1>
						<p className='text-gray-500 dark:text-gray-400'>
							Enter new password here
						</p>
					</div>
					<form className='space-y-4'>
						<div className='space-y-2'>
							<Label htmlFor='password'>Password</Label>
							<Input
								id='password'
								type='password'
								placeholder='Enter password'
								required
								value={passwords.newPassword}
								onChange={(e) =>
									setPasswords({
										...passwords,
										newPassword: e.target.value,
									})
								}
							/>
						</div>
						<div className='space-y-2'>
							<Label htmlFor='cpassword'>Confirm Password</Label>
							<Input
								id='cpassword'
								type='password'
								placeholder='Confirm password'
								required
								value={passwords.confirmPassword}
								onChange={(e) =>
									setPasswords({
										...passwords,
										confirmPassword: e.target.value,
									})
								}
							/>
						</div>
						<Button
							type='button'
							onClick={onResetPassword}
							className='w-full'>
							{loading ? "Processing" : "Reset Password"}
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
