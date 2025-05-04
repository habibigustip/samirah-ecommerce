import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
        <h4 className="text-xl font-bold text-purple-700 mb-2">Samirah</h4>
        <p className="text-sm">
            Discover elegant, curated products crafted for modern lifestyles.
        </p>
        </div>

        <div>
        <h5 className="font-semibold mb-2">Shop</h5>
        <ul className="space-y-1 text-sm">
            <li><Link href="#" className="hover:text-purple-600">All Products</Link></li>
            <li><Link href="#" className="hover:text-purple-600">Category 1</Link></li>
            <li><Link href="#" className="hover:text-purple-600">Category 2</Link></li>
        </ul>
        </div>

        <div>
        <h5 className="font-semibold mb-2">About</h5>
        <ul className="space-y-1 text-sm">
            <li><Link href="#" className="hover:text-purple-600">Our Story</Link></li>
            <li><Link href="#" className="hover:text-purple-600">Careers</Link></li>
            <li><Link href="#" className="hover:text-purple-600">Blog</Link></li>
        </ul>
        </div>

        <div>
        <h5 className="font-semibold mb-2">Support</h5>
        <ul className="space-y-1 text-sm">
            <li><Link href="#" className="hover:text-purple-600">Contact</Link></li>
            <li><Link href="#" className="hover:text-purple-600">FAQs</Link></li>
            <li><Link href="#" className="hover:text-purple-600">Shipping & Returns</Link></li>
        </ul>
        </div>
    </div>

    <div className="text-center text-sm text-gray-500 border-t border-gray-200 py-4">
        © {new Date().getFullYear()} Samirah. All rights reserved.
    </div>
    </footer>
  );
}