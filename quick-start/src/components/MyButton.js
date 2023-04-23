import { useState } from 'react';

function MyButton(){
    const[ count, setCount ] = useState(0);

    function handleClick() {
        alert ('You clicked the button!');

        setCount(count+1);

    }
    return (
        <button onClick={handleClick}>
            Clicked {count} times!
            </button>
    );
};

export default MyButton;