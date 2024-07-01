
function Button2(){
    // use camel case
    // all values should be string
    // property should be comma seperated
    const styles={
            backgroundColor: "lightgreen",
            color:"white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor:"pointer",
    }

    return(
        <button style={styles}>Click Me</button>
    )
}
export default Button2;