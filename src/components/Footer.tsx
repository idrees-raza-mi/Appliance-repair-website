import { Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white">Appliance Fix</h3>
            <p className="mt-2 text-gray-300">
              Your trusted partner for appliance repairs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Contact Us</h3>
            <ul className="mt-2 space-y-1 text-gray-300">
              <li>Email: contact@appliancefix.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Follow Us</h3>
            <div className="flex mt-2 space-x-4">
              <Link href="#" className="text-gray-300 hover:text-blue-400">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-blue-400">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-blue-400">
                <Instagram size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Appliance Fix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
