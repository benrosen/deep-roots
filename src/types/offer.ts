import { Identifiable } from "interfaces/identifiable";
import { Order } from "types/order";
import { Timestamped } from "interfaces/timestamped";

export type Offer = Identifiable &
  Timestamped & { total: number; order: Order };
