"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  ChevronRight,
  ShoppingBag
} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [leftToggle, setLeftToggle] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleLeft = () => setLeftToggle(!leftToggle);

  const cartItemCount = 1;

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

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-pink-200 text-sm text-center py-1 text-black">
        <span>Click Here</span> to Get <span>15% OFF</span> When You Sign Up For
        Email and SMS
      </div>

      <div className="max-w-7xlmx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleLeft}
            className="text-gray-800 mr-6 hidden sm:block"
          >
            {leftToggle ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          <button onClick={toggleMenu} className="text-gray-800 sm:hidden">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="hidden sm:block border rounded-md px-3 py-1 text-sm focus:outline-none"
          />
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold tracking-widest text-gray-800">
          JEROME ALEXANDER<span className="text-xs">®</span>
        </div>

        <div className="hidden sm:flex items-center space-x-4 ml-auto text-sm text-gray-800">
          <Link href="/" className="hover:underline">
            Home  |
          </Link>
          <Link href="/shop" className="hover:underline">
            Shop  |
          </Link>
          <Link href="/about" className="hover:underline">
            About  |
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>

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
        <div className="sm:hidden px-4 pb-4 space-y-2 text-gray-700 text-sm">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full border rounded-md px-3 py-1 text-sm focus:outline-none"
          />

          {menuItems.map((item) => (
            <div key={item.label} className=" rounded-md mb-2">
              <button
                onClick={() =>
                  setActiveCategory(activeCategory === item.label ? null : item.label)
                }
                className="w-full text-left font-semibold py-2 px-3 flex justify-between items-center text-gray-800"
              >
                {item.label}
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    activeCategory === item.label ? "rotate-90" : ""
                  }`}
                />
              </button>

              {item.children && activeCategory === item.label && (
                <div className="pl-6 pr-3 pb-2 space-y-1">
                  {item.children.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={closeMenu}
                      className="block text-sm text-gray-700 hover:underline"
                    >
                      {sub.label}
                    </Link>

                  ))}
                </div>
              )}
            </div>
          ))}

          <hr className="my-2 " />
          <Link href="/" className="block hover:underline">Find Your Shade</Link>
          <Link href="/" className="block hover:underline">Jerome’s Secrets</Link>
          <Link href="/" className="block hover:underline">FAQ</Link>
          <Link href="/" className="block hover:underline">Sign In</Link>
        </div>
      )}
    </header>
  );
}
