import { useState} from 'react';
import withCounter from "./withCounter.js"
function ClickIncrease(props) {
  const [fontSize, setFontSize] = useState(10);
  //I'm not sure that %his is the right place
  const { counter, incrementCounter } = props;
  
  return(
      	<div>
          <button onClick={() => setFontSize((size) => size + 1)}>
            Increase with click
          </button>
          <p style={{ fontSize }}>
            Size of font in onClick function: 
            {fontSize}
          </p>
          <p> 
            The value of 'name' in ClickIncrease: {props.name}
          </p>
          <button onClick={() => incrementCounter()}>Increment counter</button>
          <p>The value of 'counter'in ClickIncrease :{counter} </p>
        </div>
    );
}

export default withCounter(ClickIncrease);