import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		question: "How does EVTN ensure transaction security?",
		answer: "EVTN uses a secure escrow service for all transactions. Funds are held safely until both the buyer and seller confirm that all conditions of the sale have been met.",
	},
	{
		question: "What types of digital assets can I buy or sell on EVTN?",
		answer: "EVTN supports a wide range of digital assets, including websites, e-commerce stores, mobile apps, social media accounts, and YouTube channels.",
	},
	{
		question: "How are digital assets valued on EVTN?",
		answer: "Asset valuation is based on various factors including monthly revenue, traffic, age, niche, and growth potential. We provide detailed analytics and metrics for each listing to help buyers make informed decisions.",
	},
	{
		question: "What fees does EVTN charge?",
		answer: "EVTN charges a competitive commission fee on successful transactions. There are no upfront listing fees. Please check our pricing page for the most up-to-date fee structure.",
	},
];

export function FAQ() {
	return (
		<section className='py-16 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-12'>
					Frequently Asked Questions
				</h2>
				<Accordion
					type='single'
					collapsible
					className='max-w-3xl mx-auto'>
					{faqs.map((faq, index) => (
						<AccordionItem key={index} value={`item-${index}`}>
							<AccordionTrigger>{faq.question}</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
