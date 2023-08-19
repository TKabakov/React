export default function Form2(){
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
        <label>
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
        </label>
    </div>
  )
}