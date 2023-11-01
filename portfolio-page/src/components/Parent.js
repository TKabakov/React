import React, {useRef, useEffect} from "react";
import Child from "./Child";

const Parent = () => {

    const childRef = useRef(null);
    return(
        <Child forwardedRef={childRef} title='Passing refs'/>
    )
}

export default Parent;