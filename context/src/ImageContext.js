import { useState } from 'react';
import { places } from './data.js';
import { getImageUrl } from './utils.js';
import { createContext, useContext } from 'react';

const ImageContext = createContext(null);

export default function Image() {
  const [isLarge, setIsLarge] = useState(false);

  const imageSize = isLarge ? 250 : 150;

  return (
    <>
    <ImageContext.Provider
        value={
            imageSize
        }
    >
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked) ;
          }}
        />
        Use large images
      </label>
      <hr />
      <List/>  
    </ImageContext.Provider>
    </>
  )
}

function List({ children }) {

  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
      />
      { children}
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({place, children}) {

  return (
    <>
      <PlaceImage
        place={place}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
        { children }
      </p>
    </>
  );
}

function PlaceImage({ place, children }) {
    const imageSize = useContext(ImageContext);
    
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
