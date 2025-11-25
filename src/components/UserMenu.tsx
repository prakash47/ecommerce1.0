"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { User, LogOut } from "lucide-react";
import { useState } from "react";

export function UserMenu() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  if (!session) {
    return (
      <button
        onClick={() => signIn()}
        className="text-gray-600 hover:text-gray-900 font-medium"
      >
        Login
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        <User className="w-6 h-6" />
        <span className="hidden md:inline">{session.user?.name || "User"}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">
              {session.user?.name}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {session.user?.email}
            </p>
          </div>
          
          {session.user?.role === "ADMIN" && (
            <Link
              href="/admin"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Admin Dashboard
            </Link>
          )}
          
          <Link
            href="/orders"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            My Orders
          </Link>

          <button
            onClick={() => signOut()}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}