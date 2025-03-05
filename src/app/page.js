import { AboutContact } from "@/components/about-contact";
import { FAQ } from "@/components/faq";
import Hero from "@/components/Hero";
import { MarketingServices } from "@/components/marketing-services";
import ProductSection from "@/components/Products";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
	return (
		<div className=''>
			<Hero />
			<MarketingServices />
			<div>
				<ProductSection />
			</div>
			<AboutContact />
			<Testimonials />
			<FAQ />
		</div>
	);
}
