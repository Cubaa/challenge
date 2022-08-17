import React, { FC, useCallback, useState } from "react";
import _ from "lodash";
import { delay } from "../../service/delay";
import { Results, searchSpaces, Space } from "../../service/search";

export const Search: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const search = (value: string) => {
    searchSpaces(value.trim())
      .then((res) => delay(res, 500))
      .then((res: Results) => {
        setIsError(false);
        setSpaces(res.spaces);
      })
      .catch((error: unknown) => {
        console.error(error);
        setIsError(true);
        setSpaces([]);
      });
  };

  const debouncedSearch = useCallback(
    _.debounce((value: string) => search(value), 500),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={inputValue} />
      <div>{isError && <p>something went wrong message</p>}</div>
      <div>
        <ul style={{ listStyle: "none" }}>
          {spaces.length > 0 &&
            spaces.map((space: Space, index: number) => {
              return <li key={index}>{space.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};
