import React, { FC, useState } from "react";
import { Space } from "../service/search";
import { ISearchProps } from "./interfaces/search.interface";
import { Address } from "../service/searchAddress";
import { useDebounce } from "../hooks/use-debounce";

export const Search: FC<ISearchProps> = (props) => {
  const { search: searchData, searchedData, isError, ms } = props;
  const [inputValue, setInputValue] = useState<string>("")
  const debouncedSearch = useDebounce(ms);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    debouncedSearch(searchData, e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={inputValue} />
      <div>{isError && <p>something went wrong message</p>}</div>
      <div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {[...searchedData].map((data: Space | Address, index: number) => {
            return "name" in data ? (
              <li key={index}>{data.name}</li>
            ) : (
              <li key={index}>{data.address}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
