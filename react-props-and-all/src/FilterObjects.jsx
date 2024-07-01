
function FilterObjects(){
    // array of objects
    const fruits=[{id:1,name:"apple",cal:95},
                  {id:2,name:"orange",cal:45},
                  {id:3,name:"banana",cal:55},
                  {id:4,name:"coconut",cal:75},
                  {id:5,name:"pineapple",cal:90}];
  
    //filter objects by certain criteria
    const lowCalFruits=fruits.filter(fruit=>fruit.cal<60)
    
    const listItems=lowCalFruits.map(lowCalFruit=><li key={lowCalFruit.id}>
                                            {lowCalFruit.name}: &nbsp;       
                                            <b>{lowCalFruit.cal}</b></li>)
    return(<ol>{listItems}</ol>);
}
export default FilterObjects;