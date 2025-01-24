import AddBlogPostPage from "@/components/add-blog-form";
import ProfileLayout from "@/components/profile-layout";

export default function AddBlogPage() {
	return (
		<ProfileLayout isAdmin={true}>
			<AddBlogPostPage />
		</ProfileLayout>
	);
}
