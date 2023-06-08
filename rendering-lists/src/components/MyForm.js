import React from 'react';
import { useId } from 'react';

function MyForm() {
    const ageInputId = useId();
  return (
    <div>
      <label>
        Text input:
        <input name="myInput" defaultValue="Some initial value"/>
      </label>
      <hr />
      <lablel>
        Checkbox: <input type="checkbox" name="myChenckbox" defaultChecked={ true } />
      </lablel>
      <hr />
      <p>
        Radio buttons:
        <label>
        <input type="radio" name="myRadio" value="option1" />
            Option1
        </label> 
        <label>
        <input type="radio" name="myRadio" value="option2" />
            Option2
        </label>
        <label>
        <input 
            type="radio" 
            name="myRadio" 
            value="option3"
            defaultChecked={true} />
            Option3
        </label>        
      </p>
      <hr />
      <label>
        Your first name:
        <input name="firstName" />
      </label>
      <hr />
        <label htmlFor={ageInputId}>Your age:</label>
        <input id={ageInputId} name="age" type="number" />
    </div>
  )
}

export default MyForm
