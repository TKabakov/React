import React from "react"

const Hello = () => {
//    return (
//        <div>
//            <h2>Hello, Developer!</h2>
//        </div>
//    )
    return React.createElement(
        "div", 
        null, 
        React.createElement("h1", null, "Hello, great developer!")
     ) 
}

export default Hello 