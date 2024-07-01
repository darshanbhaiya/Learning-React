import React,{useState,createContext} from "react";
import ComponentB from "./ComponentB";

export const UserContext=createContext()

function ComponentA(){

    const [user,setUser]=useState("Darshan");

    return(
        <div className='box'>
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            {/* this is an exapmle to show what if we not use useContext */}
            <ComponentB user={user}/>
            {/* passing props in such way to ComponentD is called prop drilling */}

            <br />
            
            {/* using useContext */}
            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>

        </div>
    )
}
export default ComponentA;