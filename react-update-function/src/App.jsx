// updater function => a function passed as an argument to setState() usually
//                ex. setYear(year+1) => setYear(arrow function) => setYear(y => y+1) or setYear(prevYear => prevYear+1)
//                Allow for safe updates based on the previous state
//                Used with multiple state updates and asynchronous functions
//                Good practice to use updater functions


// if our function has a parameter
// function(e) -> it gets called automatically
// ()=>function(e) -> so use arrow function , it will be called only if it is called

import Counter from './Counter.jsx'
import MyComponent from './MyComponent.jsx'
import UpdateArray from './UpdateArray.jsx'
import ArrayOfObject from './ArrayOfObject.jsx'
function App() {

  return (
    <>
    <Counter/>
    <br />
    <MyComponent/>
    <br />
    <UpdateArray/>
    <br />
    <ArrayOfObject/>
    </>
  )
}

export default App
