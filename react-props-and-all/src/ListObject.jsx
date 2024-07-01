
function ListObject(){
    // array of objects
    const fruits=[{id:1,name:"apple",cal:95},
                  {id:2,name:"orange",cal:45},
                  {id:3,name:"banana",cal:55},
                  {id:4,name:"coconut",cal:75},
                  {id:5,name:"pineapple",cal:90}];
                  
    fruits.sort((a,b)=>a.name.localeCompare(b.name)) // alphabetical order
    fruits.sort((a,b)=>b.name.localeCompare(a.name)) // reverse alphabetical order
    fruits.sort((a,b)=>a.cal-b.cal) // by calories in numeric order
    fruits.sort((a,b)=>b.cal-a.cal) // by calories in reverse numeric order

    const listItems=fruits.map(fruit=><li key={fruit.id}>
                                        {fruit.name}: &nbsp;       
                                        <b>{fruit.cal}</b></li>)
    return(<ol>{listItems}</ol>);
}
export default ListObject;