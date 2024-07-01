import React,{useState} from 'react';


// learning how to update state of array
function UpdateArray(){

    const [foods,setFoods]=useState(["Apple","Orange","Kiwi","Strawberry"])

    function handleAddFood(){
        const newFood=document.getElementById("foodInput").value;   
        document.getElementById("foodInput").value="";   

        setFoods(f=>[...f,newFood]) 
        //  spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.
    }
    
    function handleRemoveFood(index){
        setFoods(foods.filter((_,i)=> i!==index))
        // _ => convention => parameter passed is not used in function here element i.e. ignored
        // here we have used 'i' insted of 'index' to avoid naming conflict
    }
    return(
        <div>
            <h2>List of food</h2>
            <ul>
                {foods.map((food,index)=> <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>)}
            </ul>

            <input type="text" id="foodInput" placeholder='Enter food name' />
            <button onClick={handleAddFood}>Add food</button>
           
        </div>
    );                            

}
export default UpdateArray;