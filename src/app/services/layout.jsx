import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicesLayout({ children }) {
	return (
		<div className='container mx-auto px-4 py-8 mt-16'>
			<h1 className='text-3xl font-bold mb-6'>Our Services</h1>
			<div className='flex flex-wrap gap-4 mb-8'>
				<Button asChild variant='outline'>
					<Link href='/services/web-development'>
						Web Development
					</Link>
				</Button>
				<Button asChild variant='outline'>
					<Link href='/services/content-writing-seo'>
						Content Writing & SEO
					</Link>
				</Button>
				<Button asChild variant='outline'>
					<Link href='/services/ppc-ads'>PPC & Ads</Link>
				</Button>
			</div>
			{children}
		</div>
	);
}
