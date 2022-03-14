import { Identifiable } from "interfaces/identifiable";
import { Product } from "types/product";
import { createIdentifier } from "./create-identifier";

export const createProduct = (
  props: Omit<Product, "id"> & Partial<Identifiable>
): Product => {
  return { id: createIdentifier(), ...props };
};
