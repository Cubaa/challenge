import React, { FC, useState } from "react";
import { delay } from "../../service/delay";
import { Results, searchSpaces, Space } from "../../service/search";
import { Search } from "../../shared/search";

export const SearchSpaces: FC = () => {
  const ms = 500;
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const search = (value: string): void => {
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

  const props = { search, searchedData: spaces, isError, ms };

  return (
    <>
      <Search {...props} />
    </>
  );
};
