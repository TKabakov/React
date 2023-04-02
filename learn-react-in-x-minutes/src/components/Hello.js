import React from "react"

const Hello = () => {
//Class component using JSX:
//    return (
//        <div className="dummyClass">
//            <h2>Hello, Developer!</h2>
//        </div>
//    )

//Class component without JSX:
    return React.createElement(
        "div", 
        {id: "Hello", className: "dummyClass"}, 
        React.createElement("h1", null, "Hello, great developer!")
     )
//Every JSX is calling React.createElement()
}

export default Hello 