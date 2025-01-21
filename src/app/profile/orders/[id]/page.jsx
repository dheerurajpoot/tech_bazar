"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Package, User, Calendar, DollarSign, FileDown } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";

export default function UserOrderDetailsPage({ params: rawParams }) {
	const router = useRouter();
	const [order, setOrder] = useState(null);

	const [isLoading, setIsLoading] = useState(false);
	const orderId = React.use(rawParams).id;

	const getOrder = async () => {
		try {
			setIsLoading(true);
			const response = await axios.post("/api/get-order", {
				orderId,
			});
			setOrder(response.data?.order);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getOrder();
	}, []);

	const handleDownloadInvoice = () => {
		toast.success("Invoice Downloaded");
	};

	if (isLoading) {
		return <p>Loading...</p>; // Show a loading state
	}

	return (
		<div className='container mx-auto px-4 py-8'>
			<Button
				variant='outline'
				onClick={() => router.push("/profile/orders")}
				className='mb-4'>
				Back to My Orders
			</Button>

			<h1 className='text-3xl font-bold mb-6'>Order Details</h1>

			<div className='grid md:grid-cols-2 gap-6'>
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<Package className='mr-2' />
							Order Information
						</CardTitle>
						<CardDescription>
							Order ID: {order?._id}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='space-y-2'>
							<div className='flex items-center'>
								<Calendar className='mr-2' />
								<span>
									Date:{" "}
									{new Date(order?.createdAt).toDateString()}
								</span>
							</div>
							<div className='flex items-center'>
								<DollarSign className='mr-2' />
								<span>
									Total: ${order?.amount?.toLocaleString()}
								</span>
							</div>
							<div className='flex items-center'>
								<Package className='mr-2' />
								<span>Status: {order?.status}</span>
							</div>
						</div>
					</CardContent>
					<CardFooter>
						<Button onClick={handleDownloadInvoice}>
							<FileDown className='mr-2' />
							Download Invoice
						</Button>
					</CardFooter>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className='flex items-center'>
							<User className='mr-2' />
							Your Information
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='space-y-2'>
							<p>
								<strong>Name:</strong> {order?.user?.username}
							</p>
							<p>
								<strong>Email:</strong> {order?.user?.email}
							</p>
							<p>
								<strong>Phone:</strong> {order?.user?.phone}
							</p>
						</div>
					</CardContent>
				</Card>
			</div>

			<Card className='mt-6'>
				<CardHeader>
					<CardTitle>Order Items</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Item</TableHead>
								<TableHead className='text-right'>
									Price
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>{order?.product?.title}</TableCell>
								<TableCell className='text-right'>
									${order?.product?.price?.toLocaleString()}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
				<CardFooter className='flex justify-end'>
					<p className='font-bold'>
						Total: ${order?.amount?.toLocaleString()}
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
