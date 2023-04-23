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
//If you render the same componnet multiple times in App.js,
//each will get its own state.

export default MyButton;