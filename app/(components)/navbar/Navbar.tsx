"use client";

import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const cartItemCount = 1;

  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    {
      label: "AirBrush",
      children: [
        { label: "AirBrush Foundation, Single Can", href: "/" },
        { label: "AirBrush Foundation 3 pc Set", href: "/" },
        { label: "Deluxe AirBrush Foundation 5 pc Set", href: "/" },
      ],
    },
    {
      label: "AirTint",
      children: [
        { label: "AirTint Tinted Moisturizer, Single Can", href: "/" },
        { label: "AirTint Tinted Moisturizing 3pc Set", href: "/" },
      ],
    },
    {
      label: "AirGlow",
      children: [
        { label: "AirGlow Tinted Highlighter, Single Can", href: "/" },
        { label: "AirGlow Tinted Highlighter 3pc Set", href: "/" },
      ],
    },
    {
      label: "Prep & Tools",
      children: [
        { label: "AirFinish Setting Spray", href: "/" },
        { label: "Liquid Silk Primer Spray", href: "/" },
        { label: "Kabuki Brush", href: "/" },
        { label: "SlimLine Kabuki Brush", href: "/" },
        { label: "Body Brush", href: "/" },
      ],
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setActiveCategory(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-red-200 text-sm text-center py-1 text-black">
        <span>Click Here</span> to Get <span>15% OFF</span> When You Sign Up For Email and SMS
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 relative">
        <div className="flex items-center gap-3 sm:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <button onClick={toggleMenu} className="text-gray-800 mr-3">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="border rounded-md px-3 py-1 text-sm focus:outline-none"
          />
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold tracking-widest text-gray-800 text-center">
          JEROME ALEXANDER<span className="text-xs">®</span>
        </div>

        <div className="flex items-center gap-3 sm:ml-auto">
          <div className="hidden sm:flex items-center space-x-4 text-sm text-gray-800 ml-auto">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/shop" className="hover:underline">Shop</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>

          <Link href="/cart" className="relative group hover:text-pink-500">
            <ShoppingBag className="w-5 h-5" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 left-0 h-full w-4/5 lg:w-1/4 bg-white z-50 shadow-lg overflow-y-auto transition-all"
        >
          <div className="p-4 space-y-3">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none"
            />

            {!activeCategory ? (
              <>
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setActiveCategory(item.label)}
                    className="w-full text-left font-semibold py-2 px-2 flex justify-between items-center"
                  >
                    {item.label}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ))}

                <hr className="my-2" />
                <Link href="/" className="block hover:underline">Find Your Shade</Link>
                <Link href="/" className="block hover:underline">Jerome’s Secrets</Link>
                <Link href="/" className="block hover:underline">FAQ</Link>
                <Link href="/" className="block hover:underline">Sign In</Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="text-left text-sm text-pink-600 hover:underline mb-3 "
                >
                  ← Back
                </button>
                {menuItems
                  .find((item) => item.label === activeCategory)
                  ?.children.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={closeMenu}
                      className="block text-sm text-gray-700 hover:underline pl-2 bg-red-100 py-4 "
                    >
                      {sub.label}
                    </Link>
                  ))}
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
