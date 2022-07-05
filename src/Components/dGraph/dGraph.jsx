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
      graphNodes: this.props.graphNodes ?? {},
      graphEdges: this.props.graphEdges ?? {}
    }

    console.log('EDGE NODES', this.state.graphEdges, this.state.graphNodes);
  }

  render(){
    // const layout = { name: 'cose-bilkent' };
    const elements = [
      this.state.graphNodes,
      { data: { id: "two", label: "B" }, position: { x: 500, y: 200 } },
      this.state.graphEdges
    ];

    return <CytoscapeComponent
    elements={elements}
    stylesheet={[
      {
        selector: 'node',
        style: {
          'background-color': '#282',
          'label': 'data(label)',
          //opacity: 0.3
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