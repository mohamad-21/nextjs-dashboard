import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from "@/app/ui/home.module.css";
import Image from "next/image";
import desktopHeroImage from "@/public/hero-desktop.png";
import mobileHeroImage from "@/public/hero-mobile.png";

export default async function Page() {
  return (
		<main className="flex min-h-screen flex-col p-6">
			<div className="px-6 lg:px-16 max-w-lg">
				<div className={`${styles.shape}`}></div>
			</div>
			<div className="mt-4 flex grow flex-col items-start gap-4 lg:flex-row">
				<div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 lg:px-16 max-w-lg flex-1">
					<p className={`text-xl text-gray-800 sm:text-3xl sm:leading-normal`}>
						<strong>Welcome to Acme.</strong> This is the example for the{" "}
						<a href="https://nextjs.org/learn/" className="text-blue-500">
							Next.js Learn Course
						</a>
						, brought to you by Vercel.
					</p>
					<Link
						href="/login"
						className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 lg:text-base"
					>
						<span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
					</Link>
				</div>
				<div className="flex items-center justify-center p-6 lg:py-12 relative aspect-square flex-1 px-6 lg:w-full w-2/3">
					<Image
						src={desktopHeroImage}
						fill
						placeholder="blur"
						className="lg:block object-cover lg:px-16"
						alt="Screenshots of the dashboard project showing desktop version"
					/>
					<Image
						src={mobileHeroImage}
						fill
						placeholder="blur"
						className="lg:hidden object-cover lg:px-16"
						alt="Screenshots of the dashboard project showing desktop version"
					/>
				</div>
			</div>
		</main>
	);
}
