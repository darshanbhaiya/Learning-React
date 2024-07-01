import React,{useState,useEffect} from "react";

function MyComponent2(){
    
    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",haandleResize);
        console.log("Evenet Listener Added");

        return()=>{
            window.removeEventListener("resize",haandleResize);
            console.log("Evenet Listener Removed");
        }
    },[])
    // only one eventListener is added when the component is mounted

    useEffect(()=>{
        document.title=`Size: ${width} X ${height}`;
    },[width,height]);

    function haandleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(
        <>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
        </>
    )
}
export default MyComponent2;