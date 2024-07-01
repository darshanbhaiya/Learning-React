import React,{useState} from 'react';
function Counter(){
    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)

        // PS => previous state
        // in reality => PS+1 => PS+1 => PS+1 => then update is done
        

        // when we press on increment button it increments only by one
        // becoz
        // uses the CURRENT state to calculate the NEXT state
        // set function do not trigger an update
        // react batches together state updates for performance reasons
        // NEXT state becomes the current state after an update

        // to solve this problem we either use prev or first letter of state variable
        setCount(prevCount => prevCount+1)
        setCount(c => c+1)
        setCount(c => c+1)
        // takes the PENDING state to calculate NEXT state
        // react puts your updater function in a queue(waiting in line)
        // during the next render, it will call them in the same order

    }
    const decrement=()=>{
        setCount(prevCount => prevCount-1)
        setCount(prevCount => prevCount-1)
        setCount(prevCount => prevCount-1)
    }
    const reset=()=>{
        setCount(c => c=0)
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    )
}
export default Counter;