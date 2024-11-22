import { Product } from "@/types";
import { getHttpInstance } from "./base";

export async function getProducts() {
  const httpInstance = getHttpInstance();
  try {
    const { data } = await httpInstance.get<Product[]>("/products");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getProductsWithCategories() {
  const httpInstance = getHttpInstance();
  try {
    const { data } = await httpInstance.get("/products/categorie");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
