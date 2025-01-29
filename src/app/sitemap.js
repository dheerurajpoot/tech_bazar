export default async function sitemap() {
	let productUrls = [];

	try {
		const res = await fetch("https://evtn.org/api/admin/allproducts");
		if (!res.ok) throw new Error("Failed to fetch products");

		const { products } = await res.json();

		productUrls = products?.map((product) => ({
			url: `https://evtn.org/product/${product?._id}`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		}));
	} catch (error) {
		console.error("Error fetching products for sitemap:", error);
	}

	return [
		{
			url: "https://evtn.org",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://evtn.org/login",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://evtn.org/register",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://evtn.org/about",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://evtn.org/contact",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://evtn.org/services",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://evtn.org/web-development",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://evtn.org/ppc-ads",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://evtn.org/content-writing-seo",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://evtn.org/how-it-works",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://evtn.org/shop",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://evtn.org/pricing",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://evtn.org/blog",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		...productUrls, // Append dynamic product URLs
	];
}
