import { Identifiable } from "interfaces/identifiable";
import { Sale } from "types/sale";
import { Timestamped } from "interfaces/timestamped";

export type Shipment = Identifiable & Timestamped & { sale: Sale };
