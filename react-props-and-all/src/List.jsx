
function List(){
    // JS array/List
    const fruits=["apple","orange","banana","coconut","pineapple"];
    fruits.sort();
    // array of string -> array of list item elements
    const listItems=fruits.map(fruit=><li>{fruit}</li>)
    return(<ol>{listItems}</ol>);
}
export default List;