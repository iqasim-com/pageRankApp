import React from "react";
import ReactDOM from 'react-dom';
import CytoscapeComponent from 'react-cytoscapejs';

/**
 * Class component for Directed Graph, expecting following props
 * nodes, edges
 */
class DirectedGraph extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      graphNodes: this.props.graphNodesAndEdges ?? {},
      compiledNodes: [
        { data: { id: "A", label: "A: " + '0.458' }, position: { x: 200, y: 200 } },
        { data: { id: "B", label: "B: " + '0.083' }, position: { x: 500, y: 200 } },
        { data: { id: "C", label: "C: " + '0.208' }, position: { x: 500, y: 400 } },
        { data: { id: "D", label: "D: " + '0' }, position: { x: 200, y: 400 } },
        { data: { source: "B", target: "C", label: "Edge from Node1 to Node2" } },
        { data: { source: "B", target: "A", label: "Edge from Node1 to Node2" } },
        { data: { source: "C", target: "A", label: "Edge from Node1 to Node2" } },
        { data: { source: "D", target: "C", label: "Edge from Node1 to Node2" } },
        { data: { source: "D", target: "B", label: "Edge from Node1 to Node2" } },
        { data: { source: "D", target: "A", label: "Edge from Node1 to Node2" } },
      ]
    }
  }

  componentDidMount() {
    let nodess = [];
    this.state.graphNodes.nodes?.map((res, index) => {
      nodess.push({ data: { id: res.name, label: res.name + " " + res.PageRank.toPrecision(3) }, position: { x: 200, y: 200 } })
    })

    for(let i = 0; i < this.state.graphNodes.nodesEdges.length; i++) {
      nodess.push({ data: { source: this.state.graphNodes.nodesEdges[i].connector[0], target: this.state.graphNodes.nodesEdges[i].connector[1], label: "Edge from Node1 to Node2" } })
    }

    this.setState({
      compiledNodes: nodess
    })

  }

  render(){
    return <CytoscapeComponent
    elements={this.state.compiledNodes}
    stylesheet={[
      {
        selector: 'node',
        style: {
          'background-color': '#282',
          'label': 'data(label)',
          'width': 100,
          'height': 100,
          //'opacity': 0.3
        }
      },
      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': '#2d2d2d',
          'target-arrow-color': 'orange',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier'
        }
      }
    ]}
    style={{
      width: "1000px",
      border: "1px solid",
      height: "600px"
    }}
  />
  }
}

export default DirectedGraph;