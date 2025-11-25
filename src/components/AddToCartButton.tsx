"use client";

import { useCartStore } from "@/store/cart";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
        isAdded
          ? "bg-green-600 hover:bg-green-700 text-white"
          : "bg-blue-600 hover:bg-blue-700 text-white"
      }`}
    >
      {isAdded ? "Added to Cart!" : "Add to Cart"}
    </button>
  );
}