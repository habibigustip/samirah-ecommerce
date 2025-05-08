import HomePage from "@/features/home";
import { getQueryClient } from "@/lib/get-query-client";
import { fetchCategories } from "@/services/services-categroies";
import { fetchProducts } from "@/services/services-product";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Home() {

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories
  })

  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomePage></HomePage>
    </HydrationBoundary>
  );
}
