import { useState} from 'react';
import withCounter from "./withCounter.js"
function ClickIncrease() {
  const [fontSize, setFontSize] = useState(10);
  
  return(
      	<div>
          <button onClick={() => setFontSize((size) => size + 1)}>
            Increase with click
          </button>
          <p style={{ fontSize }}>
            Size of font in onClick function: 
            {fontSize}
          </p>
        </div>
    );
}

export default withCounter(ClickIncrease);