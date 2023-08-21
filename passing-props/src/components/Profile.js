import { getImageUrl } from './utils.js';

function Data({person,size}){
    return(
        <div>
        <h2>{person.name}</h2>
         <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={70}
         />
        <ul>
        <li>
            <b>Profession: </b> 
            {person.profession}
        </li>
        <li>
            <b>Awards:{person.awardNumber}</b> 
            {person.awardText}
        </li>
        <li>
            <b>Discovered: </b>
            {person.discovered}
        </li>
        </ul>
    </div>
    )
}

export default function Gallery() {
  return (
    <div>
 <h1>Notable Scientists</h1>
    <Data
        size={70}
        person={{
            name:"Maria Skłodowska-Curie",
            imageId:'szV5sdG',
            profession:"physicist and chemist",
            awardNumber:4 ,
            awardText:"(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
            discovered:"polonium (element)",
        }}
    />
    <Data
        size={70}
        person={{
            name:"Katsuko Saruhashi",
            imageId:'YfeOqp2',
            profession:"geochemist",
            awardNumber:2 ,
            awardText:"(Miyake Prize for geochemistry, Tanaka Prize)",
            discovered:"a method for measuring carbon dioxide in seawater",
        }}
    />
    </div>
  );
}
