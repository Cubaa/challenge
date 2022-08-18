import React from "react";
import { Panel } from "./components/panel/panel";
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
      <div style={{ width: "25%", paddingTop: "20px" }}>
        <Panel />
      </div>
    </div>
  );
}

export default App;
