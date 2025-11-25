"use client";

import { useCartStore } from "@/store/cart";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added anything yet.</p>
        <Link
          href="/shop"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div
              key={item.productId}
              className="flex items-center bg-white p-4 rounded-lg shadow-sm"
            >
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-4 flex-1 flex flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <Link href={`/product/${item.productId}`}>{item.name}</Link>
                    </h3>
                    <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex-1 flex items-end justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.productId, Math.max(1, item.quantity - 1))
                      }
                      className="p-1 rounded-md hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity + 1)
                      }
                      className="p-1 rounded-md hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.productId)}
                    className="font-medium text-red-600 hover:text-red-500 flex items-center"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
          <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
            <p>Subtotal</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Shipping and taxes calculated at checkout.
          </p>
          <Link
            href="/checkout"
            className="w-full block bg-blue-600 text-white text-center py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}