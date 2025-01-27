"use client";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ProfileLayout from "@/components/profile-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import toast from "react-hot-toast";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { AuthContext } from "../../../../context/authContext";

export default function AdminProductsPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [products, setProducts] = useState([]);
	const [editingProduct, setEditingProduct] = useState(null);
	const [productStatus, setProductStatus] = useState();
	const { user } = useContext(AuthContext);

	const handleEditChange = (e) => {
		if (editingProduct) {
			setEditingProduct({
				...editingProduct,
				[e.target.name]:
					e.target.name === "price" ||
					e.target.name === "age" ||
					e.target.name === "earningsPerMonth"
						? Number(e.target.value)
						: e.target.value,
			});
		}
	};

	const handleEditSubmit = async () => {
		if (editingProduct) {
			try {
				setIsLoading(true);
				const response = await axios.put(
					"/api/admin/update-products",
					editingProduct
				);
				if (response.data?.success) {
					toast.success(response.data?.message);
					getAllProducts();
				}
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				console.log(error);
			}
		}
	};

	const getAllProducts = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get("/api/admin/allproducts");
			setProducts(response.data?.products.reverse());

			setIsLoading(false);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getAllProducts();
	}, []);

	const handleStatusChange = (value, productId) => {
		setProductStatus({ productId, inReview: value === "true" });
	};

	const handleStatusSubmit = async () => {
		if (!productStatus || !productStatus.productId) {
			toast.error("Please select a status first.");
			return;
		}

		try {
			const response = await axios.put(
				"/api/admin/update-product-status",
				productStatus
			);
			if (response.data?.success) {
				toast.success(response.data?.message);
				getAllProducts();
			}
		} catch (error) {
			console.log(error);
		}
	};

	const [searchQuery, setSearchQuery] = useState("");

	const filteredProducts = products.filter(
		(product) =>
			product?.title
				?.toLowerCase()
				?.includes(searchQuery?.toLowerCase()) ||
			product?._id?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
			product?.type?.toLowerCase()?.includes(searchQuery?.toLowerCase())
	);

	return (
		<ProfileLayout isAdmin={user?.role === "admin"}>
			<h1 className='text-2xl font-bold mb-4'>All Products</h1>
			<Input
				type='search'
				placeholder='Search products by name, ID, or type...'
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				className='mb-4'
			/>
			<div className='bg-white shadow rounded-lg overflow-hidden'>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>ID</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Price</TableHead>
							<TableHead>Age (months)</TableHead>
							<TableHead>Monetization</TableHead>
							<TableHead>Monthly Earnings</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{filteredProducts.map((product, index) => (
							<TableRow key={product._id}>
								<TableCell>{index + 1}</TableCell>
								<TableCell>{product.title}</TableCell>
								<TableCell>{product.type}</TableCell>
								<TableCell>
									${product.price.toLocaleString()}
								</TableCell>
								<TableCell>{product.age}</TableCell>
								<TableCell>{product.monetization}</TableCell>
								<TableCell>
									${product.earningsPerMonth.toLocaleString()}
								</TableCell>
								<TableCell>
									<Dialog>
										<DialogTrigger asChild>
											<p className='cursor-pointer'>
												{product?.inReview
													? "In Review"
													: "Live"}
											</p>
										</DialogTrigger>
										<DialogContent>
											<DialogHeader>
												<DialogTitle>
													Update Status
												</DialogTitle>
											</DialogHeader>
											<form
												onSubmit={(e) => {
													e.preventDefault();
													handleStatusSubmit();
												}}
												className='space-y-4'>
												<div>
													<Label htmlFor='status'>
														Status
													</Label>
													<Select
														onValueChange={(
															value
														) =>
															handleStatusChange(
																value,
																product._id
															)
														}
														defaultValue={
															product?.inReview
																? "true"
																: "false"
														}>
														<SelectTrigger>
															<SelectValue placeholder='Select Status' />
														</SelectTrigger>
														<SelectContent>
															<SelectItem value='true'>
																In Review
															</SelectItem>
															<SelectItem value='false'>
																Live
															</SelectItem>
														</SelectContent>
													</Select>
												</div>
												<Button type='submit'>
													Save Changes
												</Button>
											</form>
										</DialogContent>
									</Dialog>
								</TableCell>

								<TableCell>
									<Dialog>
										<DialogTrigger asChild>
											<Button
												size='sm'
												onClick={() =>
													setEditingProduct(product)
												}>
												Edit
											</Button>
										</DialogTrigger>
										<DialogContent>
											<DialogHeader>
												<DialogTitle>
													Edit Product
												</DialogTitle>
											</DialogHeader>
											{editingProduct && (
												<form
													onSubmit={(e) => {
														e.preventDefault();
														handleEditSubmit();
													}}
													className='space-y-4'>
													<div>
														<Label htmlFor='name'>
															Name
														</Label>
														<Input
															id='name'
															name='title'
															value={
																editingProduct.title
															}
															onChange={
																handleEditChange
															}
														/>
													</div>
													<div>
														<Label htmlFor='type'>
															Product Type
														</Label>
														<Select
															onValueChange={(
																value
															) => {
																handleEditChange(
																	{
																		target: {
																			name: "type",
																			value,
																		},
																	}
																);
															}}
															defaultValue={
																editingProduct?.type ||
																""
															}>
															<SelectTrigger id='type'>
																<SelectValue placeholder='Select product type' />
															</SelectTrigger>
															<SelectContent>
																<SelectItem value='website'>
																	Website
																</SelectItem>
																<SelectItem value='facebook page'>
																	Facebook
																	Page
																</SelectItem>
																<SelectItem value='instagram account'>
																	Instagram
																	Account
																</SelectItem>
																<SelectItem value='youtube channel'>
																	YouTube
																	Channel
																</SelectItem>
																<SelectItem value='google play console'>
																	Google Play
																	Console
																</SelectItem>
																<SelectItem value='adsense dashboard'>
																	Adsense
																	Dashboard
																</SelectItem>
															</SelectContent>
														</Select>
													</div>

													<div>
														<Label htmlFor='price'>
															Price
														</Label>
														<Input
															id='price'
															name='price'
															type='number'
															value={
																editingProduct.price
															}
															onChange={
																handleEditChange
															}
														/>
													</div>
													<div>
														<Label htmlFor='description'>
															Description
														</Label>
														<Input
															id='description'
															name='description'
															value={
																editingProduct.description
															}
															onChange={
																handleEditChange
															}
														/>
													</div>
													<div>
														<Label htmlFor='age'>
															Age (months)
														</Label>
														<Input
															id='age'
															name='age'
															type='number'
															value={
																editingProduct.age
															}
															onChange={
																handleEditChange
															}
														/>
													</div>
													<div>
														<Label htmlFor='monetization'>
															Monetization
														</Label>
														<Input
															id='monetization'
															name='monetization'
															value={
																editingProduct.monetization
															}
															onChange={
																handleEditChange
															}
														/>
													</div>
													<div>
														<Label htmlFor='earningsPerMonth'>
															Monthly Earnings
														</Label>
														<Input
															id='earningsPerMonth'
															name='earningsPerMonth'
															type='number'
															value={
																editingProduct.earningsPerMonth
															}
															onChange={
																handleEditChange
															}
														/>
													</div>
													<Button type='submit'>
														Save Changes
													</Button>
												</form>
											)}
										</DialogContent>
									</Dialog>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</ProfileLayout>
	);
}
