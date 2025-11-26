import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star, Heart, Eye } from "lucide-react";
import { Product } from "@prisma/client";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 relative">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
           <button className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg">
             <Eye className="w-5 h-5" />
           </button>
           <button className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-lg">
             <Heart className="w-5 h-5" />
           </button>
        </div>

        {/* Badge (Optional) */}
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          SALE
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center mb-2">
           <div className="flex text-yellow-400">
             {[...Array(5)].map((_, i) => (
               <Star key={i} className="w-4 h-4 fill-current" />
             ))}
           </div>
           <span className="text-xs text-gray-500 ml-2">(4.5)</span>
        </div>

        <Link href={/product/}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            
          </span>
          <button className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-primary hover:text-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
