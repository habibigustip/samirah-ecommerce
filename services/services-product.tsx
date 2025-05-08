import { CheapestPriceProduct } from "@/lib/types/enums";

export async function fetchProducts() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/?price_min=${CheapestPriceProduct.Min}&price_max=${CheapestPriceProduct.Max}`
    )

    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: response.statusText }));
        throw new Error(error.message || 'Something went wrong')
    }
    const data = await response.json()
    return data
}