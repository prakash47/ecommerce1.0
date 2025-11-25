import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Product } from "@prisma/client"; import { ProductCard } from "@/components/ProductCard";

export default async function Home() {
  let featuredProducts: Product[] = [];
  try {
    featuredProducts = await prisma.product.findMany({
      take: 4,
      orderBy: { createdAt: "desc" },
    });
    console.log("Fetched products:", featuredProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    featuredProducts = [];
  }

  return (
    <div className="space-y-12">
      <section className="text-center py-16 bg-gray-50 rounded-2xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to ShopEase
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover the best products at amazing prices.
        </p>
        <Link
          href="/shop"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Start Shopping
        </Link>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
