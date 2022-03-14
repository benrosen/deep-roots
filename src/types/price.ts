import { Identifiable } from "interfaces/identifiable";
import { Product } from "types/product";

export type Price = Identifiable & {
  cost: number;
  product: Product;
};
