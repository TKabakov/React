import React from "react";

const Child = ({title, forwardedRef}) => {

    return
    <>
        <p
        ref={forwardedRef}
        > {title}</p>        
        <p> Passing referense 2</p>
    </>
}

export default Child;