import React from 'react';
import { useRef } from 'react';

function Form() {
    const inputRef = useRef(null);

    const handleSubmit = () => {
        const inputValue = inputRef.current.value;
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type='text' />
        </form>
    </div>
  )
}

export default Form
