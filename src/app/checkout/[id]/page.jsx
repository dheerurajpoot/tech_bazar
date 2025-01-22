"use client";

import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { AuthContext } from "../../../../context/authContext";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";

export default function CheckoutPage({ params: rawParams }) {
	const [product, setProduct] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const productId = React.use(rawParams).id;
	const router = useRouter();
	const [paymentMethod, setPaymentMethod] = useState("");
	const { user } = useContext(AuthContext);
	const [paymentId, setPaymentId] = useState("");

	const getProduct = async () => {
		try {
			setIsLoading(true);
			const response = await axios.post("/api/get-product", {
				productId,
			});
			setProduct(response.data?.product);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getProduct();
	}, []);

	const handlePaymentMethodChange = (value) => {
		setPaymentMethod(value);
	};

	const onPaymentIdChange = (id) => {
		setPaymentId(id);
	};

	const payload = {
		user: user?._id,
		product: product?._id,
		amount: product.price,
		status: "Processing",
		paymentMethod,
		paymentId,
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setIsLoading(true);
			const response = await axios.post("/api/create-order", payload);
			console.log(response.data);

			if (response.data.success) {
				toast.success(response.data?.message);
				router.push(`/thank-you/${response?.data?.order?._id}`);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const accountDetails = {
		accountName: "Dheeru Rajpoot",
		accountNumber: "40839586491",
		ifscCode: "SBIN0001161",
		upiId: "adsenseservices90@axl",
		binanceAccountName: "AdsenseServices",
		binanceId: "556105059",
		trc20: "TEiKjQHn5sRpW69prMSsV2s38PQtndofhb",
	};

	return (
		<div className='container mx-auto px-4 py-16'>
			<h1 className='text-4xl font-bold mb-8'>Checkout</h1>
			<div className='grid md:grid-cols-2 gap-8'>
				<Card>
					<CardHeader>
						<CardTitle>Product Details</CardTitle>
					</CardHeader>
					<CardContent className='space-y-4'>
						<h2 className='text-2xl font-semibold'>
							{product.title}
						</h2>
						<p className='text-gray-600'>{product?.description}</p>
						<div className='grid grid-cols-2 gap-4'>
							<div>
								<Label>Type</Label>
								<p>{product?.type}</p>
							</div>
							<div>
								<Label>Age</Label>
								<p>{product?.age} months</p>
							</div>
							<div>
								<Label>Monetization</Label>
								<p>{product?.monetization}</p>
							</div>
							<div>
								<Label>Monthly Earnings</Label>
								<p>
									$
									{product?.earningsPerMonth?.toLocaleString()}
								</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Order Summary</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='space-y-2'>
							<div className='flex justify-between'>
								<span>{product?.title}</span>
								<span>${product?.price?.toLocaleString()}</span>
							</div>
							<Separator />
							<div className='flex justify-between font-bold'>
								<span>Total</span>
								<span>${product?.price?.toLocaleString()}</span>
							</div>
						</div>
					</CardContent>
					<CardFooter className='flex flex-col space-y-4'>
						<div className='w-full'>
							<h3 className='text-lg font-semibold mb-2'>
								Payment Method
							</h3>
							<RadioGroup
								// defaultValue='credit_card'
								onValueChange={handlePaymentMethodChange}
								className='space-y-2'>
								<div className='flex items-center space-x-2'>
									<RadioGroupItem value='upi' id='upi' />
									<Label htmlFor='upi'>UPI (India)</Label>
								</div>
								<div className='flex items-center space-x-2'>
									<RadioGroupItem
										value='binance'
										id='binance'
									/>
									<Label htmlFor='binance'>
										Binance (Crypto Wallet)
									</Label>
								</div>
								<div className='flex items-center space-x-2'>
									<RadioGroupItem
										value='bank_transfer'
										id='bank_transfer'
									/>
									<Label htmlFor='bank_transfer'>
										Bank Transfer (India)
									</Label>
								</div>
							</RadioGroup>
						</div>

						{paymentMethod === "upi" && (
							<Card className='w-full'>
								<CardHeader>
									<CardTitle>Payment Details</CardTitle>
								</CardHeader>
								<CardContent className='space-y-4'>
									<div className='space-y-2'>
										<Label>UPI ID</Label>
										<p className='font-medium'>
											{accountDetails.upiId}
										</p>
									</div>
									<div className='flex justify-center'>
										<Image
											src='/upiscanner.jpeg'
											alt='Payment Scanner'
											width={200}
											height={200}
											className='rounded-lg'
										/>
									</div>
									<div className='space-y-2'>
										<Label htmlFor='paymentId'>
											Transaction ID / Payment ID
										</Label>
										<Input
											id='paymentId'
											placeholder='Enter your transaction or payment ID'
											onChange={(e) =>
												onPaymentIdChange(
													e.target.value
												)
											}
										/>
									</div>
								</CardContent>
							</Card>
						)}

						{paymentMethod === "binance" && (
							<Card className='w-full'>
								<CardHeader>
									<CardTitle>Payment Details</CardTitle>
								</CardHeader>
								<CardContent className='space-y-4'>
									<div className='space-y-2'>
										<Label>Account Name</Label>
										<p className='font-medium'>
											{accountDetails.binanceAccountName}
										</p>
									</div>
									<div className='space-y-2'>
										<Label>Binance ID</Label>
										<p className='font-medium'>
											{accountDetails.binanceId}
										</p>
									</div>
									<div className='space-y-2'>
										<Label>TRC 20</Label>
										<p className='font-medium'>
											{accountDetails.trc20}
										</p>
									</div>
									<div className='flex justify-center'>
										<Image
											src='/usdtscanner.jpeg'
											alt='Payment Scanner'
											width={200}
											height={200}
											className='rounded-lg'
										/>
									</div>
									<div className='space-y-2'>
										<Label htmlFor='paymentId'>
											Transaction ID / Payment ID
										</Label>
										<Input
											id='paymentId'
											placeholder='Enter your transaction or payment ID'
											onChange={(e) =>
												onPaymentIdChange(
													e.target.value
												)
											}
										/>
									</div>
								</CardContent>
							</Card>
						)}

						{paymentMethod === "bank_transfer" && (
							<Card className='w-full'>
								<CardHeader>
									<CardTitle>Payment Details</CardTitle>
								</CardHeader>
								<CardContent className='space-y-4'>
									<div className='space-y-2'>
										<Label>Account Name</Label>
										<p className='font-medium'>
											{accountDetails.accountName}
										</p>
									</div>
									<div className='space-y-2'>
										<Label>Account Number</Label>
										<p className='font-medium'>
											{accountDetails.accountNumber}
										</p>
									</div>
									<div className='space-y-2'>
										<Label>IFSC Code</Label>
										<p className='font-medium'>
											{accountDetails.ifscCode}
										</p>
									</div>
									<div className='space-y-2'>
										<Label htmlFor='paymentId'>
											Transaction ID / Payment ID
										</Label>
										<Input
											id='paymentId'
											placeholder='Enter your transaction or payment ID'
											onChange={(e) =>
												onPaymentIdChange(
													e.target.value
												)
											}
										/>
									</div>
								</CardContent>
							</Card>
						)}

						<Button onClick={handleSubmit} className='w-full mt-4'>
							Complete Purchase
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
