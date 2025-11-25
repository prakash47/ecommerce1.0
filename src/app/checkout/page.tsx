"use client";

import { useCartStore } from "@/store/cart";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, clearCart } = useCartStore();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          total,
          userId: "guest",
        }),
      });

      if (response.ok) {
        clearCart();
        alert("Order placed successfully!");
        router.push("/");
      } else {
        alert("Failed to place order.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return <div className="p-8 text-center">Your cart is empty.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
      <form onSubmit={handleCheckout} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
          />
        </div>
        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between text-lg font-medium text-gray-900">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400"
        >
          {isSubmitting ? "Processing..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}