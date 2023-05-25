import { people } from './components2/data.js';
import { getImageUrl } from './components2/utils.js';

export default function List() {
  const Chemists = people.filter(person => person.profession === "chemist");
  const EveryoneElse = people.filter(person => person.profession !== "chemist"
                                     );
  
  const Chem = Chemists.map(person =>
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

  const Else = EveryoneElse.map(person =>
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
      <ul>{Chem}</ul>
      <h2>Everyone Else</h2>
      <ul>{Else}</ul>
    </article>
  );
}
