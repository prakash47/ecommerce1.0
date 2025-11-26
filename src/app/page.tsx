import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CategoryStrip from "@/components/CategoryStrip";
import { ProductCard } from "@/components/ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@prisma/client";

export default async function Home() {
  let featuredProducts: Product[] = [];
  try {
    featuredProducts = await prisma.product.findMany({
      take: 8,
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    featuredProducts = [];
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <CategoryStrip />

        {/* Featured Products Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Trending Products
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Top picks for this week
              </p>
            </div>
            <Link
              href="/shop"
              className="hidden sm:flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90"
            >
              View All Products
            </Link>
          </div>
        </section>

        {/* Promo Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl overflow-hidden bg-gray-900 h-[400px] flex items-center">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" 
                  alt="Promo" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="relative z-10 px-8 md:px-16 max-w-2xl">
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Limited Offer</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Get 50% Off on <br/> Summer Collection
                </h2>
                <p className="text-gray-200 text-lg mb-8">
                  Upgrade your wardrobe with our exclusive summer styles. Don't miss out on these amazing deals.
                </p>
                <Link
                  href="/shop"
                  className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                >
                  Shop Sale
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
