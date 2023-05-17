import { useState, useEffect } from "react";

function Counter (){
    const [count, setCount] = useState (0);
    const [count2, setCount2] = useState (0);
    const [calculation, setCalculation] = useState (0);

    useEffect(() => {
        setCalculation (() => count + count2);
    }, [count, count2]); //<- add the count variable here

    return (
        <>
            <p>Count 1: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Count 2: {count2}</p>
            <button onClick={() => setCount2((d) => d + 1)}>+</button>
            <p>Counts sum up: { calculation }</p>
        </>
    )
}

export default Counter;
