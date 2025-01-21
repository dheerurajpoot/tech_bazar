"use client";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/authContext";
import Link from "next/link";
import ProfileLayout from "@/components/profile-layout";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import axios from "axios";

export default function UserOrdersPage() {
	const { user } = useContext(AuthContext);

	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const userId = user?._id;
	const getOrders = async () => {
		try {
			setIsLoading(true);
			const response = await axios.post("/api/get-user-orders", {
				userId,
			});

			setOrders(response.data?.orders || []);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		}
	};
	useEffect(() => {
		getOrders();
	}, [user, userId]);

	return (
		<ProfileLayout isAdmin={user?.role === "admin"}>
			<h1 className='text-2xl font-bold mb-4'>Your Orders</h1>
			<div className='bg-white shadow rounded-lg overflow-hidden'>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Order ID</TableHead>
							<TableHead>Product</TableHead>
							<TableHead>Date</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Total</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{orders.map((order, index) => (
							<TableRow key={order._id}>
								<TableCell>{index + 1}</TableCell>
								<TableCell>{order.product.title}</TableCell>
								<TableCell>
									{new Date(order.createdAt).toDateString()}
								</TableCell>
								<TableCell>{order.status}</TableCell>
								<TableCell>
									${order.amount?.toLocaleString()}
								</TableCell>
								<TableCell>
									<Button asChild size='sm'>
										<Link
											href={`/profile/orders/${order._id}`}>
											View Details
										</Link>
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</ProfileLayout>
	);
}
