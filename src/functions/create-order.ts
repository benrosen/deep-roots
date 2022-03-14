import { Order } from "types/order";
import { createIdentifier } from "./create-identifier";
import { createTimestamp } from "./create-timestamp";

export const createOrder = (props: Omit<Order, "id" | "timestamp">): Order => {
  return { id: createIdentifier(), timestamp: createTimestamp(), ...props };
};
