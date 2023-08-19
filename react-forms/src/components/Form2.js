import {useId} from "react";

export default function Form2(){
 const ageInputId =useId();
 
 function handleSubmit(e){
    //Prevent the browser from reloading the page
    e.preventDefault();

    //Read the form data
    const form = e.target;
    const formData = new FormData(form);

    //You can workt with the formData as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
 }
  return (
    <div>
        <form onSubmit={handleSubmit} method="post">
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
                Your age:
                <input
                    id={ageInputId}
                    name="age"
                    type="number"
                />
            </label>
            <hr />
            <button type="reset">Reset form</button>
            <button type="submit">Submit form</button>
        </form>
    </div>
  );
};

//By default, any <button> inside a <form> will submit it.
// If you have your own custom Button React component, consider returning <button type="button"> 
//instead of <button>