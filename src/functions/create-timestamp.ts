import { Timestamp } from "types/timestamp";

export const createTimestamp = (): Timestamp => {
  return Date.now();
};
