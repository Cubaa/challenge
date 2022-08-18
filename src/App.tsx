import React from "react";
import { SearchAddress } from "./components/search-address/search-address";
import { SearchSpaces } from "./components/search-spaces/search-spaces";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div style={{ textAlign: "center" }}>
        <p>Search space</p>
        <SearchSpaces />
      </div>
      <div style={{ textAlign: "center" }}>
        <p>Search address</p>
        <SearchAddress />
      </div>
    </div>
  );
}

export default App;
