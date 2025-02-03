"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import toast from "react-hot-toast";
import { ImageUpload } from "./image-upload";

export default function AddProductPage() {
	const { user } = useContext(AuthContext);
	const router = useRouter();
	const [formData, setFormData] = useState({
		name: "",
		type: "",
		price: "",
		description: "",
		url: "",
		age: "",
		monetization: "",
		country: "",
		earningsPerMonth: "",
		traffic: "",
	});
	const [imageLinks, setImageLinks] = useState([]);
	const [errors, setErrors] = useState({
		name: "",
		type: "",
		price: "",
		description: "",
		age: "",
		monetization: "",
		country: "",
		earningsPerMonth: "",
		traffic: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [isUploading, setIsUploading] = useState(false);
	const [images, setImages] = useState([]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		setErrors((prev) => ({ ...prev, [name]: "", general: "" }));
	};

	const handleSelectChange = (value) => {
		setFormData((prev) => ({ ...prev, type: value }));
		setErrors((prev) => ({ ...prev, type: "", general: "" }));
	};

	const handleImagesChange = (newImages) => {
		setImages((prev) => [...prev, ...newImages]);
		setErrors((prev) => ({ ...prev, images: "" }));
	};

	const handleImageUpload = async () => {
		try {
			const formData = new FormData();
			images.forEach((image) => {
				formData.append("files", image);
			});
			setIsUploading(true);
			const response = await axios.post("/api/image-upload", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			const uploadedImageLinks = response?.data?.images;
			setImageLinks((prev) => [...prev, ...uploadedImageLinks]);
			setIsUploading(false);
		} catch (error) {
			console.log(error);
			setIsUploading(false);
		}
	};

	useEffect(() => {
		handleImageUpload();
	}, [images]);

	const validateForm = () => {
		let isValid = true;
		const newErrors = { ...errors };

		if (formData.name.length < 3) {
			newErrors.name = "Product name must be at least 3 characters long.";
			isValid = false;
		}

		if (!formData.type) {
			newErrors.type = "Please select a product type.";
			isValid = false;
		}

		if (
			!formData.price ||
			isNaN(Number(formData.price)) ||
			Number(formData.price) <= 0
		) {
			newErrors.price = "Please enter a valid price.";
			isValid = false;
		}

		if (formData.description.length < 10) {
			newErrors.description =
				"Description must be at least 10 characters long.";
			isValid = false;
		}

		if (
			!formData.age ||
			isNaN(Number(formData.age)) ||
			Number(formData.age) < 0
		) {
			newErrors.age = "Please enter a valid age in months.";
			isValid = false;
		}

		if (formData.monetization.length < 3) {
			newErrors.monetization = "Please enter valid monetization methods.";
			isValid = false;
		}

		if (formData.country.length < 3) {
			newErrors.country = "Please enter valid country name.";
			isValid = false;
		}

		if (
			!formData.earningsPerMonth ||
			isNaN(Number(formData.earningsPerMonth)) ||
			Number(formData.earningsPerMonth) < 0
		) {
			newErrors.earningsPerMonth = "Please enter valid monthly earnings.";
			isValid = false;
		}

		if (
			!formData.traffic ||
			isNaN(Number(formData.traffic)) ||
			Number(formData.traffic) < 0
		) {
			newErrors.traffic = "Please enter valid monthly traffic/reach.";
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validateForm()) {
			setIsLoading(true);
			try {
				const payload = {
					...formData,
					seller: user?._id,
					inReview: user?.role === "admin" ? "false" : "true",
					images: imageLinks,
				};
				console.log(payload);

				const response = await axios.post(
					"/api/admin/add-product",
					payload
				);

				toast.success(response?.data?.message);
				router.push(
					user?.role === "admin"
						? "/admin/products"
						: "/profile/products"
				);
				setIsLoading(false);
			} catch (error) {
				setErrors((prev) => ({
					...prev,
					general: "Failed to add product. Please try again.",
				}));
			} finally {
				setIsLoading(false);
			}
		}
	};

	return (
		<div className='container mx-auto px-4 py-2'>
			<div className='max-w-2xl mx-auto'>
				<form onSubmit={handleSubmit} className='space-y-6'>
					<div>
						<Label htmlFor='name'>Product Name</Label>
						<Input
							id='name'
							name='name'
							value={formData.name}
							onChange={handleInputChange}
							placeholder='e.g., Tech Blog, E-commerce Store'
						/>
						{errors.name && (
							<p className='text-sm text-red-500 mt-1'>
								{errors.name}
							</p>
						)}
					</div>

					<div>
						<Label htmlFor='type'>Product Type</Label>
						<Select onValueChange={handleSelectChange}>
							<SelectTrigger id='type'>
								<SelectValue placeholder='Select product type' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='website'>Website</SelectItem>
								<SelectItem value='facebook page'>
									Facebook Page
								</SelectItem>
								<SelectItem value='instagram account'>
									Instagram Account
								</SelectItem>
								<SelectItem value='youtube channel'>
									YouTube Channel
								</SelectItem>
								<SelectItem value='google play console'>
									Google Play Console
								</SelectItem>
								<SelectItem value='adsense dashboard'>
									Adsense Dashboard
								</SelectItem>
							</SelectContent>
						</Select>
						{errors.type && (
							<p className='text-sm text-red-500 mt-1'>
								{errors.type}
							</p>
						)}
					</div>

					<div>
						<Label htmlFor='price'>Price ($)</Label>
						<Input
							id='price'
							name='price'
							type='number'
							value={formData.price}
							onChange={handleInputChange}
							placeholder='e.g., 5000'
						/>
						{errors.price && (
							<p className='text-sm text-red-500 mt-1'>
								{errors.price}
							</p>
						)}
					</div>

					<div>
						<Label htmlFor='description'>Description</Label>
						<Textarea
							id='description'
							name='description'
							value={formData.description}
							onChange={handleInputChange}
							placeholder='Describe your product...'
							rows={4}
						/>
						{errors.description && (
							<p className='text-sm text-red-500 mt-1'>
								{errors.description}
							</p>
						)}
					</div>

					<div>
						<Label>Product Images</Label>
						<ImageUpload onImagesChange={handleImagesChange} />

						{isUploading && (
							<p className='text-sm text-red-500 mt-1'>
								Image Uploading...
							</p>
						)}
					</div>

					<div>
						<Label htmlFor='url'>URL/Link</Label>
						<Input
							id='url'
							name='url'
							type='text'
							value={formData.url}
							onChange={handleInputChange}
							placeholder='e.g., https://example.com'
						/>
					</div>
					<div>
						<Label htmlFor='age'>Age (in months)</Label>
						<Input
							id='age'
							name='age'
							type='number'
							value={formData.age}
							onChange={handleInputChange}
							placeholder='e.g., 24'
						/>
						{errors.age && (
							<p className='text-sm text-red-500 mt-1'>
								{errors.age}
							</p>
						)}
					</div>

					<div>
						<Label htmlFor='monetization'>
							Monetization Methods
						</Label>
						<Input
							id='monetization'
							name='monetization'
							value={formData.monetization}
							onChange={handleInputChange}
							placeholder='e.g., AdSense, Affiliate Marketing'
						/>
						{errors.monetization && (
							<p className='text-sm text-red-500 mt-1'>
								{errors.monetization}
							</p>
						)}
					</div>

					<div>
						<Label htmlFor='country'>Country</Label>
						<Input
							id='country'
							name='country'
							value={formData.country}
							onChange={handleInputChange}
							placeholder='e.g., India, USA'
						/>
						{errors.country && (
							<p className='text-sm text-red-500 mt-1'>
								{errors.country}
							</p>
						)}
					</div>

					<div>
						<Label htmlFor='earningsPerMonth'>
							Monthly Earnings ($)
						</Label>
						<Input
							id='earningsPerMonth'
							name='earningsPerMonth'
							type='number'
							value={formData.earningsPerMonth}
							onChange={handleInputChange}
							placeholder='e.g., 1000'
						/>
						{errors.earningsPerMonth && (
							<p className='text-sm text-red-500 mt-1'>
								{errors.earningsPerMonth}
							</p>
						)}
					</div>

					<div>
						<Label htmlFor='traffic'>Monthly Traffic/Reach</Label>
						<Input
							id='traffic'
							name='traffic'
							type='number'
							value={formData.traffic}
							onChange={handleInputChange}
							placeholder='e.g., 1000'
						/>
						{errors.traffic && (
							<p className='text-sm text-red-500 mt-1'>
								{errors.traffic}
							</p>
						)}
					</div>

					<Button
						type='submit'
						className='w-full'
						disabled={isLoading || isUploading}>
						{isLoading ? "Adding Product..." : "Add Product"}
					</Button>
				</form>
			</div>
		</div>
	);
}
