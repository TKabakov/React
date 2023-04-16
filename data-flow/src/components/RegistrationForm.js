import { useState } from "react";

function RegistrationForm () {
    const [form, setForm ] = useState (
        {
            firstName: "Luke",
            lastName: "Jones",
            email: "lukeJones@sculpure.com"
        }
    );

    return (
        <>
            <lable for="firstName">First name:</lable>
            <input 
                type="text"
                id="firstName"
                value={form.firstName}
                onChange={e => {
                    setForm({
                        ...form,
                        firstName: e.target.value
                    });
                }}
                ></input>
            <input type="text" value></input>
            <input type="email"></input>
        </>
    )
}

export default RegistrationForm;