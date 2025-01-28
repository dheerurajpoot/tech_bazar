import Link from "next/link";
import {
	Facebook,
	Instagram,
	Youtube,
	Twitter,
	Linkedin,
	Mail,
	Phone,
	MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
	return (
		<footer className='bg-gray-900 text-gray-300 py-12'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
					<div>
						<h2 className='text-2xl font-bold mb-4 text-white'>
							EVTN
						</h2>
						<p className='mb-4'>
							Your go-to marketplace for buying and selling
							websites, social media pages, and YouTube channels.
						</p>
						<div className='flex space-x-4'>
							<a
								href='https://facebook.com'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Facebook'>
								<Facebook className='h-6 w-6 text-gray-400 hover:text-white transition-colors' />
							</a>
							<a
								href='https://instagram.com'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Instagram'>
								<Instagram className='h-6 w-6 text-gray-400 hover:text-white transition-colors' />
							</a>
							<a
								href='https://youtube.com'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='YouTube'>
								<Youtube className='h-6 w-6 text-gray-400 hover:text-white transition-colors' />
							</a>
							<a
								href='https://twitter.com'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Twitter'>
								<Twitter className='h-6 w-6 text-gray-400 hover:text-white transition-colors' />
							</a>
							<a
								href='https://linkedin.com'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='LinkedIn'>
								<Linkedin className='h-6 w-6 text-gray-400 hover:text-white transition-colors' />
							</a>
						</div>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4 text-white'>
							Quick Links
						</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/about'
									className='hover:text-white transition-colors'>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='/services'
									className='hover:text-white transition-colors'>
									Services
								</Link>
							</li>
							<li>
								<Link
									href='/how-it-works'
									className='hover:text-white transition-colors'>
									How It Works
								</Link>
							</li>
							<li>
								<Link
									href='/pricing'
									className='hover:text-white transition-colors'>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									href='/blog'
									className='hover:text-white transition-colors'>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='hover:text-white transition-colors'>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4 text-white'>
							Our Services
						</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/services/web-development'
									className='hover:text-white transition-colors'>
									Web Development
								</Link>
							</li>
							<li>
								<Link
									href='/services/content-writing-seo'
									className='hover:text-white transition-colors'>
									Content Writing & SEO
								</Link>
							</li>
							<li>
								<Link
									href='/services/ppc-ads'
									className='hover:text-white transition-colors'>
									PPC & Ads
								</Link>
							</li>
							<li>
								<Link
									href='/shop'
									className='hover:text-white transition-colors'>
									Buy Digital Assets
								</Link>
							</li>
							<li>
								<Link
									href='/add-product'
									className='hover:text-white transition-colors'>
									Sell Digital Assets
								</Link>
							</li>
							<li>
								<Link
									href='/cookies'
									className='hover:text-white transition-colors'>
									Cookies Policy
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4 text-white'>
							Newsletter
						</h3>
						<p className='mb-4'>
							Stay updated with our latest news and offers.
						</p>
						<form className='flex flex-col space-y-2'>
							<Input
								type='email'
								placeholder='Your email address'
								className='bg-gray-800 text-white border-gray-700'
							/>
							<Button type='submit' variant='secondary'>
								Subscribe
							</Button>
						</form>
					</div>
				</div>
				<div className='border-t border-gray-800 pt-8 mt-8'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
						<div className='flex items-center'>
							<Mail className='h-5 w-5 mr-2 text-gray-400' />
							<a
								href='mailto:contact@evtn.org'
								className='hover:text-white transition-colors'>
								contact@evtn.org
							</a>
						</div>
						<div className='flex items-center'>
							<Phone className='h-5 w-5 mr-2 text-gray-400' />
							<a
								href='tel:9235337852'
								className='hover:text-white transition-colors'>
								+91 9235337852
							</a>
						</div>
						<div className='flex items-center'>
							<MapPin className='h-5 w-5 mr-2 text-gray-400' />
							<span>
								{" "}
								Bamba Road, Kalyanpur, Kanpur Nagar (208017)
							</span>
						</div>
					</div>
				</div>
				<div className='text-center mt-8'>
					<p>
						&copy; {new Date().getFullYear()} EVTN. All rights
						reserved.
					</p>
					<div className='mt-2'>
						<Link
							href='/terms'
							className='hover:text-white transition-colors mr-4'>
							Terms of Service
						</Link>
						<Link
							href='/privacy'
							className='hover:text-white transition-colors'>
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
