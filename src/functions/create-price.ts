import { Identifiable } from "interfaces/identifiable";
import { Price } from "types/price";
import { createIdentifier } from "./create-identifier";

export const createPrice = (
  props: Omit<Price, "id"> & Partial<Identifiable>
): Price => {
  return { id: createIdentifier(), ...props };
};
