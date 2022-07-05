import React from 'react';

const Circle = ({ nodeName, pageRank }) => {
  return (
    <>
      <div className='circle'>
        <h3>{nodeName}</h3>
        <h5>{pageRank}</h5>
      </div>
    </>
  )
}

export default Circle;