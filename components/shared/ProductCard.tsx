import { formatPrice, truncateText } from "@/lib/utils"
import { Product } from "@/types/product"
import Image from "next/image"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <>
      <div className="border min-h-[358px] rounded-lg p-4 shadow-sm hover:shadow-md">
        <div className="relative h-50 bg-purple-100 mb-4 rounded-lg">
        <Image
            src={product.images[0]}
            alt="Car"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
        />
        </div>
        <h3 className="text-lg font-medium text-gray-900">{truncateText(product.title, 25)}</h3>
        <p className="text-sm text-gray-600">{truncateText(product.description, 60)}</p>
        <p className="font-bold mt-2">{formatPrice(product.price)}</p>
      </div>
    </>
  )
}