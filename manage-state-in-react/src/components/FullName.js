//Avoid redundant state
//If you can calculate some information from the component’s props 
//or its existing state variables during rendering, 
//you should not put that information into that component’s state.

import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
 // const [fullName, setFullName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  //  setFullName(e.target.value + ' ' + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  //  setFullName(firstName + ' ' + e.target.value);
  }

//fullName is redundant. You can always calculate fullName 
//from firstName and lastName during render, so remove it from state.

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{firstName+ " " + lastName}</b>
      </p>
    </>
  );
}
