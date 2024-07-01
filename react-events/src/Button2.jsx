function Button2(){
    // const handleClick=(e)=>console.log(e); 

    // by convention use event or e only
    const handleClick=(e)=>e.target.textContent="OOOUCH! 😣"
    // with click events we are automatically provided event argument
    return(
    <button onDoubleClick={(e)=>handleClick(e)}>Click me 😃</button>
    )
}
export default Button2;
