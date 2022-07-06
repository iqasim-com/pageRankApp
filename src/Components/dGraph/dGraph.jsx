/**
 * Copyright [2022] [semantichealth]
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
import React from "react";
// Third-party imports
import CytoscapeComponent from "react-cytoscapejs";

/**
 * Class component for Directed Graph, expecting following props
 * nodes, edges
 * TODO: For scaling we can use Redux for state management
 */
class DirectedGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graphNodes: this.props.graphNodesAndEdges ?? {},
      compiledNodes: [],
    };
  }

  /**
   * Function for structuring Nodes and Edges to the expected format react-cytoscapejs is expecting
   * Getting Nodes and Edges through props and stored them into the state
   * displaying only 3 values of PageRank instead of whole decimal number
   */
  setNodesAndEdges = () => {
    let formatedNodesAndEdges = [];

    // loop through the graph nodes getting as a prop and pusing all formated data into the nodess
    // TODO: We can change this logic further
    this.state.graphNodes.nodes?.map((res) => {
      formatedNodesAndEdges.push({
        data: {
          id: res.name,
          label: res.name + " " + res.PageRank.toPrecision(2) * 100 + "%",
        }
      });
    });

    // loop through the graph edges getting as a prop and pusing all formated data into the node
    // TODO: We can change this logic further
    for (let i = 0; i < this.state.graphNodes.nodesEdges.length; i++) {
      formatedNodesAndEdges.push({
        data: {
          source: this.state.graphNodes.nodesEdges[i].connector[0],
          target: this.state.graphNodes.nodesEdges[i].connector[1],
        },
      });
    }

    // Setting state after compiling nodes and edges
    this.setState({
      compiledNodes: formatedNodesAndEdges,
    });
  };

  componentDidMount() {
    this.setNodesAndEdges();
  }

  /**
   * using this lifecycle hook for checking props
   * @param {*} updatedProps 
   */
  componentWillReceiveProps(updatedProps) {
    if(updatedProps.graphNodesAndEdges) {
      this.setState({
        graphNodes: updatedProps.graphNodesAndEdges
      })
    } else {
      this.setState({
        graphNodes: updatedProps.nodesEdges
      })
    }
    setTimeout(() => {
      this.setNodesAndEdges();
    }, 900);
  }

  render() {
    return (
      // TODO: Create a seperate component with optional functionality as well
      this.state.compiledNodes.length > 0 ? <CytoscapeComponent
      pan={ { x: 100, y: 200 } }
      maxZoom={1} // MaxZoom of graph
      elements={this.state.compiledNodes}
      stylesheet={[
        {
          selector: "node",
          style: {
            "background-color": "#282",
            label: "data(label)",
            width: 100,
            height: 100,
          },
        },
        {
          selector: "edge",
          style: {
            width: 3,
            "line-color": "#2d2d2d",
            "target-arrow-color": "orange",
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
          },
        },
      ]}
      style={{
        width: "1000px",
        height: "600px",
      }}
    /> : <h1>No nodes found</h1>
    );
  }
}

export default DirectedGraph;
