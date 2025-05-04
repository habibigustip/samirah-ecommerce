"use client"

import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react";
import Link from "next/link";
import NavigationMenuShop from "./navigation-menu-shop";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-600">Samirah</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {/* <li className="hover:text-purple-600 cursor-pointer"><Link href="/shop">Shop</Link></li>
          <li className="hover:text-purple-600 cursor-pointer"><Link href="/about-us">About Us</Link></li> */}
          <NavigationMenuShop/>
        </ul>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-purple-600 cursor-pointer"><Link href="/login"><ShoppingBag className="w-6 h-6"/></Link></li>
          <li className="hover:text-purple-600 cursor-pointer"><Link href="/login">Login</Link></li>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-gray-700 font-medium">
          <li className="hover:text-purple-600 cursor-pointer"><Link href="/shop">Shop</Link></li>
          <li className="hover:text-purple-600 cursor-pointer"><Link href="/about-us">About Us</Link></li>
        </ul>
      )}
    </nav>
  )
}
