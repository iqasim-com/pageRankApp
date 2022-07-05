import React from "react";
import DirectedGraph from "../dGraph/dGraph";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    // this.Nodes=nodesArray;
    // this.Edges=edgeArray;
    this.state = {
      Nodes: this.props.nodeArrays,
      Edges: this.props.Edges,
      pageRanks: [],
    };
  }

  componentWillMount() {
    this.PageRank();
  }

  // componentDidMount() {
  //   console.log(this.state.pageRanks.A);
  // }

  /**
   * Function for refresh nodes, calling this function after adding a new node or edge
   */
  refresh() {
    let nl;
    let el;
    this.state.Edges.length == undefined
      ? (el = 0)
      : (el = this.state.Edges.length);
    this.state.Nodes.length == undefined
      ? (nl = 0)
      : (nl = this.state.Nodes.length);
    for (let i = 0; i < nl; i++) {
      this.state.Nodes[i].prob = 1 / nl;
      for (let j = 0; j < el ?? 1; j++) {
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
        <DirectedGraph
          graphNodes={{
            data: { id: "one", label: this.state.pageRanks.A.toPrecision(3) },
            position: { x: 200, y: 200 },
          }}
          graphEdges={{
            data: {
              source: "one",
              target: "two",
              label: "Edge from Node1 to Node2",
            },
          }}
        />
      </>
    );
  }
}

export default Graph;
