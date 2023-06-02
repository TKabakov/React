import { people } from './data.js';
import { getImageUrl } from './utils.js'
export default function List() {
  const Chemists = people.filter(person => person.profession === "chemist")
    .map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />

      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  const EveryoneElse = people.filter(person => person.profession !== "chemist")
    .map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />

      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
        <ul>{Chemists}</ul>
      <h2>Everyone Else</h2>
        <ul>{EveryoneElse}</ul>
    </article>
  );
}
