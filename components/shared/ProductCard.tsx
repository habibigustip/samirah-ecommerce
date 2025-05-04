import { Product } from "@/types/product"
import Image from "next/image"

export default function ProductCard({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md">
          <div className="relative h-40 bg-purple-100 mb-4 rounded-lg">
            <Image src={product.image} alt="Car" fill objectFit="cover" className="rounded-lg"/>
          </div>
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <p className="text-purple-600 mt-2">{product.price}</p>
          <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
            Add to Cart
          </button>
        </div>
      ))}
    </>
  )
}