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
    }
  }

  componentDidMount() {
    console.log('EDGE NODES ++', this.state.graphNodes);
  }

  render(){
    // const layout = { name: 'cose-bilkent' };
    const elements = [
      {
        data: { id: "one", label: 'A' },
        position: { x: 200, y: 200 },
      },
      { data: { id: "two", label: "B" }, position: { x: 500, y: 200 } },
      {
        data: {
          source: "one",
          target: "two",
          label: "Edge from Node1 to Node2",
        },
      }
    ];

    return <CytoscapeComponent
    elements={elements}
    stylesheet={[
      {
        selector: 'node',
        style: {
          'background-color': '#282',
          'label': 'data(label)',
          'width': 100,
          'height': 100
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