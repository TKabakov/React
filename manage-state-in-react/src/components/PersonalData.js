import { useState } from "react";

export default function Data(){

    const [person, setPerson] = useState({
        firstName: "Niki" ,
        lastName: "de Saint Phalle",
        email:"bhepworth@sculpture.com",
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
          }
    });

    function handleFirstNameChange(e){
        setPerson({
            ...person,
            firstName: e.target.value
        });
    }

    function handleLastNameChange(e){
        setPerson({
            ...person,
            lastName: e.target.value
        });
    }

    function handleEmailChange(e){
        setPerson({
            ...person,
            email: e.target.value
        });
    }

    function handleTitleChange(e){
        setPerson({
            ...person,
            artwork:{
                ...person.artwork,
                title: e.target.value
            }
        })
    }

    function handleCityChange(e){
        setPerson({
            ...person,
            artwork:{
                ...person.artwork,
                city: e.target.value
            }
        })
    }

    function handleImageChange(e){
        setPerson({
            ...person,
            artwork:{
                ...person.artwork,
                image: e.target.value
            }
        })

    }

    return(
        <div>
       <label>
            First Name:
            <input
                value={person.firstName}
                onChange={handleFirstNameChange}
            />
        </label>
        <label>
            Last Name:
            <input
                value={person.lastName}
                onChange={handleLastNameChange}/>
        </label>
        <label>
            Email:
            <input
                value={person.email}
                onChange={handleEmailChange}
            />
        </label>
        <label>
            Artwork Title:
            <input
                value={person.artwork.title}
                onChange={handleTitleChange}
            />
        </label>
        <label>
            City:
            <input
                value={person.artwork.city}
                onChange={handleCityChange}
            />
        </label>
        <label>
            Image:
            <input
                value={person.artwork.image}
                onChange={handleImageChange}
            />
        </label>
        <p>
            <i>{person.artwork.title}</i>
            {" by "}
            {person.firstName}{" "}{person.lastName}
            <br />
            (located in {person.artwork.city})
        </p>
        <img
            src={person.artwork.image}
            alt={person.artwork.title}
        />
        </div>
    );
}