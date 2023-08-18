import React from 'react';
import { useState } from 'react';

function FormControlled() {
    const [value, setValue] = useState('');
    
    const handleChange = (e) => {
        setValue(e.target.value)
    };
    
    return (
    <div>
      <form>
        <input
            value={value}
            onChange={handleChange}
            text='text'
        />
      </form>
    </div>
  );
}

export default FormControlled
