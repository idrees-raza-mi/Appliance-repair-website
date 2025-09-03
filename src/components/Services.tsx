import Link from 'next/link';
import Image from 'next/image';

const services = [
	{ image: "/assets/Ac.jpg", title: "AC Repair", description: "Expert AC repair to keep you cool and comfortable." },
	{ image: "/assets/fridge.jpg", title: "Fridge Repair", description: "Quick and reliable fridge repair services." },
	{ image: "/assets/washingmachine.jpg", title: "Washing Machine Repair", description: "Efficient repairs for all washing machine brands." },
	{ image: "/assets/oven.jpg", title: "Oven Repair", description: "Professional oven repair for your cooking needs." },
	{ image: "/assets/stove.jpg", title: "Stove Repair", description: "Safe and effective stove and cooktop repairs." },
];

const Services = () => {
	return (
		<section id="services" className="bg-gray-900 py-14">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-8">
					<h2 className="text-3xl md:text-4xl font-bold text-white">Our Services</h2>
					<p className="mt-2 text-lg text-gray-300">Expert repairs for every major home appliance.</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
					{services.map((service, index) => (
						<div key={index} className="group bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
							<div className="relative aspect-[16/10] overflow-hidden">
								<Image src={service.image} alt={service.title} fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
							</div>
							<div className="p-4">
								<h3 className="text-base font-semibold text-white text-center truncate">{service.title}</h3>
								<p className="mt-2 text-center text-gray-300 text-sm line-clamp-2">{service.description}</p>
								<div className="mt-3 flex justify-center">
									<Link href="#contact" className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-3 py-2 rounded-lg text-sm">
										Book now
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
