"use client";
import { Testimonials } from "./testimonials";

export function AboutContact() {
	return (
		<section className='pt-32 bg-white overflow-hidden relative'>
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_70%)] animate-pulse'></div>
			<div className='container mx-auto px-4 relative z-10'>
				<Testimonials />
			</div>
		</section>
	);
}
