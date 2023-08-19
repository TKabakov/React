import {useId} from "react";

export default function Form2(){
 const ageInputId =useId();
 
  return (
    <div>
        <lable>
            Text input:
            <input name="myInput" defaultValue="Some initial value" placeholder="More value"/>
        </lable>
        <hr />
        <label>
            Checkbox:
            <input type="checkbox" name="myCheckbox" defaultChecked={true} />
        </label>
        <hr />
            <p>
                Radio buttons:
                <hr />
                <label>  
                    <input 
                      type="radio" 
                      name="myRadio" 
                      value="optipn 1"
                    />
                    Option 1
                </label>
                <hr />                
                <label>
                    <input 
                      type="radio" 
                      name="myRadio" 
                      value="optipn 2"
                      defaultChecked={true}
                    />
                    Option 2
                </label>
                <hr />              
                <label>
                    <input 
                      type="radio" 
                      name="myRadio" 
                      value="optipn 3"
                    />
                    Optipn 3
                </label>
                <hr />
            </p>
            <label>
                Your first name:
                <input name="firstName" />
                </label>
             <hr />
            <label htmlFor={ageInputId}>
                <input
                    id={ageInputId}
                    name="age"
                    type="number"
                />
            </label>
    </div>
  );
};