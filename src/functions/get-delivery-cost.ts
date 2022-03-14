import { Addressable } from "interfaces/addressable";
import { getDeliveryDistance } from "./get-delivery-distance";

export const getDeliveryCost = ({ address }: Addressable): number => {
  const distance = getDeliveryDistance({ address });
  const baseDeliveryFee = 0;
  const centsPerKilometer = 0;
  return distance * centsPerKilometer + baseDeliveryFee;
};
