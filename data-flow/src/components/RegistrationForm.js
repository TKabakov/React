import { useState } from "react";

function RegistationForm () {
    const [form, setFrom ] = useState (
        {
            firstName: "Luke",
            lastName: "Jones",
            email: "lukeJones@sculpure.com"
        }
    );

    return (
        <>
            <input type="text "value></input>
            <input type="text" value></input>
            <input type="email"></input>
        </>
    )
}