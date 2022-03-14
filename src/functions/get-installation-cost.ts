import { Order } from "types/order";
import { getOrderSubtotal } from "./get-order-subtotal";

export const getInstallationCost = (props: Order): number => {
  const subtotal = getOrderSubtotal(props);
  const maximumInstallationCost = 27500;
  return subtotal < maximumInstallationCost
    ? subtotal
    : maximumInstallationCost;
};
