import Link from 'next/link';
import { Instagram, Facebook, Twitter, Music2 } from 'lucide-react';

const SocialBar = () => {
	return (
		<div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
			<Link href="#" className="group">
				<span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white border border-gray-700 shadow hover:bg-gray-700 transition-colors">
					<Instagram size={18} />
				</span>
			</Link>
			<Link href="#" className="group">
				<span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white border border-gray-700 shadow hover:bg-gray-700 transition-colors">
					<Facebook size={18} />
				</span>
			</Link>
			<Link href="#" className="group">
				<span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white border border-gray-700 shadow hover:bg-gray-700 transition-colors">
					<Music2 size={18} />
				</span>
			</Link>
			<Link href="#" className="group">
				<span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white border border-gray-700 shadow hover:bg-gray-700 transition-colors">
					<Twitter size={18} />
				</span>
			</Link>
		</div>
	);
};

export default SocialBar;
