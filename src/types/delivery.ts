import { Identifiable } from "interfaces/identifiable";
import { Shipment } from "types/shipment";
import { Timestamped } from "interfaces/timestamped";

export type Delivery = Identifiable & Timestamped & { shipment: Shipment };
