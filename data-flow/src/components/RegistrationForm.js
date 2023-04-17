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
                }}></input>
            <lable for="lastName">Last name:</lable>
            <input 
                type="text"
                id="lastName"
                value={form.lastName}
                onChange={e => {
                    setForm({
                        ...form,
                        lastName: e.target.value
                    });
                }}></input>
            <lable for="email">e-mail:</lable>
            <input 
                type="email"
                id="email"
                value={form.email}
                onChange={e => {
                    setForm({
                        ...form,
                        email: e.target.value
                    });
                }}></input>
        </>
    )
}

export default RegistrationForm;