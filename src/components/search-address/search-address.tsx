import React, { FC, useState } from "react";
import { delay } from "../../service/delay";
import { Search } from "../../shared/search";
import {
  Address,
  Results as ResultsAddress,
  searchAddress,
} from "../../service/searchAddress";

export const SearchAddress: FC = () => {
  const ms = 500;
  const [address, setAddress] = useState<Address[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const search = (value: string): void => {
    searchAddress(value.trim())
      .then((res) => delay(res, 500))
      .then((res: ResultsAddress) => {
        setIsError(false);
        setAddress(res.addresses);
      })
      .catch((error: unknown) => {
        console.error(error);
        setIsError(true);
        setAddress([]);
      });
  };

  const props = { search, searchedData: address, isError, ms };

  return (
    <>
      <Search {...props} />
    </>
  );
};
