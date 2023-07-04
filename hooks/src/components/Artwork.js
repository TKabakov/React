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

}