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
        const newGreeting = {...greeting};
        newGreeting.greet = "Hello, World-Wide Web";
        setGreeting(newGreeting);
    }   
  
    return (
    <div>
      <h1>{greeting.greet}</h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}

export default Objects
