"use client";
import Link from "next/link";
import { ShoppingBag, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useState } from "react";
import { useCartStore } from "@/store/cart";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
              FastKart<span className="text-gray-900 dark:text-white">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition-colors">
              Shop
            </Link>
            <Link href="/admin" className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition-colors">
              Admin
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 hover:text-primary transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <Link href="/cart" className="relative p-2 text-gray-500 hover:text-primary transition-colors">
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-primary rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800">
              Home
            </Link>
            <Link href="/shop" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800">
              Shop
            </Link>
            <Link href="/admin" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800">
              Admin
            </Link>
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-gray-700 dark:text-gray-200">Theme</span>
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-500 hover:text-primary rounded-full"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
