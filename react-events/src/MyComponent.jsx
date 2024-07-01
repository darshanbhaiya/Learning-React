import React,{useState} from 'react';
function MyComponent(){

    const [name,setName]=useState("Guest"); // to set initial state
    const [age,setAge]=useState(0);
    const [isEmployed,setIsEmployed]=useState(false);

    const updateName=()=>{
        setName("rotdu darshan") // re render virtual dom only that part (to update its value)
    }

    const incrementAge=()=>{
        setAge(age+1)
    }

    const toggleEmployedStatus=()=>{
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is Employed: {isEmployed?"Yes":"No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Employment Status</button>

        </div>
    );
}
export default MyComponent;