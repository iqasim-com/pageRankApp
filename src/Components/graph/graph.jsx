import React, { memo } from "react";
import DirectedGraph from "../dGraph/dGraph";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    // this.Nodes=nodesArray;
    // this.Edges=edgeArray;
    this.state = {
      Nodes: this.props.nodeArrays,
      Edges: this.props.Edges,
      pageRanks: []
    };

    console.log('Nodessss -- 1', this.state.Nodes);
  }

  componentWillMount() {
    this.PageRank();
    console.log('STATE UPDATED');
  }

  /**
   * Function for refresh nodes, calling this function after adding a new node or edge
   */
  refresh = () => {
    // let nl;
    // let el;
    // this.state.Edges.length == undefined
    //   ? (el = 0)
    //   : (el = this.state.Edges.length);
    // this.state.Nodes.length == undefined
    //   ? (nl = 0)
    //   : (nl = this.state.Nodes.length);
    console.log('Nodessss -- 2', this.state.Nodes);
    console.log('Nodessss -- 2', this.state.Edges);
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
   * Function for adding new node and its expecting node
   * @param node
   */
  add(node) {
    this.state.Nodes.push(node);
    this.refresh();
  }

  /**
   * Function for adding new edge, connect two nodes. Expecting connector
   * E.g ['A', 'B'] connecting two nodes
   * @param edge
   */
  add(edge) {
    this.state.Edges.push(edge);
    this.refresh();
  }

  /**
   * Function for getting pageRank, expecting
   * @param dampingFactor
   * @returns
   */
  PageRank(dampingFactor = 1) {
    //this.refresh();
    let PageRankDict = {};
    let nl;
    let el;
    this.state.Edges.length == undefined
      ? (el = 0)
      : (el = this.state.Edges.length);
    this.state.Nodes.length == undefined
      ? (nl = 0)
      : (nl = this.state.Nodes.length);

    for (let i = 0; i < nl; i++) {
      if (this.state.Nodes[i].OBLen > 0) {
        // console.log('el', el);
        for (let j = 0; j < el; j++) {
          if (this.state.Edges[j].connector[0] == this.state.Nodes[i].name) {
            for (let k = 0; k < nl; k++) {
              if (
                this.state.Nodes[k].name == this.state.Edges[j].connector[1]
              ) {
                // console.log(this.state.Nodes[i].prob / (this.state.Nodes[i].OBLen));
                this.state.Nodes[k].PageRank +=
                  this.state.Nodes[i].prob / this.state.Nodes[i].OBLen;
              }
            }
          }
        }
      }
    }

    for (let i = 0; i < nl; i++) {
      this.state.Nodes[i].PageRank =
        1 - dampingFactor + dampingFactor * this.state.Nodes[i].PageRank;
    }

    for (let i = 0; i < nl; i++) {
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
        <h1>Graph</h1>
        <button onClick={this.refresh}>Refresh Nodes</button>
        <DirectedGraph
          graphNodesAndEdges={{nodes: this.state.Nodes, nodesEdges: this.state.Edges}}
        />
      </>
    );
  }
}

export default memo(Graph);
