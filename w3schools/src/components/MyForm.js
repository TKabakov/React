import { useState } from 'react';

function MyForm () {
    const [name, setName] = useState("");
    
    return (
    <form>
        <label>Enter your name:
            <input
                type="text"
                value= { name }
                onCange={ (e) => setName(e.target.value)}
                />
        </label>
    </form>
    );
};

export default MyForm;