// components/Navigation.tsx

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

// components/Navbar.tsx
export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    router.push("/");
  };
  return (
    <nav className="mb-10 bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Left Menu Item */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-gray-800">
              WorkBoard
            </Link>
            {/* Left Menu Item */}
            <Link
              href="/projects"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Projects
            </Link>
          </div>

          {/* Right Menu Item */}
          <div>
            <button
              className="text-gray-700 hover:text-gray-900 font-medium"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
