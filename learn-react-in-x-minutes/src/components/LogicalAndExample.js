import React from 'react'

function LogicalAndExample() {
    const val = prompt("Anything but a 0")
    //you ask the user to type into the prompt, specifying that you require anything other than a zero character; 
    //and you save the input into the val value.

  return (
    <div>
        <h1>Please don't type in a zero</h1>
        {val && 
            <h2>Yay, no 0 was typed in!</h2>}
    </div>
  )
}

//if a prop gets evaluated to true, using the && operator, 
//you can render whatever JSX elements you want to the right of the && operator.

export default LogicalAndExample;

