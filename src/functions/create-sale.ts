import { Sale } from "types/sale";
import { createIdentifier } from "./create-identifier";
import { createTimestamp } from "./create-timestamp";

export const createSale = (props: Omit<Sale, "id" | "timestamp">): Sale => {
  return { id: createIdentifier(), timestamp: createTimestamp(), ...props };
};
