import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Headline */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 text-gray-200 ring-1 ring-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold tracking-wide">Certified Appliance Technicians</span>
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-[1.1] text-white">
              Welcome to
              <span className="block text-emerald-400">Appliance Fix</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-2xl">
              Your trusted source for evidence-based repairs, maintenance tips, and the latest breakthroughs in home appliances.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-500">
                Explore Services
              </Link>
              <Link href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-800 text-white ring-1 ring-white/10 hover:bg-gray-700">
                Book a Repair
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-emerald-400">200+</p>
                <p className="mt-1 text-sm text-gray-300">Appliances Fixed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-emerald-400">19K+</p>
                <p className="mt-1 text-sm text-gray-300">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-emerald-400">15+</p>
                <p className="mt-1 text-sm text-gray-300">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-emerald-400">24/7</p>
                <p className="mt-1 text-sm text-gray-300">Services</p>
              </div>
            </div>
          </div>

          {/* Right: Image only card */}
          <div>
            <div className="rounded-3xl p-3 bg-gray-800/70 ring-1 ring-emerald-600/40 shadow-xl">
              <div className="rounded-2xl overflow-hidden ring-1 ring-emerald-500/50">
                <Image
                  src="/assets/applience.jpeg"
                  alt="Appliance"
                  width={800}
                  height={500}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
