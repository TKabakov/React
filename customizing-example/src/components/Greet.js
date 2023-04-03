import React from "react"

export const Greet = props => {
    console.log(props)
    return<h1>Hello {props.name} a.k.a. {props.heroName} </h1>  //named export
}

//export default Greet