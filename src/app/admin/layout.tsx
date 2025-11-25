import Link from "next/link";
import { LayoutDashboard, Package, ShoppingBag, Users } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="mt-6">
          <Link
            href="/admin"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link
            href="/admin/products"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
          >
            <Package className="w-5 h-5 mr-3" />
            Products
          </Link>
          <Link
            href="/admin/orders"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
          >
            <ShoppingBag className="w-5 h-5 mr-3" />
            Orders
          </Link>
          <Link
            href="/admin/users"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
          >
            <Users className="w-5 h-5 mr-3" />
            Users
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}