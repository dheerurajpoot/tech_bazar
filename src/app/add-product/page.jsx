"use client";
import ProfileLayout from "@/components/profile-layout";
import AddProductForm from "@/components/add-product-form";
import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";

export default function AddProductPage() {
	const { user } = useContext(AuthContext);
	return (
		<ProfileLayout isAdmin={user?.role === "admin"}>
			<h1 className='text-2xl font-bold mb-4 text-center'>
				Add New Product
			</h1>
			<AddProductForm />
		</ProfileLayout>
	);
}
