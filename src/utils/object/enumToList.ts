export function enumToList<T = { key: string; label: string }>(e: Record<string, any>, returnKeys?: string[]): T[] {
  const map = Object.entries(e);
  return map.map(([key, value]) => {
    if (returnKeys) {
      return {
        [returnKeys[0]]: key,
        [returnKeys[1]]: value,
      } as T;
    }
    return {
      key,
      label: value,
    } as T;
  });
}
