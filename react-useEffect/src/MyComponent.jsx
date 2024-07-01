import React,{useState,useEffect} from "react";

function MyComponent(){
    const [count,setCount]=useState(0);
    const [color,setColor]=useState("green");

    // useEffect(() => {
    //     document.title=`Count: ${count}`;
    // })
    // runs after every re-render

    // useEffect(() => {
    //     document.title=`Count: ${count}`;
    // },[])
    // to render it only once when it mounts

    useEffect(() => {
        document.title=`Count: ${count} ${color}`;

        return()=>{
            // some cleanup code
        }

    },[count,color])
    // when component mounts or count changes, re-render this code


    function addCount(){
        setCount(c=>c+1);
    }
    function subCount(){
        setCount(c=>c-1);
    }
    function changeColor(){
        setColor(c=>c==='green' ?'red':"green");
    }

    return(
        <>
        <p style={{color:color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subCount}>Subtract</button>
        <br />
        <button onClick={changeColor}>Change Color</button>
        </>
    )
}
export default MyComponent;