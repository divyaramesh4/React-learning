import { useState } from "react";
export default function MyComponents(){
    const [count, setCount] = useState(0)
    function increment(){
        setCount(count+1);

    }
    function decrement(){
        setCount(count-1);

    }
    function reset(){
        setCount(0);

    }
    return(<>
    <h1>count:{count}</h1>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={reset}>reset</button>
    </>
    );
}