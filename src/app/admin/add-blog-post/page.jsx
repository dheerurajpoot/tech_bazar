"use client";

import AddBlogPostPage from "@/components/add-blog-form";
import ProfileLayout from "@/components/profile-layout";
import { useContext } from "react";
import { AuthContext } from "../../../../context/authContext";

export default function AddBlogPage() {
	const { user } = useContext(AuthContext);
	return (
		<ProfileLayout isAdmin={user?.role === "admin"}>
			<AddBlogPostPage />
		</ProfileLayout>
	);
}
