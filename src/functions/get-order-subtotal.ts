import { Order } from "types/order";

export const getOrderSubtotal = (props: Order): number => {
  return props.prices
    .map((price) => {
      return price.cost;
    })
    .reduce((runningTotal, amount) => {
      return runningTotal + amount;
    });
};
