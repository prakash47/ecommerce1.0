"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function FilterSidebar({ className }: { className?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [priceRange, setPriceRange] = useState(1000);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(e.target.value));
    // Debounce or update URL logic here
  };

  return (
    <aside className={w-64 flex-shrink-0 }>
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 sticky top-24">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Filters</h3>

        {/* Price Filter */}
        <div className="mb-8">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Price Range</h4>
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange}
            onChange={handlePriceChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Categories (Static for now, could be dynamic) */}
        <div className="mb-8">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Categories</h4>
          <div className="space-y-3">
            {["Electronics", "Fashion", "Home", "Beauty"].map((cat) => (
              <label key={cat} className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Colors</h4>
          <div className="flex flex-wrap gap-3">
            {["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black", "bg-white border"].map((color) => (
              <button
                key={color}
                className={w-6 h-6 rounded-full  ring-2 ring-offset-2 ring-transparent hover:ring-gray-300 focus:outline-none}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
