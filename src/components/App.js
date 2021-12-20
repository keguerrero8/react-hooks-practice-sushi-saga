import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

// const API = "http://localhost:3001/sushis";
function App() {
  const API = "http://localhost:3001/sushis";
  const [ sushis, setSushis] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
    .then(r => r.json())
    .then((sushiItems) => setSushis(sushiItems))
  }, [])

  return (
    <div className="app">
      <SushiContainer sushis={sushis}/>
      <Table />
    </div>
  );
}

export default App;
