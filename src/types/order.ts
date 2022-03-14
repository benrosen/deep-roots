import { Addressable } from "interfaces/addressable";
import { Identifiable } from "interfaces/identifiable";
import { Price } from "types/price";
import { Timestamped } from "interfaces/timestamped";

export type Order = Identifiable &
  Timestamped & { prices: Price[] } & Partial<
    Addressable & { includeInstallation: boolean }
  >;
