"use server"

import { revalidatePath } from "next/cache"

// This is a mock API call. In a real application, you would call your actual API here.
async function searchAPI(query: string) {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Mock results
  return [
    { id: 1, name: `Nike Air Max ${query}` },
    { id: 2, name: `Nike React ${query}` },
    { id: 3, name: `Nike Zoom ${query}` },
  ]
}

export async function performSearch(query: string) {
  const results = await searchAPI(query)
  revalidatePath("/")
  return results
}

