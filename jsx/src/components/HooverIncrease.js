import { useState} from 'react';
import withCounter from "./withCounter.js"

function HooverIncrease(props) {
    const [fontSize, setFontSize] = useState(10);
    const { counter, setCounter } = props;
    return(
            <div>
            <button onMouseOver={() => setFontSize((size) => size + 1)}>
              Increase on mouse hoover
            </button>
            <p style={{ fontSize }}>
                Size of font in onMouseOver function: 
                {fontSize}
            </p>
            <p>
              The value of 'name' in HooverIncrease: {props.name}
            </p>
            <button onClick={() => incrementCounter()}>incrementCounter</button>
            <p>The value of 'counter'in HooverIncrease :{counter} </p>
          </div>
      );
  }
  
  export default withCounter(HooverIncrease);
  