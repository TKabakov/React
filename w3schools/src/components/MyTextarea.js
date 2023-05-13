import { useState } from "react";

function MyTextarea() {
    const [textarea, steTextarea] = useState(
        "The content of  atext area goes in the value attribute"
    );

    const handleChange = (event) => {
        steTextarea(event.target.value)
    };

    return (
        <form>
            <textarea value={textarea} onChange={handleChange} />
        </form>
    );
};

export default MyTextarea;
