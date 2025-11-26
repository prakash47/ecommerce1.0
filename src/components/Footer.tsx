import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <Link href="/" className="text-2xl font-bold text-primary tracking-tight mb-6 block">
              FastKart<span className="text-gray-900 dark:text-white">.</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              We make your shopping experience seamless and enjoyable. Discover the best products at unbeatable prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/shop" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Shop Now</Link></li>
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Top Categories</h3>
            <ul className="space-y-4">
              <li><Link href="/shop?category=Electronics" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Electronics</Link></li>
              <li><Link href="/shop?category=Fashion" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Fashion</Link></li>
              <li><Link href="/shop?category=Home" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Home & Living</Link></li>
              <li><Link href="/shop?category=Beauty" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Beauty</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">123 Commerce St, Market City, ST 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <span className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <span className="text-gray-600 dark:text-gray-400">support@fastkart.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} FastKart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
