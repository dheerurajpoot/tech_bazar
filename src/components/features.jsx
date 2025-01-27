import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, DollarSign, Users } from "lucide-react";

const features = [
	{
		icon: <Shield className='h-8 w-8 text-primary' />,
		title: "Secure Transactions",
		description:
			"Our escrow service ensures safe and secure transactions for both buyers and sellers.",
	},
	{
		icon: <Zap className='h-8 w-8 text-primary' />,
		title: "Fast & Efficient",
		description:
			"List your digital asset or find your next investment opportunity quickly and easily.",
	},
	{
		icon: <DollarSign className='h-8 w-8 text-primary' />,
		title: "Competitive Pricing",
		description:
			"Our bidding system helps you get the best value for your digital assets.",
	},
	{
		icon: <Users className='h-8 w-8 text-primary' />,
		title: "Large Community",
		description:
			"Connect with a vast network of digital entrepreneurs, investors, and industry experts.",
	},
];

export function Features() {
	return (
		<section className='py-16'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-12'>
					Why Choose EVTN
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{features.map((feature, index) => (
						<Card key={index}>
							<CardHeader>
								<CardTitle className='flex items-center'>
									{feature.icon}
									<span className='ml-2'>
										{feature.title}
									</span>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-gray-600'>
									{feature.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
