import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { UserMenu } from "@/components/UserMenu";

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          ShopEase
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/shop" className="text-gray-600 hover:text-gray-900">
            Shop
          </Link>
          <Link href="/cart" className="relative text-gray-600 hover:text-gray-900">
            <ShoppingCart className="w-6 h-6" />
            {/* Badge placeholder - could be connected to store */}
          </Link>
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}