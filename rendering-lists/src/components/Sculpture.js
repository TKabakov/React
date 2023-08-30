import React from 'react';
import { useState } from 'react';
import { sculptureList } from './sculptureList';

export default function Sculpture() {

  const [index, setIndex]=useState(0);

  function handleClick(){
    setIndex( index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <div>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name}</i> 
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {showMore && sculpture.description}
      </p>
    </div>
  );
};
