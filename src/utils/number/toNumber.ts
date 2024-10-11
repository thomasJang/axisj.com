export function toNumber(value: unknown): number {
  let n: number = value as number;
  try {
    n = typeof value === "number" ? value : Number(`${value}`.replace(/[^0-9\.]/g, "") || 0);
  } catch (e) {
    console.log(e);
  }
  return n;
}
