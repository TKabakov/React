import {useId, useState} from "react";


export default function Form2(){
 const ageInputId =useId();

 const [firstName, setFirstName] = useState('');
 const [age, setAge] = useState('20');
 const ageAsNumber = Number(age);
 
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
        <label>
            Text input:
            <input name="myInput" defaultValue="Some initial value" placeholder="More value"/>
        </label>
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
            <button type="reset">Reset form</button>
            <button type="submit">Submit form</button>
            <hr />
            <label>
                First name:
                <input
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </label>
            <label htmlFor={ageInputId}>
                Age:
                <input
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    type="number"
                />
                <button onClick={() => setAge(ageAsNumber + 10)}>
                    Add 10 years
                </button>
            </label>
            {firstName !== "" &&
                <p>Your name is {firstName}.</p>
            }
            {ageAsNumber > 0 &&
                <p>Your age is {ageAsNumber}.</p>
            }
        </form>
    </div>
  );
};

//By default, any <button> inside a <form> will submit it.
// If you have your own custom Button React component, consider returning <button type="button"> 
//instead of <button>