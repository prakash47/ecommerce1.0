"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Upload, Save } from "lucide-react";

export default function NewProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    categoryId: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
        }),
      });

      if (res.ok) {
        router.push("/admin/products");
        router.refresh();
      } else {
        alert("Failed to create product");
      }
    } catch (error) {
      console.error(error);
      alert("Error creating product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <button
          onClick={() => router.back()}
          className="mr-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Add New Product</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Fill in the details to create a new product</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Product Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="e.g. Wireless Headphones"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price ($)</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category ID</label>
                <input
                  type="text"
                  required
                  value={formData.categoryId}
                  onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Paste Category ID here"
                />
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Tip: Copy ID from Prisma Studio or Category list
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all h-[132px] resize-none"
                  placeholder="Detailed product description..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Image URL</label>
                <div className="relative">
                  <input
                    type="url"
                    required
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="https://example.com/image.jpg"
                  />
                  <Upload className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Preview Image (Optional) */}
          {formData.image && (
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Image Preview</label>
              <div className="w-32 h-32 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
              </div>
            </div>
          )}

          <div className="flex justify-end pt-6 border-t border-gray-100 dark:border-gray-700">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-3 mr-4 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 shadow-lg shadow-primary/30 transition-all transform hover:scale-105 flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="animate-pulse">Creating...</span>
              ) : (
                <>
                  <Save className="w-5 h-5 mr-2" />
                  Create Product
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
