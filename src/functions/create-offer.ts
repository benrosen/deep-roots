import { Addressable } from "interfaces/addressable";
import { Offer } from "types/offer";
import { createIdentifier } from "./create-identifier";
import { createTimestamp } from "./create-timestamp";
import { getDeliveryCost } from "./get-delivery-cost";
import { getInstallationCost } from "./get-installation-cost";
import { getOrderSubtotal } from "./get-order-subtotal";

export const createOffer = (
  props: Omit<Offer, "id" | "timestamp" | "total">
): Offer => {
  return {
    id: createIdentifier(),
    timestamp: createTimestamp(),
    total:
      getOrderSubtotal(props.order) +
      (props.order.address ? getDeliveryCost(props.order as Addressable) : 0) +
      (props.order.includeInstallation ? getInstallationCost(props.order) : 0),
    ...props,
  };
};
