"use client";
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
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../../context/authContext";
import { Input } from "@/components/ui/input";

export default function AdminOrdersPage() {
	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const { user } = useContext(AuthContext);
	const [searchQuery, setSearchQuery] = useState("");

	const filteredOrders = orders.filter(
		(order) =>
			order?._id?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
			order?.user?.username
				?.toLowerCase()
				?.includes(searchQuery?.toLowerCase()) ||
			order?.product?.title
				?.toLowerCase()
				?.includes(searchQuery?.toLowerCase()) ||
			order?.status?.toLowerCase()?.includes(searchQuery?.toLowerCase())
	);

	const getOrders = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get("/api/admin/allorders");
			setOrders(response.data?.orders.reverse() || []);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		}
	};
	useEffect(() => {
		getOrders();
	}, []);

	return (
		<ProfileLayout isAdmin={user?.role === "admin"}>
			<h1 className='text-2xl font-bold mb-4'>All Orders</h1>
			<Input
				type='search'
				placeholder='Search orders by ID, user, product, or status...'
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				className='mb-4'
			/>
			<div className='bg-white shadow rounded-lg overflow-hidden'>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Order ID</TableHead>
							<TableHead>User</TableHead>
							<TableHead>Product</TableHead>
							<TableHead>Date</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Total</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{filteredOrders.map((order, index) => (
							<TableRow key={order?._id}>
								<TableCell>{index + 1}</TableCell>
								<TableCell>{order?.user?.username}</TableCell>
								<TableCell>{order.product?.title}</TableCell>
								<TableCell>
									{new Date(order?.createdAt).toDateString()}
								</TableCell>
								<TableCell>{order.status}</TableCell>
								<TableCell>
									${order?.amount?.toLocaleString()}
								</TableCell>
								<TableCell>
									<Button asChild size='sm'>
										<Link
											href={`/admin/orders/${order?._id}`}>
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
