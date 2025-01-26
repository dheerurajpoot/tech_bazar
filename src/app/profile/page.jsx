"use client";
import React, { useContext, useState } from "react";
import ProfileLayout from "@/components/profile-layout";
import { AuthContext } from "../../../context/authContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PaymentDetailsDialog } from "@/components/payment-details";
import toast from "react-hot-toast";
import axios from "axios";

export default function ProfilePage() {
	const { user } = useContext(AuthContext);
	const [isLoading, setIsLoading] = useState(false);

	const handleSavePaymentDetails = async (details) => {
		try {
			const payload = {
				...details,
				userId: user?._id,
			};
			const response = await axios.put(
				"/api/auth/payment-details",
				payload
			);
			console.log(response);

			if (response.data.success) {
				localStorage.removeItem("user");
				localStorage.setItem(
					"user",
					JSON.stringify(response.data.user)
				);
				toast.success(response.data?.message);
			}
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
			toast.error(error?.data?.message);
		}
	};

	return (
		<ProfileLayout isAdmin={user?.role === "admin"}>
			<h1 className='text-2xl font-bold mb-4'>Profile</h1>
			<Card>
				<CardHeader>
					<CardTitle>User Information</CardTitle>
				</CardHeader>
				<CardContent>
					<div className='space-y-2'>
						<p>
							<strong>Name:</strong> {user?.username}
						</p>
						<p>
							<strong>Email:</strong> {user?.email}
						</p>
						<p>
							<strong>Phone:</strong> {user?.phone}
						</p>
						<p>
							<strong>Role:</strong> {user?.role}
						</p>
					</div>
				</CardContent>
			</Card>

			<Card className='mt-6'>
				<CardHeader>
					<CardTitle>Payment Details</CardTitle>
				</CardHeader>
				<CardContent>
					{user?.paymentDetails ? (
						<div className='space-y-2'>
							<p>
								<strong>Bank Name:</strong>{" "}
								{user?.paymentDetails?.bankName}
							</p>
							<p>
								<strong>Account Number:</strong>{" "}
								{user?.paymentDetails?.accountNumber}
							</p>
							<p>
								<strong>IFSC Code:</strong>{" "}
								{user?.paymentDetails?.ifscCode}
							</p>
							<p>
								<strong>UPI ID:</strong>{" "}
								{user?.paymentDetails?.upiId}
							</p>
						</div>
					) : (
						<p>No payment details added yet.</p>
					)}
					<div className='mt-4'>
						<PaymentDetailsDialog
							existingDetails={user?.paymentDetails}
							onSave={handleSavePaymentDetails}
						/>
					</div>
				</CardContent>
			</Card>
		</ProfileLayout>
	);
}
