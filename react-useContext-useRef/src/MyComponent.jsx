import React,{useState,useEffect,useRef} from "react";

function MyComponent(){

    let [number,setNumber]=useState(0);
    // useState causes the component to re-render when state variable changes

    // useRef does not causes the component to re-render when ref variable changes

    const ref=useRef(0);
    const reff=useRef("pizza");
    const inputRef1=useRef(null);
    const inputRef2=useRef(null);
    const inputRef3=useRef(null);
    // useRef returns a ref object with a single current property initially set to the
    // initial value you provided

    // useRef() returns an object having property current
    console.log(ref)
    console.log(reff)

    // it will print whenever the component re renders
    useEffect(()=>{
        console.log("Component Rendered")
        console.log(inputRef1)
    });


    function handleClick(){
        setNumber(n=>n+1);
    }

    function handleClickRef(){
        // ref.current=ref.current+1;
        ref.current++;
        // console.log(ref)
        console.log(ref.current)
        // ref returns object, to see its value use .current
    }

    function handleClickInputRef1(){
        inputRef1.current.focus() // it will focus on input element
        // inputRef.current => it will give the html element of input
        inputRef1.current.style.backgroundColor="yellow";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }

    function handleClickInputRef2(){
        inputRef2.current.focus() // it will focus on input element
        // inputRef.current => it will give the html element of input
        inputRef2.current.style.backgroundColor="yellow";
        inputRef1.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }
    function handleClickInputRef3(){
        inputRef3.current.focus() // it will focus on input element
        // inputRef.current => it will give the html element of input
        inputRef3.current.style.backgroundColor="yellow";
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="";
    }

    return(
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <br /><br />
            <button onClick={handleClickRef}>Click Me!</button>
            <br /><br /><br /><br />


            <button onClick={handleClickInputRef1}>Click Me!</button>
            <input  ref={inputRef1}  />
            {/* ref in html => special attribute used to create references to element*/}
            {/* When the component mounts, inputRef1.current will point to the DOM node 
            of this input element. This allows direct manipulation of the input element via inputRef2.current. */}

            <button onClick={handleClickInputRef2}>Click Me!</button>
            <input  ref={inputRef2}  />

            <button onClick={handleClickInputRef3}>Click Me!</button>
            <input  ref={inputRef3}  />
        </div>
    )
}
export default MyComponent;