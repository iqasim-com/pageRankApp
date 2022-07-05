import React, { useState } from "react";
import "./App.css";
import Graph from "./Components/graph/graph";

function App() {
  const [inputs, setInputs] = useState({});
  const [isNodes, setIsNodes] = useState([]);

  const createNewNode = (e) => {
    e.preventDefault();
    setIsNodes([
      { OBLen: 0, prob: 0.25, PageRank: 0, name: "A" },
      { OBLen: 2, prob: 0.25, PageRank: 0, name: "B" },
      { OBLen: 1, prob: 0.25, PageRank: 0, name: "C" },
      { OBLen: 3, prob: 0.25, PageRank: 0, name: "D" },
    ]);

      // [
      //   { OBLen: 0, prob: 0.25, PageRank: 0, name: "A" },
      //   { OBLen: 2, prob: 0.25, PageRank: 0, name: "B" },
      //   { OBLen: 1, prob: 0.25, PageRank: 0, name: "C" },
      //   { OBLen: 3, prob: 0.25, PageRank: 0, name: "D" },
      // ]
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <div className="App">
      <h1>Add New Node</h1>
      <div>
        <form onSubmit={createNewNode}>
          <label>
            Out bounding links:
            <input type="number" onChange={handleChange} value={inputs.OBLen || ""}  min={0} name="OBLen" />
          </label>

          <label>
            Node Name:
            <input type="text" onChange={handleChange} value={inputs.name || ""}  name="name" />
          </label>

          <label>
            Initial Probability:
            <input type="number" onChange={handleChange} value={inputs.prob || ""}  name="prob" />
          </label>

          <label>
            Initial Pagerank:
            <input type="number" onChange={handleChange} value={inputs.PageRank || ""}  name="PageRank" />
          </label>

          <button type="submit">Create Node</button>
        </form>
      </div>
      <Graph
        nodeArrays={[
          { OBLen: 0, prob: 0.25, PageRank: 0, name: "A" },
          { OBLen: 2, prob: 0.25, PageRank: 0, name: "B" },
          { OBLen: 1, prob: 0.25, PageRank: 0, name: "C" },
          { OBLen: 3, prob: 0.25, PageRank: 0, name: "D" },
        ]}
        Edges={[
          { connector: ["B", "C"] },
          { connector: ["B", "A"] },
          { connector: ["C", "A"] },
          { connector: ["D", "C"] },
          { connector: ["D", "B"] },
          { connector: ["D", "A"] },
        ]}
      />
    </div>
  );
}

export default App;
