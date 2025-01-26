import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Banknote,
	CheckCheck,
	CheckCircle,
	DollarSign,
	FolderSync,
	MessageCircle,
	Shield,
	ShieldCheck,
} from "lucide-react";

export function BuyingProcessGuide() {
	const steps = [
		{
			icon: <CheckCircle className='h-6 w-6 text-green-500' />,
			title: "Review Details",
			description:
				"Carefully examine the product information and performance metrics.",
		},
		{
			icon: <MessageCircle className='h-6 w-6 text-blue-500' />,
			title: "Contact Seller",
			description:
				"Ask questions and request additional information if needed.",
		},
		{
			icon: <DollarSign className='h-6 w-6 text-yellow-500' />,
			title: "Make an Offer",
			description:
				"Place a bid or use the 'Purchase Now' option to purchase immediately.",
		},
		{
			icon: <ShieldCheck className='h-6 w-6 text-purple-500' />,
			title: "Secure Transaction",
			description:
				"Complete the purchase through our secure escrow service.",
		},
		{
			icon: <Shield className='h-6 w-6 text-purple-500' />,
			title: "Verification",
			description:
				"Our team will verify the payment and process asset transfer.",
		},
		{
			icon: <FolderSync className='h-6 w-6 text-yellow-500' />,
			title: "Asset Transfer",
			description:
				"We will take login from seller and transfer all details to buyer.",
		},
		{
			icon: <CheckCheck className='h-6 w-6 text-blue-500' />,
			title: "Verify Transfer",
			description:
				"After asset transfer, our team will process payment to seller.",
		},
		{
			icon: <Banknote className='h-6 w-6 text-green-500' />,
			title: "Payment",
			description:
				"We will transfer the payment to seller and deduct our commission.",
		},
	];

	return (
		<Card className='container mx-auto mt-6 '>
			<CardHeader>
				<CardTitle className='text-xl font-bold'>
					How It Works
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
					{steps.map((step, index) => (
						<div
							key={index}
							className='flex flex-col items-center text-center'>
							<div className='mb-2'>{step.icon}</div>
							<h3 className='font-semibold mb-1'>{step.title}</h3>
							<p className='text-sm text-gray-600'>
								{step.description}
							</p>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
