import _, { DebouncedFunc } from "lodash";
import { useCallback } from "react";

export const useDebounce = (ms: number): 
  DebouncedFunc<(search: (value: string) => void, value: string) => void> =>
{
  const debouncedSearch = useCallback(
    _.debounce((search: (value: string) => void, value: string) => search(value), ms)
    ,[]);
  return debouncedSearch;
};
