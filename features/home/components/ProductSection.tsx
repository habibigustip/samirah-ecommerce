"use client"

import ProductCard from "@/components/shared/ProductCard";
import { fetchProducts } from "@/services/services-product";
import { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
import { SECTION_TITLE } from "@/lib/constants";

export default function ProductSection() {
  const { data: products } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts
  })

  return (
    <section className="px-8 py-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{SECTION_TITLE.HOMEPAGE_PRODUCT_SECTION}</h2>
      {/* Product Grid */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[92%] my-0 mx-auto"
      >
        <CarouselContent>
          {products && products.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
                <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}