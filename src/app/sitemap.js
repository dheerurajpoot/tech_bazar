import axios from "axios";

const Sitemap = () => {
	// The page doesn't render anything because it serves XML
	return null;
};

export const getServerSideProps = async ({ res }) => {
	// Base URL of your website
	const baseUrl = "https://evtn.org";

	// Static routes
	const staticRoutes = [
		"/",
		"/about",
		"/contact",
		"/products",
		"/faq",
		"/terms",
		"/login",
		"/register",
		"/blog",
		"/cookies",
		"/how-it-works",
		"/privacy",
		"/shop",
	];

	try {
		// Fetch dynamic routes using Axios
		const response = await axios.get("/api/admin/allproducts");

		const products = response.data?.products;

		// Map products to their dynamic routes
		const dynamicRoutes = products?.map(
			(product) => `/products/${product?._id}`
		);

		// Combine static and dynamic routes
		const allRoutes = [...staticRoutes, ...dynamicRoutes];

		// Generate the XML structure
		const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allRoutes
			.map((route) => {
				return `
            <url>
              <loc>${baseUrl}${route}</loc>
              <lastmod>${new Date()?.toISOString()}</lastmod>
            </url>
          `;
			})
			.join("")}
    </urlset>`;

		// Set the response headers and send the XML
		res.setHeader("Content-Type", "application/xml");
		res.write(sitemap);
		res.end();
	} catch (error) {
		console.error("Error generating sitemap:", error);
		res.statusCode = 500;
		res.end();
	}

	return {
		props: {},
	};
};

export default Sitemap;
