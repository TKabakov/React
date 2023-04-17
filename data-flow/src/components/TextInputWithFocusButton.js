import { useRef } from 'react';

//When you invoke the useRef hook, it will return a ref object. The ref object has a property named current.

function TextInputWithFocusButton () {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        //"current" points to the mounted text input element

        inputEl.current.focus();
    };

    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Forcus the input</button>
        </>
    )
}

export default TextInputWithFocusButton;