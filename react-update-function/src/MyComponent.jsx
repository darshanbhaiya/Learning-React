import React,{useState} from 'react';


// learning how to update state of objects
function MyComponent(){

    const [car,setCar]=useState({year:2024,
                                make:"FERRARI",
                                model:"ROMA"
                                })
    
    function handleYearChange(event){
        setCar(c=>({...c,year:event.target.value})); // spread operator=> add new entry in a object => previous(year) is not used becoz key is duplicate
        //  spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.
    }
    function handleMakeChange(event){
        setCar(c=>({...c,make:event.target.value}));
    }
    function handleModelChange(event){
        setCar(c=>({...c,model:event.target.value}));
    }

    return(
        <div>
           <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
            
           <input type="number" value={car.year} onChange={handleYearChange}/><br />
           <input type="text" value={car.make} onChange={handleMakeChange}/><br />
           <input type="text" value={car.model} onChange={handleModelChange}/><br />
        </div>
    );                            

}
export default MyComponent;