import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [item, setItem] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = item < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setItem(item + 1);
    } else {
      setItem(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[item];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({item + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}
