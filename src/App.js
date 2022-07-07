/**
 * Copyright [2022] [Semantic Health]
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
 */

// React imports
import React, { useState } from "react";
// style imports
import "./App.css";
// component imports
import PageRankAlgo from "./Components/pageRankAlgo/pageRankAlgo";

function App() {
  const [inputs, setInputs] = useState("");
  const [input, setInput] = useState("");

  // state for connector, connector represent outbound links
  const [isEdges, setIsEdges] = useState([]);

  // state for nodes, each node has ouboundlink, probability, pageRank and name
  const [isNodes, setIsNodes] = useState([]);

  /**
   * Function for handling inputs, handling updated value to the state
   * Also, checking values for parsingInt
   * @param {*} event
   */
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({
      ...values,
      [name]: name === "OBLen" ? parseInt(value) : value,
    }));
  };

  /**
   * Function for creating new Node, setting state and formating data according to the need
   * @param {*} e
   */
  const createNewNode = (e) => {
    e.preventDefault();
    setIsNodes((current) => [...current, inputs]);
  };

  /**
   * Function for handling onChange, getting input values and name of Edges
   * Setting state, formated object
   * @param {*} event
   */
  const handleEdgeChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  /**
   * Function for handling onSubmit form, using this form for setting Nodes Edges
   * @param {*} e
   */
  const onNodeEdgesSubmit = (e) => {
    e.preventDefault();
    setIsEdges((current) => [
      ...current,
      { connector: [input.start, input.end] },
    ]);
  };

  return (
    <div className="App">
      <div style={{ display: "flex" }} className="wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          className="form-wrapper"
        >
          {/* TODO: Create separate component for form, style form as well */}
          <h1>Add New Node</h1>
          <form onSubmit={createNewNode}>
            <div>
              <h3>Out bounding links:</h3>
              <div>
                <input
                  type="number"
                  onChange={handleChange}
                  value={inputs.OBLen || ""}
                  min={0}
                  name="OBLen"
                  required
                />
              </div>
            </div>

            <div>
              <h3>Node Name:</h3>
              <div>
                <input
                  type="text"
                  onChange={handleChange}
                  value={inputs.name || ""}
                  name="name"
                  required
                />
              </div>
            </div>

            <div>
              <h3>Pagerank:</h3>
              <div>
                <input
                  type="number"
                  onChange={handleChange}
                  value={inputs.PageRank || ""}
                  name="PageRank"
                  min={0}
                  required
                />
              </div>
            </div>

            <button className="btn-submit" type="submit">
              Create Node
            </button>
          </form>
          <hr />
          <h1>Add Edges</h1>
          <form onSubmit={onNodeEdgesSubmit}>
            <div>
              <h3>Start</h3>
              <div>
                <input
                  onChange={handleEdgeChange}
                  value={input.start || ""}
                  name="start"
                  min={0}
                  type="text"
                  required
                />
              </div>
            </div>

            <div>
              <h3>End</h3>
              <div>
                <input
                  type="text"
                  onChange={handleEdgeChange}
                  value={input.end || ""}
                  name="end"
                  min={0}
                  required
                />
              </div>
            </div>
            <button className="btn-submit" type="submit">
              Create Edge
            </button>
          </form>
        </div>
        <div>
          <PageRankAlgo nodeArrays={isNodes ?? []} Edges={isEdges ?? []} />
        </div>
      </div>
    </div>
  );
}

export default App;
