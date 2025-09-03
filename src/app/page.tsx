import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-blue-50 dark:bg-blue-950">
			<Navbar />
			<SocialBar />
			<Hero />
			<Services />
			<About />
			<Reviews />
			<BookingForm />
			<Footer />
		</main>
	);
}