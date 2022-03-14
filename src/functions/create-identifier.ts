import { Identifier } from "types/identifier";
import { v4 } from "uuid";

export const createIdentifier = (): Identifier => {
  return v4() as Identifier;
};
