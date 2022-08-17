import { Results } from "./search";

export const delay = (value: Results, ms: number): Promise<Results> =>
  new Promise((resolve) => setTimeout(resolve, ms, value));
