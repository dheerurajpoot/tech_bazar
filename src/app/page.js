import { BuyingProcessGuide } from "@/components/buying-process-guide";
import Hero from "@/components/Hero";
import ProductSection from "@/components/Products";

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
		</div>
	);
}
