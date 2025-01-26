import { AboutContact } from "@/components/about-contact";
import { BuyingProcessGuide } from "@/components/buying-process-guide";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import Hero from "@/components/Hero";
import ProductSection from "@/components/Products";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
	return (
		<div className=''>
			<Hero />
			<div>
				<ProductSection />
			</div>
			<div className='m-8'>
				<BuyingProcessGuide />
			</div>
			<Features />
			<AboutContact />
			<Testimonials />
			<FAQ />
		</div>
	);
}
