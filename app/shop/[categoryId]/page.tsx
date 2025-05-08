import HomePage from "@/features/home";
import ShopPage from "@/features/shop";
import { getQueryClient } from "@/lib/get-query-client";
import { fetchProducts } from "@/services/services-product";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Shop() {

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ShopPage></ShopPage>
    </HydrationBoundary>
  );
}
