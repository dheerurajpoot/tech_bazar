"use client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, LucideLink, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { BiddingForm } from "@/components/bidding-form";
import { RelatedProducts } from "@/components/related-products";
import { BuyingProcessGuide } from "@/components/buying-process-guide";
import { Skeleton } from "@/components/ui/skeleton";
import toast from "react-hot-toast";

export default function ProductDetailsPage({ params: rawParams }) {
	const [isLoading, setIsLoading] = useState(false);
	const productId = React.use(rawParams).id;
	const [product, setProduct] = useState([]);

	if (!product) {
		notFound();
	}

	const handleCopyLink = () => {
		const currentUrl = window.location.href;
		navigator.clipboard
			.writeText(currentUrl)
			.then(() => {
				toast.success("Product Link Copied!");
			})
			.catch((err) => {
				console.error("Failed to copy link: ", err);
				toast.error("Failed to copy!");
			});
	};

	const getProduct = async () => {
		try {
			setIsLoading(true);
			const response = await axios.post("/api/get-product", {
				productId,
			});
			setProduct(response?.data?.product || {});
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getProduct();
	}, []);

	const [selectedImage, setSelectedImage] = useState(0);

	return (
		<>
			<Head>
				<title>{product?.title || "Product Details"}</title>
				<meta name='description' content={product?.description} />
				<meta property='og:title' content={product?.title} />
				<meta
					property='og:description'
					content={product?.description}
				/>
				<meta
					property='og:image'
					content={product?.images?.[0] || "/placeholder.svg"}
				/>
				<meta
					property='og:url'
					content={`https://evtn.org/product/${product._id}`}
				/>
				<meta property='og:type' content='website' />
			</Head>
			<div className='container mx-auto px-4 py-8 mt-16'>
				<Link
					href='/'
					className='inline-flex items-center text-primary hover:underline mb-6'>
					<ArrowLeft className='mr-2 h-4 w-4' />
					Back to listings
				</Link>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div>
						<Card className='overflow-hidden mb-4'>
							<CardHeader className='p-0'>
								<Image
									src={
										product?.images?.[selectedImage]
											? product?.images[selectedImage]
											: "/placeholder.svg"
									}
									alt={`${product?.title} - Image ${
										selectedImage + 1
									}`}
									width={600}
									height={400}
									className='w-full h-auto'
								/>
							</CardHeader>
						</Card>
						<div className='grid grid-cols-4 gap-2'>
							{product?.images?.map((image, index) => (
								<button
									key={index}
									onClick={() => setSelectedImage(index)}
									className={`border-2 rounded overflow-hidden ${
										index === selectedImage
											? "border-primary"
											: "border-transparent"
									}`}>
									<Image
										src={image}
										alt={`${product?.title} - Thumbnail ${
											index + 1
										}`}
										width={150}
										height={100}
										className='w-full h-auto'
									/>
								</button>
							))}
						</div>
						{/* BuyingProcessGuide for larger screens */}
						{product.type !== "script" && (
							<div className='hidden md:block'>
								<BuyingProcessGuide />
							</div>
						)}
					</div>

					<div>
						{isLoading ? (
							<DetailSkelton />
						) : (
							<Card>
								<CardHeader>
									<CardTitle className='text-3xl font-bold'>
										{product?.title}
									</CardTitle>
									<div className='flex items-center justify-between mt-2'>
										<div className='text-2xl font-semibold text-primary'>
											${product?.price?.toLocaleString()}
										</div>
										<div className='text-sm text-gray-500'>
											Category:{" "}
											{product?.type
												?.charAt(0)
												.toUpperCase() +
												product?.type?.slice(1)}
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<p className='text-gray-600 mb-6'>
										{product?.description}
									</p>

									<h3 className='text-lg font-semibold mb-2'>
										Key Details
									</h3>
									<ul className='space-y-2 mb-6'>
										<li className='flex font-semibold items-center'>
											<Calendar className='mr-2 h-5 w-5 text-gray-400' />
											{product.type === "script"
												? "Demo Link: "
												: "Link: "}
											&nbsp;
											<Link
												className='text-blue-500'
												href={`${product?.url}`}
												target='_blank'>
												{product?.url}
											</Link>
										</li>
										{product.type !== "script" && (
											<>
												<li className='flex items-center'>
													<Calendar className='mr-2 h-5 w-5 text-gray-400' />
													Age: {product?.age} months
												</li>
												<li className='flex items-center'>
													<TrendingUp className='mr-2 h-5 w-5 text-gray-400' />
													Monthly Earnings: $
													{product?.earningsPerMonth?.toLocaleString()}
												</li>
												<li>
													<span className='font-semibold'>
														Monetization:
													</span>{" "}
													{product?.monetization}
												</li>
												<li>
													<span className='font-semibold'>
														Traffic/Reach:
													</span>{" "}
													{product?.traffic || 0}{" "}
													/Month
												</li>
												<li>
													<span className='font-semibold'>
														Country:
													</span>{" "}
													{product?.country}
												</li>
											</>
										)}
									</ul>

									<h3 className='text-lg font-semibold mb-2'>
										Seller Information
									</h3>
									<div className='bg-gray-50 p-4 rounded-lg'>
										<p className='font-semibold'>
											{product?.seller?.username}{" "}
											{product?.seller?.role ===
												"admin" && (
												<span className='text-xs font-semibold bg-yellow-200 text-yellow-800 px-1 py-0.5 rounded'>
													Admin
												</span>
											)}
										</p>
										{/* <div className='flex items-center mt-1'>
									<span>
										({product?.seller?.totalSales || "5"}{" "}
										Sales)
									</span>
								</div> */}
										<p className='text-sm text-gray-500 mt-1'>
											Contact: {product?.seller?.phone}
										</p>
										<p className='text-sm text-gray-500 mt-1'>
											Member since:{" "}
											{new Date(
												product?.seller?.createdAt
											)?.toDateString()}
										</p>
									</div>
									{product.type !== "script" && (
										<div className='mt-6'>
											<h3 className='text-lg font-semibold mb-2'>
												Bidding
											</h3>
											<BiddingForm
												productId={product?._id}
												bids={product?.bids || []}
											/>
										</div>
									)}
								</CardContent>
								<CardFooter className='flex flex-col sm:flex-row justify-between items-center gap-4'>
									{product?.isSold ? (
										<Button
											size='lg'
											className='w-full sm:w-auto bg-red-500 text-white cursor-not-allowed'
											disabled>
											Sold
										</Button>
									) : (
										<Link
											className='w-full'
											href={`/checkout/${product?._id}`}>
											<Button
												size='lg'
												className='w-full sm:w-auto'>
												Purchase Now
											</Button>
										</Link>
									)}
									<Link
										className='w-full'
										href='https://wa.me/message/6PEUYSHOHEOAB1'>
										<Button
											size='lg'
											variant='outline'
											className='w-full sm:w-auto'>
											Contact Admin
										</Button>
									</Link>

									<Button
										size='lg'
										variant='secondary'
										className='w-full sm:w-auto'
										onClick={handleCopyLink}>
										<LucideLink className='mr-2 h-4 w-4' />
										Copy Link
									</Button>
								</CardFooter>
							</Card>
						)}
					</div>
				</div>
				{/* BuyingProcessGuide for mobile screens */}
				{product.type !== "script" && (
					<div className='mt-6 md:hidden'>
						<BuyingProcessGuide />
					</div>
				)}
				<hr className='my-5' />
				<RelatedProducts currentProductId={product?._id} />
			</div>
		</>
	);
}

function DetailSkelton() {
	return (
		<div>
			<Card>
				<CardHeader>
					<Skeleton className='h-8 w-[200px]' />
					<div className='flex items-center justify-between mt-4'>
						<Skeleton className='h-6 w-[100px]' />
						<Skeleton className='h-4 w-[150px]' />
					</div>
				</CardHeader>
				<CardContent>
					<Skeleton className='h-4 w-full mb-4' />
					<Skeleton className='h-4 w-2/3 mb-6' />
					<Skeleton className='h-6 w-[150px] mb-4' />
					<ul className='space-y-4'>
						<li className='flex items-center'>
							<Skeleton className='h-5 w-5 rounded-full mr-2' />
							<Skeleton className='h-4 w-[200px]' />
						</li>
						<li className='flex items-center'>
							<Skeleton className='h-5 w-5 rounded-full mr-2' />
							<Skeleton className='h-4 w-[200px]' />
						</li>
						<li>
							<Skeleton className='h-4 w-[250px]' />
						</li>
						<li>
							<Skeleton className='h-4 w-[250px]' />
						</li>
						<li>
							<Skeleton className='h-4 w-[250px]' />
						</li>
					</ul>
					<Skeleton className='h-6 w-[150px] mb-4 mt-6' />
					<div className='bg-gray-50 p-4 rounded-lg'>
						<Skeleton className='h-4 w-[200px] mb-2' />
						<Skeleton className='h-4 w-[150px] mb-2' />
						<Skeleton className='h-4 w-[200px]' />
					</div>
					<Skeleton className='h-6 w-[150px] mt-6 mb-2' />
					<Skeleton className='h-10 w-full' />
				</CardContent>
				<CardFooter className='flex flex-col sm:flex-row justify-between items-center gap-4 mt-4'>
					<Skeleton className='h-10 w-full sm:w-auto' />
					<Skeleton className='h-10 w-full sm:w-auto' />
				</CardFooter>
			</Card>
		</div>
	);
}
