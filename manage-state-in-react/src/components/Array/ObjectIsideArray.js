import { useState } from 'react';

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleToggleMyList(artworkId, nextSeen) {
    const myNextList = myList.map((artwork) => {
      if(artwork.id === artworkId){
        return {
          ...artwork, seen:nextSeen
        };
      }
      else {
       return artwork;
      }});

    setMyList(myNextList);
  }

  function handleToggleYourList(artworkId, nextSeen) {
    const yourNextList = yourList.map((artwork) => {
      if(artwork.id === artworkId){
        return {
          ...artwork, seen: nextSeen
        };
      }
      else {
       return artwork;
      }});

      setYourList(yourNextList);
    }

  return (
    <>
      <h2>Art Bucket List</h2>
      <h3>My list of art to see:</h3>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h3>Your list of art to see:</h3>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

