import React, { FC, useState } from "react";
import { Results, searchSpaces, Space } from "../../service/search";

export const Search: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    searchSpaces(e.target.value.trim())
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
