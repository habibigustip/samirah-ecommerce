export async function fetchCategories() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`)

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(error.message || 'Something went wrong')
  }
  const data = await response.json()
  return data
}