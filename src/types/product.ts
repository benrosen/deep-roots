import { Described } from "interfaces/described";
import { Identifiable } from "interfaces/identifiable";
import { Named } from "interfaces/named";

export type Product = Identifiable & Partial<Named & Described>;
