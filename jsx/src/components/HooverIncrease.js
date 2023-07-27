import { useState} from 'react';

function HooverIncrease() {
    const [fontSize, setFontSize] = useState(10);
    
    return(
            <div>
            <button onMouseOver={() => setFontSize((size) => size + 1)}>
              Increase on mouse hoover
            </button>
            <p style={{ fontSize }}>
                Size of font in onMouseOver function: 
                {fontSize}
            </p>
          </div>
      );
  }
  
  export default HooverIncrease;