import React,{useContext} from "react";
import { UserContext } from "./ComponentA.jsx";
function ComponentD(props){

    const user=useContext(UserContext)

    return(
        <div className='box'>
            <h1>ComponentD</h1>

            <h2>{`Byee ${props.user} (through prop drilling)`}</h2>

            <h2>{`Byee ${user} (through useContext)`}</h2>

        </div>
    )
}
export default ComponentD;