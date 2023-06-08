import React from 'react'

function MyForm() {
  return (
    <div>
      <label>
        Text input:
        <input name="myInput"/>
      </label>
      <hr />
      <lablel>
        Checkbox: <input type="checkbox" name="myChenckbox" />
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
        <input type="radio" name="myRadio" value="option2" />
            Option2
        </label>        
      </p>
    </div>
  )
}

export default MyForm
