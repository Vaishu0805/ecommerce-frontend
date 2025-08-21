import { BASE_URL } from "../config";

export async function getProducts(category = "") {
  try {
    let url = `${BASE_URL}/api/products`;
    if (category) {
      url += `/${category}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
