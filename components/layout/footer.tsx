"use client"

import { MENU_TITLE, TAGLINE } from "@/lib/constants";
import { SAMIRA_LOGO_IMAGE } from "@/lib/images/home";
import { fetchCategories } from "@/services/services-categroies";
import { Category } from "@/types/category";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const { data: categories } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories
  })

  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <Image src={SAMIRA_LOGO_IMAGE} alt="Samira Logo" width={100} height={30} className="mb-2"/>
          <p className="text-sm">{TAGLINE}</p>
        </div>

        <div>
          <h5 className="font-semibold mb-2">{MENU_TITLE.SHOP}</h5>
          <ul className="space-y-1 text-sm">
            <li><Link href="#" className="hover:text-purple-600">All Products</Link></li>
            {categories && categories.map((category, index) => (
              <li key={`${category.name}-${index}`}><Link href="#" className="hover:text-purple-600">{category.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">{MENU_TITLE.ABOUT_US}</h5>
          <ul className="space-y-1 text-sm">
            <li><Link href="#" className="hover:text-purple-600">{MENU_TITLE.ABOUT_US_CHILD.OUR_STORY}</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">{MENU_TITLE.SUPPORT}</h5>
          <ul className="space-y-1 text-sm">
            <li><Link href="#" className="hover:text-purple-600">{MENU_TITLE.SUPPORT_CHILD.CONTACT}</Link></li>
          </ul>
        </div>
    </div>

    <div className="text-center text-sm text-gray-500 border-t border-gray-200 py-4">
        © {new Date().getFullYear()} Samirah. All rights reserved.
    </div>
    </footer>
  );
}