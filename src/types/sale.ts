import { Identifiable } from "interfaces/identifiable";
import { Offer } from "types/offer";
import { Timestamped } from "interfaces/timestamped";

export type Sale = Identifiable & Timestamped & { offer: Offer };
