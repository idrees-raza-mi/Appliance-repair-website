import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-gray-900 py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Us</h2>
            <p className="mt-3 text-lg text-gray-300">
              We are a team of certified and experienced technicians dedicated to providing top-notch appliance repair services. Our commitment to quality and customer satisfaction has made us a trusted name in the industry.
            </p>
            <p className="mt-3 text-lg text-gray-300">
              We believe in transparent pricing and honest work. When you choose us, you can be confident that you are getting the best service at a fair price.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden relative">
              <Image src="/assets/Fix.jpg" alt="Technician fixing appliance" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
