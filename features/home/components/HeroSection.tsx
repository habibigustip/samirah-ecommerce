import { Button } from "@/components/ui/button";
import { SECTION_TITLE, SHOP_NOW, TAGLINE } from "@/lib/types/constants";
import { HERO_BANNER_IMAGE } from "@/lib/images/home";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex justify-center items-center h-120 text-center m-8">
      <Image
        src={HERO_BANNER_IMAGE}
        alt="Hero Image"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        className="object-cover rounded-lg"
      />
      <div className="absolute bg-white/30 backdrop-brightness-60 rounded-md p-6">
        <h1 className="text-4xl font-bold">{SECTION_TITLE.HOMEPAGE_HERO_SECTION}</h1>
        <p className="mt-4 text-lg">{TAGLINE}</p>
        <Button className="mt-6 bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
          {SHOP_NOW}
        </Button>
      </div>
    </section>
  )
}
