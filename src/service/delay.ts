export const delay = <T>(value: T, ms: number): Promise<T> =>
  new Promise((resolve) => setTimeout(resolve, ms, value));
