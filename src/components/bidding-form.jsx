"use client";

import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

export function BiddingForm({ productId, bids }) {
	const [bidAmount, setBidAmount] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { user } = useContext(AuthContext);

	const sortedBids = [...bids].sort((a, b) => b.amount - a.amount);
	const topThreeBids = sortedBids.slice(0, 3);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const payload = {
				productId,
				bidAmount,
				user: user?._id,
			};

			const response = await axios.put("/api/update-bidding", payload);

			console.log(response.data);

			toast.success("Your bid is submitted");

			setBidAmount("");
		} catch (error) {
			console.log(error);

			toast.error(error.response?.data?.message);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className='space-y-6'>
			<Card>
				<CardHeader>
					<CardTitle>Top Bids</CardTitle>
				</CardHeader>
				<CardContent>
					{topThreeBids.length > 0 ? (
						<ul className='space-y-2'>
							{topThreeBids.map((bid, index) => (
								<li
									key={index}
									className='flex justify-between items-center'>
									<span>{bid?.user?.username}</span>
									<span className='font-semibold'>
										${bid?.amount?.toFixed(2)}
									</span>
								</li>
							))}
						</ul>
					) : (
						<p>No bids yet. Be the first to bid!</p>
					)}
				</CardContent>
			</Card>

			<form
				onSubmit={handleSubmit}
				className='space-y-4 flex gap-3 items-center'>
				<div className='w-[78%]'>
					<Label htmlFor='bidAmount'>Your Bid</Label>
					<Input
						id='bidAmount'
						type='number'
						value={bidAmount}
						onChange={(e) => setBidAmount(e.target.value)}
						placeholder='Enter your bidding amount'
						required
					/>
				</div>
				<Button
					className='w-[20%]'
					type='submit'
					disabled={isSubmitting}>
					{isSubmitting ? "Submitting..." : "Place Bid"}
				</Button>
			</form>
		</div>
	);
}
