export default async function sitemap() {
	let productUrls = [];

	try {
		const res = await fetch("https://webdeelers.com/api/admin/allproducts");
		if (!res.ok) throw new Error("Failed to fetch products");

		const { products } = await res.json();

		productUrls = products?.map((product) => ({
			url: `https://webdeelers.com/product/${product?._id}`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		}));
	} catch (error) {
		console.error("Error fetching products for sitemap:", error);
	}

	return [
		{
			url: "https://webdeelers.com",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://webdeelers.com/login",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://webdeelers.com/register",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://webdeelers.com/about",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://webdeelers.com/contact",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://webdeelers.com/services",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://webdeelers.com/web-development",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://webdeelers.com/ppc-ads",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://webdeelers.com/content-writing-seo",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://webdeelers.com/how-it-works",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://webdeelers.com/shop",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://webdeelers.com/pricing",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://webdeelers.com/blog",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		...productUrls, // Append dynamic product URLs
	];
}
