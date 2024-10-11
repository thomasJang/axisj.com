import { toMoney } from "./toMoney";

export function toMoney2(s: string | number | undefined, emptyString = "-"): string {
  if (typeof s === "string") {
    return s;
  } else {
    return toMoney(s, emptyString);
  }
}
