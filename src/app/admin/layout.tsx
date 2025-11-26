import Link from "next/link";
import { LayoutDashboard, Package, ShoppingBag, Users, Settings, LogOut } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-sm border-r border-gray-200 dark:border-gray-700 fixed h-full z-10">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-primary tracking-tight">FastKart<span className="text-gray-900 dark:text-white">.</span></h2>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">Admin Panel</p>
        </div>
        
        <nav className="mt-6 px-4 space-y-2">
          <Link
            href="/admin"
            className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors group"
          >
            <LayoutDashboard className="w-5 h-5 mr-3 text-gray-400 group-hover:text-primary transition-colors" />
            Dashboard
          </Link>
          <Link
            href="/admin/products"
            className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors group"
          >
            <Package className="w-5 h-5 mr-3 text-gray-400 group-hover:text-primary transition-colors" />
            Products
          </Link>
          <Link
            href="/admin/orders"
            className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors group"
          >
            <ShoppingBag className="w-5 h-5 mr-3 text-gray-400 group-hover:text-primary transition-colors" />
            Orders
          </Link>
          <Link
            href="/admin/users"
            className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors group"
          >
            <Users className="w-5 h-5 mr-3 text-gray-400 group-hover:text-primary transition-colors" />
            Users
          </Link>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 dark:border-gray-700">
          <button className="flex items-center w-full px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
}
