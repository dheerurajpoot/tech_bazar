import { AboutContact } from "@/components/about-contact";
import { DigitalMarketingServices } from "@/components/digital-services";
import Hero from "@/components/Hero";
import { MarketingServices } from "@/components/marketing-services";
import ProductSection from "@/components/Products";
import WebDevelopment from "@/components/web-development";

export default function Home() {
	return (
		<div className=''>
			<Hero />
			<WebDevelopment />
			<MarketingServices />
			<DigitalMarketingServices />
			<div>
				<ProductSection />
			</div>
			<AboutContact />
		</div>
	);
}
