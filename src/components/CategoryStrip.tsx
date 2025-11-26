import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Smartphone, Shirt, Home, Watch, Monitor, Headphones, Camera, Coffee } from "lucide-react";

// Helper to map category names to icons
const getIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes("phone")) return Smartphone;
  if (lower.includes("cloth") || lower.includes("fashion")) return Shirt;
  if (lower.includes("home")) return Home;
  if (lower.includes("watch")) return Watch;
  if (lower.includes("computer") || lower.includes("laptop")) return Monitor;
  if (lower.includes("audio") || lower.includes("headphone")) return Headphones;
  if (lower.includes("camera")) return Camera;
  return Coffee; // Default
};

export default async function CategoryStrip() {
  const categories = await prisma.category.findMany();

  return (
    <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto py-6 no-scrollbar">
          {categories.map((category) => {
            const Icon = getIcon(category.name);
            return (
              <Link
                key={category.id}
                href={/shop?category=}
                className="flex flex-col items-center min-w-[80px] group"
              >
                <div className="w-16 h-16 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center mb-3 group-hover:bg-primary/10 group-hover:text-primary transition-colors border border-gray-100 dark:border-gray-700">
                  <Icon className="w-7 h-7 text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors whitespace-nowrap">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
