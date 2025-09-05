import Link from 'next/link';
import Image from 'next/image';

const services = [
	{ image: "/assets/fridge.jpg", title: "Fridge Repair", description: "Quick and reliable fridge repair services." },
	{ image: "/assets/dryer&machine.jpeg", title: "Washing Machine & Drayer Repair", description: "Efficient repairs for all washing machine brands." },
	{ image: "/assets/oven.jpg", title: "Oven Repair", description: "Professional oven repair for your cooking needs." },
	{ image: "/assets/stove.jpg", title: "Stove Repair", description: "Safe and effective stove and cooktop repairs." },
	{ image: "/assets/vacuum.jpg", title: "Vacuum Cleaner Repair", description: "Expert vacuum cleaner maintenance and repair services." },
	{ image: "/assets/dishwasher.jpeg", title: "Dishwasher Repair", description: "Professional dishwasher repair and maintenance." },
	{ image: "/assets/microwave.jpg", title: "Microwave Repair", description: "Quick and safe microwave repair services." },
	// { image: "/assets/dryer.jpg", title: "Dryer Repair", description: "Reliable clothes dryer repair and maintenance." },
	{ image: "/assets/waterheater.jpeg", title: "Water Heater Repair", description: "Expert water heater installation and repair." },
];

const Services = () => {
	return (
		<section id="services" className="bg-gray-900 py-8">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-6">
					<h2 className="text-2xl md:text-3xl font-bold text-white">Our Services</h2>
					<p className="mt-2 text-base text-gray-300">Expert repairs for every major home appliance.</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{services.map((service, index) => (
						<div key={index} className="group bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
							<div className="relative aspect-[16/10] overflow-hidden">
								<Image src={service.image} alt={service.title} fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
							</div>
							<div className="p-3">
								<h3 className="text-sm font-semibold text-white text-center truncate">{service.title}</h3>
								<p className="mt-1 text-center text-gray-300 text-xs line-clamp-2">{service.description}</p>
								<div className="mt-2 flex justify-center">
									<Link href="#contact" className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-2 py-1 rounded text-xs">
										Contact Us
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
