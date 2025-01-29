export default function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: "https://evtn.org/sitemap.xml",
	};
}
