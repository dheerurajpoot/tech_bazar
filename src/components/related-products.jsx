import Link from "next/link";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";

export function RelatedProducts({ currentProductId }) {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

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

	const relatedProducts = products
		.filter((product) => product._id !== currentProductId)
		.slice(0, 3);

	return (
		<div className='mt-12'>
			<h2 className='text-2xl font-bold mb-6'>Also Check</h2>
			{relatedProducts.length === 0 && <p>Related Products not found!</p>}
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{relatedProducts.map((product) => (
					<Card key={product?._id} className='flex flex-col'>
						<CardHeader className='p-0'>
							<Image
								src={product?.images[0] || "/placeholder.svg"}
								alt={product?.title}
								width={300}
								height={200}
								className='w-full h-48 object-cover rounded-t-lg'
							/>
						</CardHeader>
						<CardContent className='flex-grow p-4'>
							<CardTitle className='mb-2'>
								{product?.title}
							</CardTitle>
							<p className='text-sm text-gray-600 mb-2'>
								{product?.description.slice(0, 100)}...
							</p>
							<p className='font-semibold'>
								${product?.price.toLocaleString()}
							</p>
						</CardContent>
						<CardFooter className='p-4'>
							<Button asChild className='w-full'>
								<Link href={`/product/${product?._id}`}>
									View Details
								</Link>
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}
