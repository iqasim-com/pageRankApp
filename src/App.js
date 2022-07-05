import React from 'react';
import './App.css';
import Graph from './Components/graph/graph';

function App() {
  return (
    <div className="App">
      <h1>Page Rank -</h1>
      <Graph nodeArrays={[
        { radius: 2, OBLen: 0, prob: 0.25, PageRank: 0, name: 'A' },
        { radius: 2, OBLen: 2, prob: 0.25, PageRank: 0, name: 'B' },
        { radius: 2, OBLen: 1, prob: 0.25, PageRank: 0, name: 'C' },
        { radius: 2, OBLen: 3, prob: 0.25, PageRank: 0, name: 'D' }
      ]} Edges={[
        { connector: [ 'B', 'C' ] },
        { connector: [ 'B', 'A' ] },
        { connector: [ 'C', 'A' ] },
        { connector: [ 'D', 'C' ] },
        { connector: [ 'D', 'B' ] },
        { connector: [ 'D', 'A' ] }
      ]} />
    </div>
  );
}

export default App;
