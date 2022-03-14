import { Shipment } from "types/shipment";
import { createIdentifier } from "./create-identifier";
import { createTimestamp } from "./create-timestamp";

export const createShipment = (
  props: Omit<Shipment, "id" | "timestamp">
): Shipment => {
  return { id: createIdentifier(), timestamp: createTimestamp(), ...props };
};
