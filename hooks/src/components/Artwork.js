import { useState } from 'react';

export default function Form(){
    const [person, setPerson] = useState({
      name: 'Niki de Saint Phalle',
      artwork: {
        title: 'Blue Nana',
        city: 'Hamburg',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
      }  
    });

   function handleNameChange(e){
        setPerson({
            ...person.artwork,
            name: e.target.value
        });
   } 

   function handleTitleChange(e){
        setPerson({
            ...person,
            title: e.target.value
        });     
   } 
   
   function handleCityChange(e){
        setPerson({
            ...person.artwork,
            city: e.target.value
        });
   } 

   function handleImageChange(e){
        setPerson({
            ...person.artwork,
            image: e.target.value
        });
   } 

   return (
        <>
            <label>
                Name:
                <input 
                    type='text'
                    value={person.name}
                    onChange={handleNameChange}
                /> 
            </label>
            <label>
                Title:
                <input 
                    type='text'
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                /> 
            </label>
            <label>
                City:
                <input 
                    type='text'
                    value={person.artwork.city}
                    onChange={handleCityChange}
                /> 
            </label>
            <label>
                Image:
                <input 
                    type='url'
                    value={person.artwork.image}
                    onChange={handleImageChange}
                /> 
            </label>
            <p>
                {person.artwork.title} 
                'by'
                {person.artwork.name}
                <br />
                '(located in {person.artwork.city})'
            </p>
            <img
                src={person.artwork.image}
                alt={person.artwork.title}
            />
        </>
   );
}