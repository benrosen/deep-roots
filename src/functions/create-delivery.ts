import { Delivery } from "types/delivery";
import { createIdentifier } from "./create-identifier";
import { createTimestamp } from "./create-timestamp";

export const createDelivery = (
  props: Omit<Delivery, "id" | "timestamp">
): Delivery => {
  return {
    id: createIdentifier(),
    timestamp: createTimestamp(),
    ...props,
  };
};
