import { Approach } from "@/components/approach";
import { StateCounter } from "@/components/counter";
import { DigitalMarketingServices } from "@/components/digital-services";
import Hero from "@/components/Hero";
import { MarketingServices } from "@/components/marketing-services";
import WebDevelopment from "@/components/web-development";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
	return (
		<div className=''>
			<Hero />
			<WebDevelopment />
			<MarketingServices />
			<DigitalMarketingServices />
			<StateCounter />
			<Testimonials />
			<Approach />
		</div>
	);
}
