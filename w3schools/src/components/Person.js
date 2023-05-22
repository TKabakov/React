import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>
        {person.name} is a {person.skill} developer at an age of {person.age}.
        </h2>
    </div>
  )
}

export default Person
