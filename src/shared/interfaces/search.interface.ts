import { Space } from "../../service/search";
import { Address } from "../../service/searchAddress";

export interface ISearchProps {
  search: (value: string) => void;
  searchedData: Space[] | Address[];
  isError: boolean;
  ms: number;
}
