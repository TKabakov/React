import { useState } from "react";

export default function Data(){

    const [person, setPerson] = useState({
        firstName: "Barbara" ,
        lastName: "Hpworth",
        email:"bhepworth@sculpture.com"
    });

    function handleFirstNameChange(e){
        person.firstName=e.target.value
        }
    }

    function handleLastNameChange(e){
        person.lastName=e.target.value
    }

    function handleEmailChange(e){
        person.email=e.target.value
    }

    return(
        <div>
       <label>
            First Name:
            <input
                value={person.firstName}
                onChange={handleFirstNameChange}>
            </input>
        </label>
        <label>
            Last Name:
            <input
                value={person.lasttName}
                onChange={handleLastNameChange}>                </input>
        </label>
        <label>
            Email:
            <input
                value={person.email}
                onChange={handleEmailChange}>
            </input>
        </label>
        </div>
 >
    )
}