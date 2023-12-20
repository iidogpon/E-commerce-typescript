import axios from "axios";
import { Product } from "./types";

export const fetchProductAPI = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(
    "https://fakestoreapi.com/products"
  );
  return response.data;
};
