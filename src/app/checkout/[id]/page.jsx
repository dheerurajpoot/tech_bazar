"use client";

import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
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

			toast.success(response.data?.message);
			if (response.data.success) {
				router.push(`/thank-you/${response?.data?.order?._id}`);
			}
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			toast.error(error?.data?.message);
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
						{product?.images && (
							<Image
								src={product?.images[0] || "./placeholder.svg"}
								alt={product?.title}
								width={400}
								height={300}
								className='w-full h-auto rounded-lg'
							/>
						)}
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
									<CardDescription>
										Make payment on given UPI ID or Scanner
										and Submit your payment or Transection
										ID in the box below. We will verify your
										payment and complete your order ASAP.
									</CardDescription>
									<div className='space-x-2'>
										<Label>UPI ID</Label>
										<div className='flex items-center space-x-2'>
											<p className='font-medium'>
												{accountDetails.upiId}
											</p>
											<button
												className='px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600'
												onClick={() => {
													navigator.clipboard.writeText(
														accountDetails.upiId
													);
													toast.success(
														"UPI ID copied!"
													);
												}}>
												Copy
											</button>
										</div>
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
									<CardDescription>
										Make payment on given Binance ID, TRC20
										Address or Scanner and Submit your
										payment or Transection ID in the box
										below. We will verify your payment and
										complete your order ASAP.
									</CardDescription>
									<div className='space-y-2'>
										<Label>Account Name</Label>
										<p className='font-medium'>
											{accountDetails.binanceAccountName}
										</p>
									</div>
									<div className='space-x-2'>
										<Label>Binance ID</Label>
										<div className='flex items-center space-x-2'>
											<p className='font-medium'>
												{accountDetails.binanceId}
											</p>
											<button
												className='px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600'
												onClick={() => {
													navigator.clipboard.writeText(
														accountDetails.binanceId
													);
													toast.success(
														"Binance ID copied!"
													);
												}}>
												Copy
											</button>
										</div>
									</div>
									<div className='space-x-2'>
										<Label>TRC 20</Label>
										<div className='flex items-center space-x-2'>
											<p className='font-medium'>
												{accountDetails.trc20}
											</p>
											<button
												className='px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600'
												onClick={() => {
													navigator.clipboard.writeText(
														accountDetails.trc20
													);
													toast.success(
														"TRC20 address copied!"
													);
												}}>
												Copy
											</button>
										</div>
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
									<CardDescription>
										Make payment on the given Bank Account
										Details and submit your payment or
										Transaction ID in the box below. We will
										verify your payment and complete your
										order ASAP.
									</CardDescription>

									<div className='space-y-2'>
										<Label>Account Name</Label>
										<div className='flex items-center space-x-2'>
											<p className='font-medium'>
												{accountDetails.accountName}
											</p>
											<button
												className='px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600'
												onClick={() => {
													navigator.clipboard.writeText(
														accountDetails.accountName
													);
													toast.success(
														"Account Name copied!"
													);
												}}>
												Copy
											</button>
										</div>
									</div>

									<div className='space-y-2'>
										<Label>Account Number</Label>
										<div className='flex items-center space-x-2'>
											<p className='font-medium'>
												{accountDetails.accountNumber}
											</p>
											<button
												className='px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600'
												onClick={() => {
													navigator.clipboard.writeText(
														accountDetails.accountNumber
													);
													toast.success(
														"Account Number copied!"
													);
												}}>
												Copy
											</button>
										</div>
									</div>

									<div className='space-y-2'>
										<Label>IFSC Code</Label>
										<div className='flex items-center space-x-2'>
											<p className='font-medium'>
												{accountDetails.ifscCode}
											</p>
											<button
												className='px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600'
												onClick={() => {
													navigator.clipboard.writeText(
														accountDetails.ifscCode
													);
													toast.success(
														"IFSC Code copied!"
													);
												}}>
												Copy
											</button>
										</div>
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
							{isLoading
								? "Processing Order..."
								: "Complete Purchase"}
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
