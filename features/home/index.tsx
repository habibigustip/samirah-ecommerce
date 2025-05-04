import HeroSection from "./components/HeroSection";
import ProductCard from "@/components/shared/ProductCard";

const products = [
  { id: 1, name: "Product 1", price: "$39.99", image: "https://picsum.photos/id/133/2742/1828" },
  { id: 2, name: "Product 2", price: "$29.99", image: "https://picsum.photos/id/146/5000/3333" },
  { id: 3, name: "Product 3", price: "$49.99", image: "https://picsum.photos/id/175/2896/1944" },
  { id: 4, name: "Product 4", price: "$19.99", image: "https://picsum.photos/id/211/1920/1280" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection></HeroSection>
      {/* Product Grid */}
      <section className="px-6 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <ProductCard products={products} />
        </div>
      </section>
    </>
  )
}