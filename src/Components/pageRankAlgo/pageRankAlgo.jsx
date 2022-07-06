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
import React, { memo } from "react";
// Component imports
import DirectedGraph from "../dGraph/dGraph";

/**
 * Implementation of Pagerank Algorithm
 */
class PageRankAlgo extends React.Component {
  constructor(props) {
    super(props);

    // Local Component state
    this.state = {
      Nodes: this.props.nodeArrays,
      Edges: this.props.Edges,
      pageRanks: []
    };
  }

  componentDidMount() {
    this.PageRank();
  }

  componentWillReceiveProps(prop) {
    this.setState({
      Nodes: prop.nodeArrays
    })
    this.setState({
      Edges: prop.Edges
    })
    setTimeout(() => {
      this.refresh();
      this.PageRank();
    }, 1000);
    
  }

  /**
   * Function for refresh nodes, calling this function after adding a new node or edge
   * prob and OBLen
   */
  refresh = () => {
    console.log(this.state.Nodes);
    for(let i = 0; i < this.state.Nodes?.length; i++) {
      this.state.Nodes[i].OBLen = 0;
      this.state.Nodes[i].PageRank = 0;
    }
    for (let i = 0; i < this.state.Nodes?.length; i++) {
      this.state.Nodes[i].prob = 1 / this.state.Nodes?.length;
      for (let j = 0; j < this.state.Edges.length ?? 1; j++) {
        if (this.state.Nodes[i].name == this.state.Edges[j].connector[0]) {
          this.state.Nodes[i].OBLen += 1;
        }
      }
    }
  }

  /**
   * Function for getting pageRank, expecting
   * I'm passing some hardcoded indexes because connector array has only 2 elements start and end value
   * E.G of connector is ["A", "B"] outbound link from A to B
   * @param dampingFactor = 1
   * @returns pageRankDict
   */
  PageRank(dampingFactor = 1) {
    let PageRankDict = {};

    for (let i = 0; i < this.state.Nodes.length; i++) {
      if (this.state.Nodes[i].OBLen > 0) {
        for (let j = 0; j < this.state.Edges.length; j++) {
          if (this.state.Edges[j].connector[0] == this.state.Nodes[i].name) {
            for (let k = 0; k < this.state.Nodes.length; k++) {
              if (
                this.state.Nodes[k].name == this.state.Edges[j].connector[1]
              ) {
                this.state.Nodes[k].PageRank +=
                  this.state.Nodes[i].prob / this.state.Nodes[i].OBLen;
              }
            }
          }
        }
      }
    }

    for (let i = 0; i < this.state.Nodes.length; i++) {
      this.state.Nodes[i].PageRank =
        1 - dampingFactor + dampingFactor * this.state.Nodes[i].PageRank;
    }

    for (let i = 0; i < this.state.Nodes.length; i++) {
      PageRankDict[this.state.Nodes[i].name] = this.state.Nodes[i].PageRank;
    }

    this.setState({
      pageRanks: PageRankDict,
    });

    return PageRankDict;
  }

  render() {
    return (
      <>
        <h1>Directed Graph</h1>
        <DirectedGraph
          graphNodesAndEdges={{
            nodes: this.state.Nodes,
            nodesEdges: this.state.Edges,
          }}
        />
      </>
    );
  }
}

export default memo(PageRankAlgo);
