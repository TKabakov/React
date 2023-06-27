import React from 'react'
import { useState } from 'react';


function Objects() {
    const [greeting, setGreeting] = useState(
        { 
            greet: "Hello",
            place: "World"
        }
        );
    console.log(greeting, setGreeting);
    
    function updateGreeting(){
        setGreeting(prevState => {
          return { ...prevState, place:"World-Wide Web"}
        });
    }   
  
    return (
    <div>
      <h1>{greeting.greet},{greeting.place}</h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}

export default Objects
